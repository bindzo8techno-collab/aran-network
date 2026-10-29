import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { ChatBubbleLeftRightIcon, XMarkIcon } from './icons';
import { submitEnquiry } from '../lib/submitEnquiry';

interface QuickInquiryProps {
  productName: string;
}

type FormState = {
  name: string;
  email: string;
  message: string;
};

type ErrorState = FormState;
type TouchedState = { [K in keyof FormState]: boolean };

const QuickInquiry: React.FC<QuickInquiryProps> = ({ productName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: `I'm interested in the ${productName}. Please provide more information.`,
  });
  const [errors, setErrors] = useState<ErrorState>({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState<TouchedState>({ name: false, email: false, message: false });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Reset form when product changes or panel closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset to allow closing animation to finish
      const timer = setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: `I'm interested in the ${productName}. Please provide more information.`,
        });
        setErrors({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setStatus('');
        setLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [productName, isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateField = (name: keyof FormState, value: string): string => {
    switch (name) {
      case 'name':
        if (!value) return 'Full Name is required.';
        if (value.length < 2) return 'Full Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value) return 'Email Address is required.';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Email address is invalid.';
        return '';
      case 'message':
        if (!value) return 'Message is required.';
        if (value.length < 10) return 'Message must be at least 10 characters.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: keyof FormState; value: string };
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: keyof FormState; value: string };
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    const isFormValid = !Object.values(newErrors).some(error => error);

    if (isFormValid) {
      setLoading(true);
      setStatus('');
      try {
        await submitEnquiry(formData);
        setStatus('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: `I'm interested in the ${productName}. Please provide more information.`,
        });
        setTouched({ name: false, email: false, message: false });
        setErrors({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } catch (error) {
        console.error('Failed to submit product enquiry', error);
        setStatus('There was an error sending your message. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  const getInputClasses = (fieldName: keyof FormState) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const isSuccess = touched[fieldName] && !errors[fieldName] && formData[fieldName];

    if (hasError) {
      return 'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500';
    }
    if (isSuccess) {
      return 'border-green-500 text-green-900 placeholder-green-300 focus:ring-green-500 focus:border-green-500';
    }
    return 'border-gray-300 focus:ring-primary focus:border-primary';
  };

  const isSubmitDisabled = loading || !formData.name || !formData.email || !formData.message || Object.values(errors).some(e => e);

  return (
    <>
      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Quick Inquiry Form"
        className="fixed bottom-8 right-8 z-[49] p-4 rounded-full bg-primary text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        <ChatBubbleLeftRightIcon className="h-7 w-7" />
      </button>

      {/* Inquiry Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-inquiry-title"
        className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`fixed bottom-0 right-0 h-auto max-h-[90vh] w-full max-w-md bg-white shadow-2xl rounded-t-lg md:rounded-tl-lg md:rounded-tr-none transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 id="quick-inquiry-title" className="text-lg font-semibold text-dark">
                Quick Inquiry for <span className="text-primary">{productName}</span>
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-dark"
                aria-label="Close form"
              >
                <XMarkIcon className="block h-6 w-6" />
              </button>
            </div>
            {/* Form */}
            <div className="overflow-y-auto p-6 flex-grow">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="quick-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="quick-name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.name && errors.name)}
                    aria-describedby="quick-name-error"
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${getInputClasses('name')}`}
                  />
                  {touched.name && errors.name && <p id="quick-name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="quick-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="quick-email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.email && errors.email)}
                    aria-describedby="quick-email-error"
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${getInputClasses('email')}`}
                  />
                  {touched.email && errors.email && <p id="quick-email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="quick-message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    id="quick-message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.message && errors.message)}
                    aria-describedby="quick-message-error"
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${getInputClasses('message')}`}
                  ></textarea>
                  {touched.message && errors.message && <p id="quick-message-error" className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Spinner size="sm" />
                        <span className="ml-2">Sending...</span>
                      </>
                    ) : 'Send Inquiry'}
                  </button>
                </div>
                {status && <p className="text-center text-green-600 mt-4">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickInquiry;

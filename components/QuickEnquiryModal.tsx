import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Spinner from './Spinner';
import { XMarkIcon } from './icons';
import { PRODUCT_CATEGORIES } from '../constants';
import { submitEnquiry } from '../lib/submitEnquiry';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  product: string;
  message: string;
};

type ErrorState = Partial<FormState>;
type TouchedState = { [K in keyof FormState]?: boolean };

const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    product: '',
    message: '',
  });
  const [errors, setErrors] = useState<ErrorState>({});
  const [touched, setTouched] = useState<TouchedState>({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          city: '',
          product: '',
          message: '',
        });
        setErrors({});
        setTouched({});
        setStatus('');
        setLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
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
      case 'phone':
        if (!value) return 'Phone Number is required.';
        if (!/^\d{10,}$/.test(value.replace(/\s/g, '')))
          return 'Phone number must be at least 10 digits.';
        return '';
      case 'company':
        return ''; // Optional
      case 'city':
        if (!value) return 'City is required.';
        return '';
      case 'product':
        if (!value) return 'Please select a product category.';
        return '';
      case 'message':
        if (value && value.length < 10)
          return 'Message must be at least 10 characters.';
        return ''; // Optional
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target as { name: keyof FormState; value: string };
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target as { name: keyof FormState; value: string };
    if (!touched[name]) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationErrors: ErrorState = {};
    (Object.keys(formData) as Array<keyof FormState>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) formValidationErrors[key] = error;
    });

    setErrors(formValidationErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      city: true,
      product: true,
      message: true,
    });

    if (Object.keys(formValidationErrors).length === 0) {
      setLoading(true);
      setStatus('');
      try {
        await submitEnquiry(formData);
        setStatus('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          city: '',
          product: '',
          message: '',
        });
        setTouched({});
        setErrors({});
        setTimeout(() => setStatus(''), 5000);
      } catch (error) {
        console.error('Failed to submit quick enquiry', error);
        setStatus('There was an error sending your message. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  const getInputClasses = (fieldName: keyof FormState) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const isSuccess =
      touched[fieldName] && !errors[fieldName] && formData[fieldName];
    if (hasError)
      return 'border-red-500 focus:ring-red-500 focus:border-red-500';
    // Don't show success for optional fields if they are empty
    if (isSuccess || (touched[fieldName] && !errors[fieldName] && (fieldName !== 'company' && fieldName !== 'message')))
      return 'border-green-500 focus:ring-green-500 focus:border-green-500';
    return 'border-gray-300 focus:ring-primary focus:border-primary';
  };

  const isSubmitDisabled =
    loading ||
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.city ||
    !formData.product ||
    Object.values(errors).some((e) => e);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledBy="enquiry-modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto transform transition-all relative">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-1 rounded-full text-gray-500 hover:bg-gray-200 hover:text-dark transition-colors z-10"
          aria-label="Close"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="p-6">
          <h2
            id="enquiry-modal-title"
            className="text-2xl font-bold text-dark mb-2 text-center"
          >
            Quick Enquiry
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Fill out the form below and we&apos;ll get back to you shortly.
          </p>

          {status ? (
            <div className="text-center py-10">
              <p className="text-lg text-green-600 font-semibold">{status}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
            >
              <div className="md:col-span-2">
                <label
                  htmlFor="enquiry-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="enquiry-name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                    'name'
                  )}`}
                />
                {touched.name && errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="enquiry-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="enquiry-email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                    'email'
                  )}`}
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="enquiry-phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                    'phone'
                  )}`}
                />
                {touched.phone && errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
               <div>
                <label
                  htmlFor="enquiry-company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  id="enquiry-company"
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                    'company'
                  )}`}
                />
              </div>
               <div>
                <label
                  htmlFor="enquiry-city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="enquiry-city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                    'city'
                  )}`}
                />
                {touched.city && errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="enquiry-product"
                  className="block text-sm font-medium text-gray-700"
                >
                  I&apos;m interested in...
                </label>
                <select
                  name="product"
                  id="enquiry-product"
                  value={formData.product}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border rounded-md shadow-sm focus:outline-none focus:ring-1 transition-colors bg-white ${getInputClasses(
                    'product'
                  )}`}
                >
                  <option value="" disabled>
                    Select a product category...
                  </option>
                  {PRODUCT_CATEGORIES.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {touched.product && errors.product && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.product}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="enquiry-message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  id="enquiry-message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                    'message'
                  )}`}
                ></textarea>
                {touched.message && errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="md:col-span-2 flex justify-end pt-2 space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className="inline-flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-primary/50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" />
                      <span className="ml-2">Submitting...</span>
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default QuickEnquiryModal;

"use client";

import React, { useState } from 'react';
import { CONTACT_INFO, PRODUCT_CATEGORIES } from '../constants';
import Spinner from '../components/Spinner';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  WhatsAppIcon,
} from '../components/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Breadcrumb from '../components/Breadcrumb';
import type { BreadcrumbItem } from '../types';
import { submitEnquiry } from '../lib/submitEnquiry';

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

const Contact: React.FC = () => {
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

  const [contactFormRef, contactFormVisible] = useScrollAnimation();
  const [contactDetailsRef, contactDetailsVisible] = useScrollAnimation();
  const [mapRef, mapVisible] = useScrollAnimation();

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
        // Now optional
        return '';
      case 'city':
        if (!value) return 'City is required.';
        return '';
      case 'product':
        if (!value) return 'Please select a product category.';
        return '';
      case 'message':
        // Now optional, but validate length if provided
        if (value && value.length < 10)
          return 'Message must be at least 10 characters.';
        return '';
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
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
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
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValidationErrors: ErrorState = {};
    const allTouched: TouchedState = {};

    (Object.keys(formData) as Array<keyof FormState>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        formValidationErrors[key] = error;
      }
      allTouched[key] = true;
    });

    setErrors(formValidationErrors);
    setTouched(allTouched);

    const isFormValid = Object.keys(formValidationErrors).length === 0;

    if (isFormValid) {
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
        console.error('Failed to submit contact enquiry', error);
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

    if (hasError) {
      return 'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500';
    }
    if (isSuccess) {
      return 'border-green-500 text-green-900 placeholder-green-300 focus:ring-green-500 focus:border-green-500';
    }
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

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Contact Us' },
  ];
  
  const heroImage =
    'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop';

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <section className="relative bg-dark text-white py-20 md:py-32">
        <img
          src={heroImage}
          alt="Contact us background with phone, email, and location icons"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
            We&apos;re here to help. Contact us with any questions or to schedule a
            consultation for your security needs in Trichy.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div
              ref={contactFormRef}
              className={`seo-reveal bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-700 ease-out ${
                contactFormVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-5'
              }`}
            >
              <h2 className="text-2xl font-bold text-dark mb-6">
                Send us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="md:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.name && errors.name)}
                    aria-describedby="name-error"
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                      'name'
                    )}`}
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.email && errors.email)}
                    aria-describedby="email-error"
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                      'email'
                    )}`}
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.phone && errors.phone)}
                    aria-describedby="phone-error"
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                      'phone'
                    )}`}
                  />
                  {touched.phone && errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.company && errors.company)}
                    aria-describedby="company-error"
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                      'company'
                    )}`}
                  />
                   {touched.company && errors.company && (
                    <p id="company-error" className="mt-2 text-sm text-red-600">
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.city && errors.city)}
                    aria-describedby="city-error"
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                      'city'
                    )}`}
                  />
                  {touched.city && errors.city && (
                    <p id="city-error" className="mt-2 text-sm text-red-600">
                      {errors.city}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium text-gray-700"
                  >
                    I&apos;m interested in...
                  </label>
                  <select
                    name="product"
                    id="product"
                    value={formData.product}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.product && errors.product)}
                    aria-describedby="product-error"
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
                    <p
                      id="product-error"
                      className="mt-2 text-sm text-red-600"
                    >
                      {errors.product}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.message && errors.message)}
                    aria-describedby="message-error"
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${getInputClasses(
                      'message'
                    )}`}
                  ></textarea>
                  {touched.message && errors.message && (
                    <p
                      id="message-error"
                      className="mt-2 text-sm text-red-600"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
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
                {status && (
                  <div className="md:col-span-2 text-center text-green-600">
                    {status}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Details */}
            <div
              ref={contactDetailsRef}
              className={`seo-reveal space-y-8 transition-all duration-700 ease-out delay-200 ${
                contactDetailsVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-5'
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-dark">
                  Contact Information
                </h3>
                <p className="mt-2 text-gray-600">
                  Reach out to us directly through phone, email, or visit our
                  office.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-secondary rounded-lg">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-dark">Our Address</h4>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-secondary rounded-lg">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-dark">Phone</h4>
                  <p className="text-gray-600">
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                      className="hover:text-primary"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>
              {CONTACT_INFO.whatsapp && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-secondary rounded-lg">
                    <WhatsAppIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-dark">WhatsApp</h4>
                    <p className="text-gray-600">
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(
                          /\s/g,
                          ''
                        )}`}
                        className="hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {CONTACT_INFO.whatsapp}
                      </a>
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-secondary rounded-lg">
                  <EnvelopeIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-dark">Email</h4>
                  <p className="text-gray-600">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:text-primary"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        ref={mapRef}
        className={`seo-reveal py-16 md:py-24 bg-secondary transition-all duration-700 ease-out ${
          mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Our Location</h2>
            <p className="mt-2 text-gray-600">
              Find us at our office in Trichy.
            </p>
          </div>
          <div className="rounded-lg shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3919.2113934443714!2d78.64347937504216!3d10.795115189354782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ3JzQyLjQiTiA3OMKwMzgnNDUuOCJF!5e0!3m2!1sen!2sin!4v1763048472202!5m2!1sen!2sin"
              className="w-full h-96 md:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location of Aran Network in Tiruchirappalli, Tamil Nadu"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
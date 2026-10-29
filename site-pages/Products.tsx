"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '../constants';
import { ShieldCheckIcon } from '../components/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ProductCategory, BreadcrumbItem } from '../types';
import Breadcrumb from '../components/Breadcrumb';

interface AnimatedCategoryProps {
  category: ProductCategory;
  index: number;
}

const AnimatedCategory: React.FC<AnimatedCategoryProps> = ({
  category,
  index,
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'products'>('overview');

  const isEven = index % 2 === 0;

  const keyFeatures = useMemo(() => {
    const allFeatures = category.products.flatMap((p) => p.features.slice(0, 3));
    return [...new Set(allFeatures)].slice(0, 6);
  }, [category.products]);

  const tabButtonClasses = (tabName: typeof activeTab) =>
    `px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${
      activeTab === tabName
        ? 'bg-primary text-white shadow'
        : 'text-gray-600 hover:bg-gray-200'
    }`;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <p className="text-gray-700 leading-relaxed">
            {category.description}
          </p>
        );
      case 'features':
        return (
          <ul className="space-y-3">
            {keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start">
                <ShieldCheckIcon className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="ml-3 text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        );
      case 'products':
        return (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {category.products.map((product) => {
              const ProductIcon = product.icon || ShieldCheckIcon;
              return (
                <li key={product.id}>
                  <Link
                    href={product.path}
                    className="group flex items-center p-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <ProductIcon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="ml-3 text-gray-700 font-medium group-hover:text-primary">
                      {product.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={ref}
      id={category.id}
      className={`seo-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-24 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Image */}
      <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
        {category.imageUrl ? (
          <img
            src={category.imageUrl}
            alt={category.name}
            className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]"
          />
        ) : (
          <div className="rounded-lg shadow-2xl w-full h-auto bg-gray-200 aspect-[4/3] flex items-center justify-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Description and Features */}
      <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
        <div className="inline-block p-3 bg-secondary rounded-lg mb-4">
          <category.icon className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-dark mb-4">{category.name}</h2>

        {/* Tab Interface */}
        <div
          role="tablist"
          aria-label={`${category.name} information`}
          className="flex space-x-2 border-b border-gray-200 mb-4 p-1 bg-gray-100 rounded-lg"
        >
          <button
            role="tab"
            aria-selected={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            className={tabButtonClasses('overview')}
          >
            Overview
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'features'}
            onClick={() => setActiveTab('features')}
            className={tabButtonClasses('features')}
          >
            Key Features
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'products'}
            onClick={() => setActiveTab('products')}
            className={tabButtonClasses('products')}
          >
            Products
          </button>
        </div>

        <div
          role="tabpanel"
          key={activeTab}
          className="animate-fade-in-up min-h-[150px]"
        >
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Products' },
  ];

  const heroImage =
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop';

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      {/* Page Header */}
      <section className="relative bg-dark text-white py-20 md:py-32">
        <img
          src={heroImage}
          alt="A team collaborating on technology solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Products & Solutions
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
            We provide a comprehensive range of products to create a secure,
            efficient, and connected environment tailored to your needs.
          </p>
          <div className="mt-8">
            <Link
              href={`/products#${PRODUCT_CATEGORIES[0]?.id}`}
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Explore Product Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <AnimatedCategory
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`seo-reveal bg-secondary py-16 transition-all duration-700 ease-out ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-dark">
            Find the Right Solution for You
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our experts are ready to help you choose the best products for your
            needs. Contact us for a free, no-obligation consultation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
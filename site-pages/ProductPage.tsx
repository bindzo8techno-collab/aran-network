"use client";

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import type {
  Product,
  ProductCategory,
  ProductType,
  BreadcrumbItem,
} from '../types';
import {
  ShieldCheckIcon,
  XMarkIcon,
} from '../components/icons';
import AIGeneratedImage from '../components/AIGeneratedImage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Breadcrumb from '../components/Breadcrumb';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';

interface ProductPageProps {
  product: Product;
  parentCategory?: ProductCategory;
}

const RelatedProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Link
    href={product.path}
    className="group block bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
  >
    {product.imageUrl ? (
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
    ) : (
      <AIGeneratedImage
        alt={product.name}
        className="w-full h-48"
        prompt={`A professional product photograph of a ${product.name}, used for ${product.description}. Clean, modern, minimalistic background.`}
      />
    )}
    <div className="p-6">
      <h4 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
        {product.name}
      </h4>
      <p className="font-semibold text-primary group-hover:text-accent transition-colors mt-4 flex items-center">
        <span>View Details</span>
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </p>
    </div>
  </Link>
);

const ProductPage: React.FC<ProductPageProps> = ({
  product,
  parentCategory,
}) => {
  const [relatedRef, relatedVisible] = useScrollAnimation();
  const [activeProductType, setActiveProductType] =
    useState<ProductType | null>(null);

  // Set the order for Key Features section: text on left, image on right
  const featuresTextOrderClass = 'order-1 lg:order-1';
  const featuresImageOrderClass = 'order-2 lg:order-2';

  const relatedProducts = React.useMemo(() => {
    if (!parentCategory) return [];
    return parentCategory.products
      .filter((p) => p.id !== product.id)
      .slice(0, 3);
  }, [product.id, parentCategory]);

  const handleCloseModal = useCallback(() => {
    setActiveProductType(null);
  }, []);

  if (!product) {
    return <div>Product not found.</div>;
  }
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    ...(parentCategory
      ? [{ name: parentCategory.name, path: parentCategory.path }]
      : []),
    { name: product.name },
  ];

  return (
    <>
      <div className="overflow-x-hidden bg-white">
        <Breadcrumb items={breadcrumbItems} />

        {/* Product Header Section */}
        <section className="relative bg-dark text-white h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            {product.imageUrl ? (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
                aria-label={product.name}
                role="img"
              ></div>
            ) : (
              <AIGeneratedImage
                prompt={`A professional, high-resolution product photograph of a ${product.name}, a device used for ${product.description}. The background should be clean, modern, and minimalistic.`}
                alt={product.name}
                className="w-full h-full"
              />
            )}
          </div>

          <div className="absolute inset-0 bg-black/60 z-20"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-30">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight animate-fade-in-up">
              {product.name}
            </h1>
            {product.tagline && (
              <p
                className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                {product.tagline}
              </p>
            )}
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-left">
              <h2 className="text-3xl font-bold text-dark mb-6">
                Product Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={featuresImageOrderClass}>
                {product.featuresImageUrl ? (
                  <img
                    src={product.featuresImageUrl}
                    alt={`${product.name} Features`}
                    className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-video"
                  />
                ) : (
                  <AIGeneratedImage
                    alt={`${product.name} Features`}
                    className="rounded-lg shadow-2xl w-full h-auto aspect-video"
                    prompt={`Illustrative image showcasing the key features of ${product.name}.`}
                  />
                )}
              </div>
              <div className={`${featuresTextOrderClass} max-w-xl`}>
                <h2 className="text-3xl font-bold text-dark mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ShieldCheckIcon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <span className="ml-4 text-gray-700 text-lg">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Product */}
        {product.productTypes && product.productTypes.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-dark mb-12 text-left">
                Types of {product.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.productTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-video object-contain p-3 md:min-h-[350px]">
                      {type.imageUrl ? (
                        <img
                          src={type.imageUrl}
                          alt={type.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <AIGeneratedImage
                          alt={type.name}
                          className="w-full h-full"
                          prompt={`Professional product shot of a ${type.name}: ${type.description}`}
                        />
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      {/* Short Content */}
                      <h3 className="font-bold text-xl text-dark mb-2 group-hover:text-primary transition-colors">
                        {type.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base flex-grow mb-4">
                        {type.description}
                      </p>

                      {/* Quick View Button */}
                      <div className="mt-auto">
                        <button
                          type="button"
                          onClick={() => setActiveProductType(type)}
                          className="w-full text-center font-semibold text-primary py-2 px-4 rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          Quick View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        {product.whyChooseUs && product.whyChooseUs.length > 0 && (
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-dark mb-12 text-center">
                Why Choose Our {product.name}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {product.whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-lg shadow-md"
                  >
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto mb-4">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {product.faq && product.faq.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-dark mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <Accordion
                  items={product.faq.map((faq) => ({
                    title: faq.question,
                    content: faq.answer,
                  }))}
                />
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section
            ref={relatedRef}
            className={`seo-reveal py-16 md:py-24 bg-secondary transition-all duration-700 ease-out ${
              relatedVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-dark mb-12 text-center">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedProducts.map((p) => (
                  <RelatedProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {activeProductType && (
        <Modal
          isOpen={!!activeProductType}
          onClose={handleCloseModal}
          ariaLabelledBy="modal-title"
        >
          <div className="bg-white rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden transform transition-transform duration-300">
            <div className="md:w-1/2 flex-shrink-0 bg-dark">
              {activeProductType.imageUrl ? (
                <img
                  src={activeProductType.imageUrl}
                  alt={activeProductType.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              ) : (
                <AIGeneratedImage
                  alt={activeProductType.name}
                  className="w-full h-64 md:h-full"
                  prompt={`Professional product shot of a ${activeProductType.name}: ${activeProductType.description}`}
                />
              )}
            </div>
            <div className="flex flex-col p-6 md:p-8 overflow-y-auto md:w-1/2">
              <div className="flex justify-between items-start mb-4">
                <h3 id="modal-title" className="text-2xl font-bold text-dark">
                  {activeProductType.name}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="p-1 rounded-full text-gray-500 hover:bg-gray-200 hover:text-dark transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                {activeProductType.description}
              </p>

              {activeProductType.specifications && (
                <>
                  <hr className="my-4 border-gray-200" />
                  <h4 className="text-lg font-semibold text-dark mb-3">
                    Key Specifications
                  </h4>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {Object.entries(activeProductType.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="flex flex-col py-1">
                          <dt className="font-semibold text-gray-800">
                            {key}:
                          </dt>
                          <dd className="text-gray-600">{value}</dd>
                        </div>
                      )
                    )}
                  </dl>
                </>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProductPage;
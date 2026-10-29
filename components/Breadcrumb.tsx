import React from 'react';
import Link from 'next/link';
import type { BreadcrumbItem } from '../types';
import { ChevronRightIcon } from './icons';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/seo';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: new URL(item.path, SITE_URL).toString() } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="bg-secondary border-b border-gray-200">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {items.map((item, index) => (
                <li key={`${item.name}-${index}`}>
                  <div className="flex items-center text-sm">
                    {index !== 0 && (
                      <ChevronRightIcon className="flex-shrink-0 h-4 w-4 text-gray-400 mr-2" />
                    )}
                    {item.path ? (
                      <Link
                        href={item.path}
                        className="font-medium text-gray-500 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium text-dark">{item.name}</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;

"use client";

import React from 'react';
import Link from 'next/link';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import {
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from '../components/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Breadcrumb from '../components/Breadcrumb';
import type { BreadcrumbItem } from '../types';

const About: React.FC = () => {
  const [whyAranRef, whyAranVisible] = useScrollAnimation();
  const [missionVisionRef, missionVisionVisible] = useScrollAnimation();
  const [chooseUsRef, chooseUsVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us' },
  ];

  const whyChooseUsPoints = [
    {
      title: 'Expert Integration',
      description: 'Seamless installation and integration of all systems by our certified technicians.',
      icon: WrenchScrewdriverIcon,
    },
    {
      title: 'Quality Products',
      description: 'We partner with leading brands to provide reliable, high-performance equipment.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Dedicated Support',
      description: 'Our support team is always available to assist you, ensuring your peace of mind.',
      icon: UserGroupIcon,
    },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      {/* Page Header */}
      <section className="relative bg-dark text-white py-20 md:py-32">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Aran Network Team Collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About Aran Network
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
            Your trusted partner in building secure, smart, and connected
            environments in Trichy.
          </p>
        </div>
      </section>

      {/* Why Aran Network */}
      <section
        ref={whyAranRef}
        className={`seo-reveal py-16 md:py-24 bg-white transition-all duration-500 ease-out ${
          whyAranVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-4">
                Why Aran Network?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded with the vision of making advanced security and
                automation technology accessible to everyone, Aran Network has
                grown into a leading provider of integrated solutions. Our
                journey began with a simple goal: to provide reliable,
                state-of-the-art systems that protect properties and simplify
                lives.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Today, we are proud to serve a diverse range of clients, from
                homeowners to large enterprises, delivering custom solutions
                that are built to last. Our commitment to quality, innovation,
                and customer satisfaction is the cornerstone of our success.
              </p>
              <div className="mt-8 space-y-6">
                {whyChooseUsPoints.map((point) => (
                  <div key={point.title} className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-primary">
                      <point.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-dark">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 mt-1">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop"
                alt="Aran Network Team"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section
        ref={missionVisionRef}
        className={`seo-reveal py-16 md:py-24 bg-secondary transition-all duration-700 ease-out ${
          missionVisionVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg h-full transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-dark mb-3 text-center">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg text-center">
                To empower our clients with innovative and reliable security,
                automation, and connectivity solutions that provide peace of
                mind and enhance their quality of life.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg h-full transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-dark mb-3 text-center">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg text-center">
                To be the most trusted and sought-after technology partner,
                pioneering the future of secure and intelligent living and
                working environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={chooseUsRef}
        className={`seo-reveal py-16 md:py-24 bg-white transition-all duration-700 ease-out ${
          chooseUsVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
              Why Choose Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We are committed to excellence in every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {whyChooseUsPoints.map((point) => (
               <div key={point.title} className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto mb-4">
                  <point.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Valuable Channel Partner */}
      <Partners
        title="Our Valuable Channel Partners"
        subtitle="We build strength through collaboration, working with a network of recognized industry leaders to deliver exceptional value."
        bgColor="bg-secondary"
      />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`seo-reveal bg-primary transition-opacity duration-700 ease-in ${
          ctaVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Let&apos;s build a secure future together.
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            Contact us today for a personalized quote and discover what Aran
            Network can do for you.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
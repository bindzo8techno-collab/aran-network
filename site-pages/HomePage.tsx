"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PRODUCT_CATEGORIES } from '@/constants';
import type { ProductCategory } from '@/types';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import {
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  BoltIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/components/icons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import Link from 'next/link';

const CategoryCard: React.FC<{ category: ProductCategory }> = ({
  category,
}) => (
  <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
    <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-secondary mb-4 transition-colors duration-300 group-hover:bg-primary">
      <category.icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white group-hover:scale-110" />
    </div>
    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
      {category.name}
    </h3>
    <p className="text-gray-600 mb-4 flex-grow">
      {category.shortDescription}
    </p>
    <Link
      href={category.path}
      className="font-semibold text-primary hover:text-accent transition-colors duration-300 mt-auto flex items-center"
    >
      <span>Learn More</span>
      <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  </div>
);

const heroSlides = [
  {
    subtitle:
      'Comprehensive surveillance and security solutions for total peace of mind.',
    imageUrl:
      '/optimized/banners/secure.webp',
  },
  {
    subtitle:
      'Integrate and automate your home for unparalleled comfort and convenience.',
    imageUrl:
      '/optimized/banners/smart.webp',
  },
  {
    subtitle:
      'Build a powerful and reliable IT infrastructure for your business to thrive.',
    imageUrl:
      '/optimized/banners/robust.webp',
  },
  {
    subtitle:
      'Manage who goes where and when with our sophisticated biometric and access systems.',
    imageUrl:
      '/optimized/banners/advanced.webp',
  },
  {
    subtitle:
      'From fire alarms to burglar alerts, we keep you protected around the clock.',
    imageUrl:
      '/optimized/banners/proactive.webp',
  },
];

const StatItem: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  isVisible: boolean;
  index: number;
}> = ({ icon: Icon, value, label, isVisible, index }) => {
  const count = useCountUp(value, 2000, isVisible);
  const delay = index * 100;

  return (
    <div
      className={`seo-reveal bg-white p-6 rounded-lg shadow-md transition-all duration-500 ease-out-expo hover:scale-105 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
      <span className="block text-4xl lg:text-5xl font-extrabold text-dark">
        {count}+
      </span>
      <p className="mt-2 text-md text-gray-600">{label}</p>
    </div>
  );
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLElement>(null);

  const [whoAreWeRef, whoAreWeVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.5 });
  const [whyAranRef, whyAranVisible] = useScrollAnimation();
  const [productsRef, productsVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const statsData = [
    { icon: BuildingOffice2Icon, value: 100, label: 'Projects Completed' },
    { icon: CalendarDaysIcon, value: 8, label: 'Years of Experience' },
    { icon: UserGroupIcon, value: 40, label: 'Satisfied Clients' },
    { icon: WrenchScrewdriverIcon, value: 15, label: 'Expert Technicians' },
  ];

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
    }
  }, [isPaused, stopAutoPlay]);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const advanceSlide = (direction: 'next' | 'prev') => {
    stopAutoPlay();
    setIsPaused(true);
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      advanceSlide('next');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      advanceSlide('prev');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen text-white overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary"
        aria-roledescription="carousel"
        aria-label="Featured Content"
        ref={carouselRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.imageUrl}
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              transform: `translateY(${parallaxOffset * 0.3}px) scale(1.1)`,
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-30"></div>

        {/* Text Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center z-40">
          <div
            className="relative h-48 w-full max-w-3xl"
            aria-live="polite"
            aria-atomic="true"
          >
            <div
              key={currentSlide}
              id={`slide-${currentSlide}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${currentSlide + 1} of ${heroSlides.length}`}
              className="absolute inset-0 animate-fade-in-up"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Security & Smart Living Solutions in Trichy
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => advanceSlide('prev')}
          aria-label="Previous slide"
          className="absolute top-1/2 -translate-y-1/2 left-4 z-40 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={() => advanceSlide('next')}
          aria-label="Next slide"
          className="absolute top-1/2 -translate-y-1/2 right-4 z-40 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Navigation Dots */}
        {/* <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-40"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              role="tab"
              id={`slide-tab-${index}`}
              aria-controls={`slide-${index}`}
              aria-selected={index === currentSlide}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ease-out-expo focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/60 hover:bg-white hover:scale-110'
              }`}
            />
          ))}
        </div> */}

        {/* Play/Pause Control */}
        {/* <button
          onClick={togglePlayPause}
          aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
          className="absolute bottom-6 right-8 z-40 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors duration-300"
        >
          {isPaused ? (
            <PlayIcon className="w-5 h-5" />
          ) : (
            <PauseIcon className="w-5 h-5" />
          )}
        </button> */}
      </section>

      {/* WHO WE ARE Section */}
      <section
        ref={whoAreWeRef}
        className={`seo-reveal py-16 md:py-24 bg-white transition-all duration-700 ease-out-expo ${
          whoAreWeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4 tracking-tight">
                Trichy&apos;s Trusted Technology Partner
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded on the principle of making advanced security
                accessible, Aran Network is your trusted partner for integrated
                technology solutions. We specialize in designing and deploying
                reliable, state-of-the-art systems that safeguard your
                property and simplify your daily life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team is driven by a commitment to quality, innovation, and
                complete customer satisfaction, serving a diverse clientele
                from residential homes to large-scale commercial enterprises.
              </p>
              <Link
                href="/about"
                className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
                alt="Professional business partners finalizing a deal in a modern office"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers Section */}
      <section ref={statsRef} className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Proven experience and a track record of customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => (
              <StatItem
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                isVisible={statsVisible}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Aran Network? Section */}
      <section
        ref={whyAranRef}
        className={`seo-reveal py-16 md:py-24 bg-white transition-all duration-700 ease-out-expo ${
          whyAranVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
              Why Choose Aran Network?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We are committed to excellence in every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto mb-4">
                <WrenchScrewdriverIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Integration</h3>
              <p className="text-gray-600">
                Our certified technicians ensure seamless installation and
                integration of all systems.
              </p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We partner with leading brands to provide reliable and
                high-performance equipment.
              </p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto mb-4">
                <BoltIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Our support team is available to assist you with any questions
                or issues, ensuring your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Categories Section */}
      <section
        ref={productsRef}
        className={`seo-reveal py-16 md:py-24 bg-secondary transition-all duration-700 ease-out-expo ${
          productsVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
              Our Product Categories
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Comprehensive solutions tailored to your security and lifestyle
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Partnership Section */}
      <Partners />

      {/* What Our Clients Say Section (Testimonials) */}
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
            Ready to enhance your security and lifestyle?
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            Contact us today for a personalized quote and discover what Aran
            Network can do for you.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

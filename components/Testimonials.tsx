import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';
import {
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from './icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col mx-4">
    <div className="flex-grow mb-6">
      <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary mb-4" />
      <p className="text-gray-600 italic">
        &quot;{testimonial.quote}&quot;
      </p>
    </div>
    <div className="flex items-center mt-auto flex-shrink-0">
      <img
        className="h-12 w-12 rounded-full object-cover mr-4"
        src={testimonial.avatarUrl}
        alt={testimonial.author}
      />
      <div>
        <p className="font-bold text-dark">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<number | null>(null);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const minSwipeDistance = 50;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!isPaused && isVisible) {
      autoplayRef.current = window.setInterval(handleNext, 5000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused, isVisible, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndRef.current = 0; // Reset touch end
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    // Reset refs
    touchStartRef.current = 0;
    touchEndRef.current = 0;
  };


  return (
    <section
      ref={ref}
      className={`seo-reveal py-16 md:py-24 bg-secondary transition-opacity duration-700 ease-in ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Real stories from satisfied customers who trust Aran Network.
          </p>
        </div>
        <div className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-3xl mx-auto">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop Navigation Arrows */}
          <div className="hidden md:block">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-12 p-2 rounded-full bg-white/80 text-dark shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="absolute top-1/2 -translate-y-1/2 right-0 p-2 rounded-full bg-white/80 text-dark shadow-md hover:bg-white transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

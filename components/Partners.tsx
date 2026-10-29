import React, { useRef, useState } from 'react';
import { PARTNERS } from '../constants';

interface PartnersProps {
  title?: string;
  subtitle?: string;
  bgColor?: string;
}

const Partners: React.FC<PartnersProps> = ({
  title = "Our Valued Partners",
  subtitle = "We collaborate with industry-leading brands to bring you the best in technology and reliability.",
  bgColor = "bg-secondary"
}) => {

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- Drag handlers ---
  const getPageX = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => ("touches" in event ? event.touches[0]?.pageX ?? 0 : event.pageX);

  const startDrag = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsDragging(true);

    setStartX(getPageX(e) - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);

    slider.classList.add("paused");
  };

  const onDrag = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;
    const slider = sliderRef.current;
    if (!slider) return;

    const x = getPageX(e) - slider.offsetLeft;
    const walk = (x - startX) * 1; // drag speed multiplier
    slider.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
    sliderRef.current?.classList.remove("paused");
  };

  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .animate-scroll {
              animation: scroll 120s linear infinite;
            }

            /* Pause animation on hover OR drag */
            .logo-slider:hover .animate-scroll,
            .paused .animate-scroll {
              animation-play-state: paused !important;
            }

            @media (prefers-reduced-motion: reduce) {
              .animate-scroll {
                animation: none;
              }
            }
          `}
        </style>

        <div
          ref={sliderRef}
          className="relative w-full overflow-hidden logo-slider cursor-grab active:cursor-grabbing
            [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={startDrag}
          onTouchMove={onDrag}
          onTouchEnd={stopDrag}
        >
          <div className="flex w-max animate-scroll select-none">
            {PARTNERS.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex-shrink-0 w-48 mx-8 flex items-center justify-center h-24" 
                title={partner.name}
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain transition-all duration-300 cursor-pointer hover:scale-110"
                />
              </div>
            ))}

            {/* Duplicate for infinite loop */}
            {PARTNERS.map((partner, index) => (
              <div 
                key={`clone-${partner.name}-${index}`} 
                className="flex-shrink-0 w-48 mx-8 flex items-center justify-center h-24" 
                title={partner.name}
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain transition-all duration-300 cursor-pointer hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

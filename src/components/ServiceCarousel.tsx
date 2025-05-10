import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { Service } from '../types';

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleCards = 5;
  const centerOffset = Math.floor(visibleCards / 2);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (Date.now() - lastInteraction >= 10000) {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }
    }, 3500);

    return () => {
      clearInterval(autoPlayRef.current);
    };
  }, [lastInteraction, services.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setLastInteraction(Date.now());
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setLastInteraction(Date.now());
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + services.length) % services.length;
    const adjustedPosition = position > centerOffset ? position - services.length : position;

    const rotateY = adjustedPosition * 40;
    const translateZ = Math.cos((Math.abs(adjustedPosition) * Math.PI) / 2) * 200;
    const opacity = 1 - Math.abs(adjustedPosition) / centerOffset;

    return {
      transform: `
        perspective(1000px)
        rotateY(${rotateY}deg)
        translateZ(${translateZ}px)
        scale(${1 - Math.abs(adjustedPosition) * 0.1})
      `,
      opacity: opacity,
      zIndex: centerOffset - Math.abs(adjustedPosition),
      pointerEvents: Math.abs(adjustedPosition) < 1 ? 'auto' : 'none',
    };
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
    onTouchStartOrOnMouseDown: () => setLastInteraction(Date.now()),
  });

  return (
    <div
      {...swipeHandlers}
      className="relative h-[420px] sm:h-[600px] overflow-hidden"
      onMouseEnter={() => setLastInteraction(Date.now())}
    >
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: '1000px' }}
      >
        {services.map((service, index) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="absolute w-[220px] sm:w-[300px] transition-all duration-500 cursor-pointer"
            style={getCardStyle(index)}
          >
            <div className="relative bg-gradient-to-br from-[#1a1c2e] to-[#0d0f1d] rounded-xl sm:rounded-2xl p-5 sm:p-8 group">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20"
                  style={{ filter: 'blur(8px)', borderRadius: 'inherit' }}
                />
              </div>

              {/* Card content */}
              <div className="relative">
                <div className="mb-4 sm:mb-6">
                  <div className="relative bg-gradient-to-br from-[#2a2d4c] to-[#1a1c2e] p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                  {t(`services.${service.slug}.title`)}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">
                  {t(`services.${service.slug}.shortDescription`)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation buttons - hidden on small screens */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setLastInteraction(Date.now());
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 sm:w-8 bg-gradient-to-r from-cyan-400 to-fuchsia-500'
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;

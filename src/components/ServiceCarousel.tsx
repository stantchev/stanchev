import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const touchStartXRef = useRef<number | null>(null);

  const visibleCards = 5;
  const centerOffset = Math.floor(visibleCards / 2);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 10000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [services.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + services.length) % services.length;
    const adjustedPosition = position > centerOffset ? position - services.length : position;

    const rotateY = adjustedPosition * 40;
    const translateZ = Math.cos((Math.abs(adjustedPosition) * Math.PI) / 2) * 200;
    const scale = 1 - Math.abs(adjustedPosition) * 0.1;
    const opacity = 1 - Math.abs(adjustedPosition) / centerOffset;

    return {
      transform: `
        perspective(1000px)
        rotateY(${rotateY}deg)
        translateZ(${translateZ}px)
        scale(${scale})
      `,
      opacity,
      zIndex: centerOffset - Math.abs(adjustedPosition),
      pointerEvents: Math.abs(adjustedPosition) < 1 ? 'auto' : 'none',
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? handlePrev() : handleNext();
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      className="relative h-[600px] sm:h-[650px] overflow-hidden px-2"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: '1000px' }}
      >
        {services.map((service, index) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="absolute w-[90vw] sm:w-[300px] transition-all duration-500 cursor-pointer max-w-xs"
            style={getCardStyle(index)}
          >
            <div className="relative bg-gradient-to-br from-[#1a1c2e] to-[#0d0f1d] rounded-2xl p-4 sm:p-8 group w-full">
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-md" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="mb-4 sm:mb-6">
                  <div className="relative bg-gradient-to-br from-[#2a2d4c] to-[#1a1c2e] p-3 sm:p-4 rounded-xl w-fit">
                    <service.icon className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-bold mb-2 sm:mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                  {t(`services.${service.slug}.title`)}
                </h3>

                <p className="text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base line-clamp-3">
                  {t(`services.${service.slug}.shortDescription`)}
                </p>

                <p className="text-cyan-400 text-sm sm:text-base">
                  {t('services.learnMore')}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation buttons */}
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-gradient-to-r from-cyan-400 to-fuchsia-500'
                : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;

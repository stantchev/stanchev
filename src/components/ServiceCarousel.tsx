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
      className="relative h-[650px] sm:h-[600px] overflow-hidden"
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
            className="absolute transition-all duration-500 cursor-pointer"
            style={getCardStyle(index)}
          >
            <div className="relative bg-gradient-to-br from-[#1a1c2e] to-[#0d0f1d] rounded-2xl sm:p-[25px] p-[5px] group"> {/* Умален padding за мобилни устройства */}
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-md" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="mb-[10px] sm:mb-[20px]"> {/* Умален маргин за мобилни устройства */}
                  <div className="relative bg-gradient-to-br from-[#2a2d4c] to-[#1a1c2e] sm:p-[20px] p-[4px] rounded-xl">
                    <service.icon className="w-[8px] h-[8px] sm:w-[48px] sm:h-[48px] text-cyan-400" /> {/* Умален размер на иконите за мобилни устройства */}
                  </div>
                </div>

                <h3 className="text-[4px] sm:text-[22px] font-bold mb-[5px] sm:mb-[20px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                  {t(`services.${service.slug}.title`)}
                </h3>

                <p className="text-gray-400 mb-[5px] sm:mb-[15px] line-clamp-3"> {/* Умален размер на текста и маргините за мобилни устройства */}
                  {t(`services.${service.slug}.shortDescription`)}
                </p>

                {/* Second line */}
                <p className="text-cyan-400 text-[5px] sm:text-[16px]">{t('services.learnMore')}</p> {/* Умален размер на текста за мобилни устройства */}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation buttons - hidden on mobile */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-[12px] h-[12px] sm:w-[60px] sm:h-[60px] rounded-full bg-black/50 backdrop-blur-sm items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ArrowLeft className="w-[6px] h-[6px] sm:w-[30px] sm:h-[30px]" />
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-[12px] h-[12px] sm:w-[60px] sm:h-[60px] rounded-full bg-black/50 backdrop-blur-sm items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ArrowRight className="w-[6px] h-[6px] sm:w-[30px] sm:h-[30px]" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`w-[1px] h-[1px] sm:w-[10px] sm:h-[10px] rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-[4px] sm:w-[40px] bg-gradient-to-r from-cyan-400 to-fuchsia-500'
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;

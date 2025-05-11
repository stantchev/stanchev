import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Calculate visible cards based on screen width
  const getVisibleCards = useCallback(() => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 3;
    return 5;
  }, []);

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleCards]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  }, [services.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  }, [services.length]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 3500);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const getCardStyle = (index: number) => {
    const totalCards = services.length;
    const offset = index - currentIndex;
    const normalizedOffset = ((offset % totalCards) + totalCards) % totalCards;
    const adjustedOffset = normalizedOffset > totalCards / 2 
      ? normalizedOffset - totalCards 
      : normalizedOffset;

    const rotateY = adjustedOffset * (360 / visibleCards);
    const translateZ = 300;
    const opacity = Math.cos((rotateY * Math.PI) / 180);
    const scale = opacity * 0.5 + 0.5;

    return {
      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
      opacity: opacity * 0.8 + 0.2,
      zIndex: Math.round(opacity * 100),
    };
  };

  return (
    <div 
      className="relative h-[600px] w-full overflow-hidden px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      ref={carouselRef}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center perspective-1000"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="absolute w-[280px] sm:w-[320px] transition-all duration-500 cursor-pointer"
              style={getCardStyle(index)}
              aria-label={t(`services.${service.slug}.title`)}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 p-0.5">
                    <div className="flex items-center justify-center w-full h-full rounded-full bg-[#1e293b]">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {t(`services.${service.slug}.title`)}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    {t(`services.${service.slug}.shortDescription`)}
                  </p>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center text-cyan-400 text-sm">
                      <span className="mr-2">{t('services.learnMore')}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all z-50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all z-50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-cyan-400 w-4' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;

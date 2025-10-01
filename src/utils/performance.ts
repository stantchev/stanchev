// Performance monitoring utilities
export const performanceObserver = () => {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log performance metrics with proper typing
      const entryValue = (entry as any).value || (entry as any).startTime || entry.duration;
      console.log(`${entry.name}: ${entryValue}`);
      
      // Send to analytics if needed
      if (entry.name === 'LCP') {
        console.log('Largest Contentful Paint:', (entry as any).value);
      }
      if (entry.name === 'FID') {
        console.log('First Input Delay:', (entry as any).value);
      }
      if (entry.name === 'CLS') {
        console.log('Cumulative Layout Shift:', (entry as any).value);
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  } catch (e) {
    // Browser doesn't support Performance Observer
    console.log('Performance Observer not supported');
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  const criticalImages = [
    '/images/avatar.jpg',
    '/images/og/og.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimize images loading
export const optimizeImageLoading = () => {
  if (typeof window === 'undefined') return;

  // Add loading="lazy" to all images below the fold
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (index > 2) { // Skip first few images (above the fold)
      img.setAttribute('loading', 'lazy');
    }
  });
};

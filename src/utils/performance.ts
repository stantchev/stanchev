export const performanceObserver = () => {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const entryValue = (entry as any).value || (entry as any).startTime || entry.duration;
      console.log(`${entry.name}: ${entryValue}`);
      
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
    console.log('Performance Observer not supported');
  }
};

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

export const optimizeImageLoading = () => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (index > 2) {
      img.setAttribute('loading', 'lazy');
    }
  });
};

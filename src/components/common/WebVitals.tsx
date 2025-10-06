import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const WebVitals = () => {
  useEffect(() => {
    // Function to log web vitals
    const logWebVital = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${metric.name}: ${metric.value.toFixed(2)}ms`);
        
        // Add visual indicator for poor performance
        if (metric.rating === 'poor') {
          console.warn(`⚠️ Poor ${metric.name} performance: ${metric.value.toFixed(2)}ms`);
        }
      }
      
      // Send to analytics in production (if you have analytics setup)
      if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
        // Example: send to Google Analytics
        if ((window as any).gtag) {
          (window as any).gtag('event', metric.name, {
            value: Math.round(metric.rating === 'good' ? metric.value : 0),
            metric_value: metric.value,
            metric_rating: metric.rating,
          });
        }
      }
    };

    // Measure Core Web Vitals
    getCLS(logWebVital);  // Cumulative Layout Shift
    getFID(logWebVital);  // First Input Delay
    getFCP(logWebVital);  // First Contentful Paint
    getLCP(logWebVital);  // Largest Contentful Paint
    getTTFB(logWebVital); // Time to First Byte

    // Custom performance metrics
    if (typeof window !== 'undefined' && window.performance) {
      // Measure time to interactive
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'measure') {
            console.log(`Custom metric - ${entry.name}: ${entry.duration.toFixed(2)}ms`);
          }
        });
      });
      
      observer.observe({ entryTypes: ['measure'] });

      // Measure resource loading
      const resources = performance.getEntriesByType('resource');
      const totalSize = resources.reduce((acc, resource: any) => acc + (resource.transferSize || 0), 0);
      console.log(`Total resources loaded: ${resources.length}, Size: ${(totalSize / 1024).toFixed(2)}KB`);

      // Check for slow resources
      resources.forEach((resource: any) => {
        if (resource.duration > 500) {
          console.warn(`Slow resource: ${resource.name} took ${resource.duration.toFixed(2)}ms`);
        }
      });
    }
  }, []);

  // Development mode performance indicator
  if (process.env.NODE_ENV === 'development') {
    return (
      <div 
        className="fixed bottom-4 left-4 z-50 p-2 bg-black/80 text-white text-xs rounded-lg backdrop-blur-sm"
        style={{ display: 'none' }} // Hidden by default, can be toggled via DevTools
        data-web-vitals="indicator"
      >
        <div>Performance Monitor Active</div>
      </div>
    );
  }

  return null;
};

export default WebVitals;
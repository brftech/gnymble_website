import React, { Suspense } from 'react';

// Loading fallback component
const LoadingFallback = ({ message = 'Loading...' }) => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
    <span className="ml-3 text-gray-300">{message}</span>
  </div>
);

// Lazy component wrapper
export const LazyComponent = ({ 
  component: Component, 
  fallback = <LoadingFallback />,
  ...props 
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

// Predefined lazy components for common use cases
export const LazyContactForm = React.lazy(() => import('../pages/contact'));
export const LazyDemoForm = React.lazy(() => import('../pages/demo'));
export const LazyPricing = React.lazy(() => import('../pages/pricing')); 
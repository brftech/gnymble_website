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

// Note: Lazy loading of pages is not supported in Next.js
// Use the generic LazyComponent wrapper for actual React components instead 
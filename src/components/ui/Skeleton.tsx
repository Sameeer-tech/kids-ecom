import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse rounded-md bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]",
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

// Product Card Skeleton
const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
    {/* Image Skeleton */}
    <Skeleton className="aspect-[3/4] w-full" />
    
    {/* Content Skeleton */}
    <div className="p-4 space-y-3">
      {/* Category */}
      <Skeleton className="h-3 w-16" />
      
      {/* Product Name */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      
      {/* Rating */}
      <div className="flex items-center gap-1">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-8" />
      </div>
      
      {/* Sizes */}
      <div className="flex gap-1">
        <Skeleton className="h-6 w-8" />
        <Skeleton className="h-6 w-8" />
        <Skeleton className="h-6 w-8" />
      </div>
      
      {/* Price */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
  </div>
);

// Header Skeleton
const HeaderSkeleton: React.FC = () => (
  <div className="border-b border-gray-200 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex h-16 items-center justify-between">
        {/* Logo Skeleton */}
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <div className="hidden sm:block space-y-1">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>

        {/* Navigation Skeleton */}
        <div className="hidden lg:flex items-center space-x-6">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-16" />
          ))}
        </div>

        {/* Search Skeleton */}
        <Skeleton className="hidden md:block h-10 w-64" />

        {/* Action Buttons Skeleton */}
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </div>
    </div>
  </div>
);

// Product Grid Skeleton
const ProductGridSkeleton: React.FC<{ count?: number }> = ({ count = 8 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {[...Array(count)].map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);

// Page Skeleton
const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <HeaderSkeleton />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Section Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-64 w-full rounded-xl mb-6" />
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-4 w-96 mx-auto" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>

      {/* Products Section Skeleton */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-10 w-24" />
        </div>
        <ProductGridSkeleton />
      </div>
    </div>
  </div>
);

// Card Skeleton
const CardSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6">
    <Skeleton className="h-6 w-1/3 mb-4" />
    <div className="space-y-3">
      {[...Array(lines)].map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </div>
  </div>
);

// Button Skeleton
const ButtonSkeleton: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-20',
    md: 'h-10 w-24',
    lg: 'h-12 w-32'
  };

  return <Skeleton className={cn('rounded-lg', sizeClasses[size])} />;
};

// Text Skeleton
const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 1, 
  className 
}) => (
  <div className={cn('space-y-2', className)}>
    {[...Array(lines)].map((_, i) => (
      <Skeleton 
        key={i} 
        className={cn(
          'h-4',
          i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
        )} 
      />
    ))}
  </div>
);

export {
  Skeleton,
  ProductCardSkeleton,
  HeaderSkeleton,
  ProductGridSkeleton,
  PageSkeleton,
  CardSkeleton,
  ButtonSkeleton,
  TextSkeleton
};

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge, DiscountBadge, NewBadge, SaleBadge } from '../ui/Badge';
import { formatPrice, formatDiscount } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  isSale?: boolean;
  isFeatured?: boolean;
  sizes?: string[];
  colors?: string[];
  href: string;
  isWishlisted?: boolean;
  onWishlistToggle?: (productId: string) => void;
  onAddToCart?: (productId: string, size?: string) => void;
  onQuickView?: (productId: string) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  images,
  category,
  rating = 0,
  reviewCount = 0,
  isNew = false,
  isSale = false,
  isFeatured = false,
  sizes = [],
  colors = [],
  href,
  isWishlisted = false,
  onWishlistToggle,
  onAddToCart,
  onQuickView,
  className
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  const hasDiscount = discount > 0;

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onWishlistToggle?.(id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(id, selectedSize);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.(id);
  };

  return (
    <Card 
      variant="default"
      padding="none"
      className={cn(
        "group relative overflow-hidden hover:shadow-lg transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={images[currentImageIndex] || '/placeholder-product.jpg'}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && <NewBadge />}
            {isSale && <SaleBadge />}
            {hasDiscount && <DiscountBadge discount={discount} />}
            {isFeatured && (
              <Badge variant="featured" size="sm">
                FEATURED
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className={cn(
              "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-white hover:scale-110",
              isWishlisted && "bg-red-100 text-red-600"
            )}
          >
            <Heart 
              className={cn(
                "h-4 w-4 transition-colors",
                isWishlisted ? "fill-current text-red-600" : "text-gray-600"
              )} 
            />
          </button>

          {/* Image Navigation */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    currentImageIndex === index ? "bg-white" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          )}

          {/* Hover Actions */}
          <div className={cn(
            "absolute inset-x-2 bottom-2 flex gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}>
            <Button
              size="sm"
              variant="secondary"
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <CardContent className="p-4">
          {/* Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {category}
          </p>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>

          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-3 w-3",
                      i < rating 
                        ? "text-yellow-400 fill-current" 
                        : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                ({reviewCount})
              </span>
            </div>
          )}

          {/* Sizes */}
          {sizes.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {sizes.slice(0, 4).map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={cn(
                    "px-2 py-1 text-xs border rounded transition-colors",
                    selectedSize === size
                      ? "border-primary-600 bg-primary-50 text-primary-600"
                      : "border-gray-300 text-gray-600 hover:border-gray-400"
                  )}
                >
                  {size}
                </button>
              ))}
              {sizes.length > 4 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{sizes.length - 4} more
                </span>
              )}
            </div>
          )}

          {/* Colors */}
          {colors.length > 0 && (
            <div className="flex gap-1 mb-3">
              {colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
              {colors.length > 4 && (
                <span className="text-xs text-gray-500 ml-1">
                  +{colors.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export { ProductCard };
export type { ProductCardProps };

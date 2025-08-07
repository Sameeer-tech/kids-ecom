import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary-600 text-white hover:bg-primary-700",
        secondary: "border-transparent bg-secondary-500 text-white hover:bg-secondary-600",
        success: "border-transparent bg-emerald-600 text-white hover:bg-emerald-700",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
        danger: "border-transparent bg-red-600 text-white hover:bg-red-700",
        outline: "border-primary-600 text-primary-600 hover:bg-primary-50",
        pakistan: "border-transparent bg-gradient-to-r from-primary-600 to-secondary-500 text-white",
        discount: "border-transparent bg-red-600 text-white animate-pulse",
        new: "border-transparent bg-emerald-600 text-white",
        sale: "border-transparent bg-orange-600 text-white",
        featured: "border-transparent bg-purple-600 text-white"
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
        lg: "px-3 py-1 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, children, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

// Specialized badge components for e-commerce
const DiscountBadge = ({ discount, className, ...props }: { discount: number } & Omit<BadgeProps, 'children' | 'variant'>) => (
  <Badge variant="discount" className={className} {...props}>
    {discount}% OFF
  </Badge>
);

const NewBadge = ({ className, ...props }: Omit<BadgeProps, 'children' | 'variant'>) => (
  <Badge variant="new" className={className} {...props}>
    NEW
  </Badge>
);

const SaleBadge = ({ className, ...props }: Omit<BadgeProps, 'children' | 'variant'>) => (
  <Badge variant="sale" className={className} {...props}>
    SALE
  </Badge>
);

const FeaturedBadge = ({ className, ...props }: Omit<BadgeProps, 'children' | 'variant'>) => (
  <Badge variant="featured" className={className} {...props}>
    FEATURED
  </Badge>
);

export { Badge, DiscountBadge, NewBadge, SaleBadge, FeaturedBadge, badgeVariants };
export type { BadgeProps };

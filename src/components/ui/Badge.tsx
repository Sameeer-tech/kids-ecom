import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        pakistan:
          "border-transparent bg-gradient-to-r from-green-600 to-green-700 text-white shadow-sm",
        outline: "text-foreground border-border",
        success:
          "border-transparent bg-green-100 text-green-800 border-green-200",
        warning:
          "border-transparent bg-yellow-100 text-yellow-800 border-yellow-200",
        danger:
          "border-transparent bg-red-100 text-red-800 border-red-200",
        // Special Pakistani e-commerce badges
        new: "border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md animate-pulse",
        sale: "border-transparent bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-md font-bold",
        featured: "border-transparent bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md",
        discount: "border-transparent bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md font-bold",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-1.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

// Predefined specialized badges for Pakistani e-commerce
export interface DiscountBadgeProps extends Omit<BadgeProps, "variant"> {
  percentage?: number;
}

const DiscountBadge = ({ children, className, percentage, ...props }: DiscountBadgeProps) => (
  <Badge variant="discount" className={cn("text-white font-bold", className)} {...props}>
    {children || (percentage ? `${percentage}% OFF` : "DISCOUNT")}
  </Badge>
);

const NewBadge = ({ className, ...props }: Omit<BadgeProps, "variant" | "children">) => (
  <Badge variant="new" className={cn("animate-pulse", className)} {...props}>
    New
  </Badge>
);

const SaleBadge = ({ className, ...props }: Omit<BadgeProps, "variant" | "children">) => (
  <Badge variant="sale" className={cn("font-bold", className)} {...props}>
    Sale
  </Badge>
);

const FeaturedBadge = ({ className, ...props }: Omit<BadgeProps, "variant" | "children">) => (
  <Badge variant="featured" className={className} {...props}>
    Featured
  </Badge>
);

export { Badge, DiscountBadge, NewBadge, SaleBadge, FeaturedBadge, badgeVariants };

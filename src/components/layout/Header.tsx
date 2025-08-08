"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Phone,
  MapPin,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  cartItemsCount?: number;
  wishlistCount?: number;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, cartItemsCount = 0, wishlistCount = 0, ...props }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const navigation = [
      { name: "Home", href: "/" },
      { name: "Boys", href: "/boys" },
      { name: "Girls", href: "/girls" },
      { name: "Accessories", href: "/accessories" },
      { name: "Sale", href: "/sale" },
    ];

    return (
      <header ref={ref} className={cn("bg-white shadow-lg border-b border-green-100", className)} {...props}>
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2">
          <Container>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Phone className="h-3 w-3" />
                  <span>+92-300-1234567</span>
                </div>
                <div className="hidden sm:flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>Free delivery across Pakistan</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-3 w-3 fill-current" />
                <span className="hidden sm:inline">Trusted by 10,000+ families</span>
                <span className="sm:hidden">10k+ families</span>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Header */}
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KW</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-green-800">KidsWear</h1>
                <p className="text-xs text-green-600 -mt-1">Pakistan</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group"
                >
                  {item.name}
                  {item.name === "Sale" && (
                    <Badge 
                      variant="danger" 
                      size="sm" 
                      className="absolute -top-2 -right-6 text-xs animate-pulse"
                    >
                      Hot
                    </Badge>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for kids clothing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="h-4 w-4" />}
                  variant="pakistan"
                  className="pr-20"
                />
                <Button 
                  variant="pakistan" 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Mobile Search */}
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge 
                    variant="danger" 
                    className="absolute -top-2 -right-2 min-w-5 h-5 flex items-center justify-center text-xs"
                  >
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </Badge>
                )}
              </Button>

              {/* Shopping Cart */}
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge 
                    variant="pakistan" 
                    className="absolute -top-2 -right-2 min-w-5 h-5 flex items-center justify-center text-xs"
                  >
                    {cartItemsCount > 99 ? "99+" : cartItemsCount}
                  </Badge>
                )}
              </Button>

              {/* User Account */}
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <Container>
              <div className="py-4 space-y-4">
                {/* Mobile Search */}
                <div className="lg:hidden">
                  <Input
                    type="text"
                    placeholder="Search for kids clothing..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    leftIcon={<Search className="h-4 w-4" />}
                    variant="pakistan"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between py-2 text-gray-700 hover:text-green-600 font-medium border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {item.name === "Sale" && (
                        <Badge variant="danger" size="sm" className="animate-pulse">
                          Hot
                        </Badge>
                      )}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Account */}
                <Button variant="pakistan" className="w-full sm:hidden">
                  <User className="h-4 w-4 mr-2" />
                  My Account
                </Button>
              </div>
            </Container>
          </div>
        )}
      </header>
    );
  }
);
Header.displayName = "Header";

export { Header };

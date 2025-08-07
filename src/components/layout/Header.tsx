'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search, User, Heart } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Badge } from '../ui/Badge';
import { cn } from '@/lib/utils';

interface HeaderProps {
  cartItemsCount?: number;
  wishlistCount?: number;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItemsCount = 0, 
  wishlistCount = 0 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationLinks = [
    { href: '/', label: 'Home', isActive: true },
    { href: '/shop', label: 'Shop' },
    { href: '/boys', label: 'Boys' },
    { href: '/girls', label: 'Girls' },
    { href: '/newborn', label: 'Newborn' },
    { href: '/sale', label: 'Sale', badge: 'HOT' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-2">
        <Container>
          <div className="flex items-center justify-center text-sm font-medium">
            <span className="hidden sm:inline">🎉</span>
            <span className="mx-2">Free Delivery on Orders Over PKR 2,000!</span>
            <span className="hidden sm:inline">🚚</span>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                KidsWear PK
              </h1>
              <p className="text-xs text-gray-500 leading-none">Kids Fashion Store</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600 relative",
                  link.isActive ? "text-primary-600" : "text-gray-700"
                )}
              >
                {link.label}
                {link.badge && (
                  <Badge 
                    variant="danger" 
                    size="sm" 
                    className="absolute -top-2 -right-6 text-xs"
                  >
                    {link.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Input
                placeholder="Search kids clothing..."
                leftIcon={<Search className="h-4 w-4" />}
                className="pl-10"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Search Button (Mobile) */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge 
                  variant="danger" 
                  size="sm" 
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                >
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge 
                  variant="pakistan" 
                  size="sm" 
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Input
              placeholder="Search kids clothing..."
              leftIcon={<Search className="h-4 w-4" />}
              className="pl-10"
            />
          </div>
        )}
      </Container>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <Container>
            <div className="py-4 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors hover:text-primary-600",
                    link.isActive ? "text-primary-600" : "text-gray-700"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    {link.label}
                    {link.badge && (
                      <Badge variant="danger" size="sm">
                        {link.badge}
                      </Badge>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export { Header };
export type { HeaderProps };

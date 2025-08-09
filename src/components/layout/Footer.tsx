"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  MessageCircle,
  CreditCard,
  Truck,
  Shield,
  Award,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export type FooterProps = React.HTMLAttributes<HTMLElement>

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    const [email, setEmail] = useState("");

    const quickLinks = [
      { name: "About Us", href: "/about" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "Care Instructions", href: "/care" },
      { name: "Returns & Exchange", href: "/returns" },
      { name: "Track Your Order", href: "/track" },
      { name: "Contact Us", href: "/contact" },
    ];

    const categories = [
      { name: "Boys Clothing", href: "/boys" },
      { name: "Girls Clothing", href: "/girls" },
      { name: "Traditional Wear", href: "/traditional" },
      { name: "Casual Wear", href: "/casual" },
      { name: "Accessories", href: "/accessories" },
      { name: "Sale Items", href: "/sale" },
    ];

    const policies = [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Shipping Policy", href: "/shipping" },
      { name: "Refund Policy", href: "/refund" },
    ];

    return (
      <footer ref={ref} className={cn("bg-gray-900 text-white border-t border-gray-200", className)} {...props}>
        {/* Features Section */}
        <div className="bg-gradient-to-r from-green-50 to-white py-12">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Delivery</h3>
                  <p className="text-sm text-gray-600">Across Pakistan on orders over PKR 2,000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quality Assured</h3>
                  <p className="text-sm text-gray-600">100% authentic Pakistani craftsmanship</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                  <p className="text-sm text-gray-600">JazzCash, EasyPaisa, Bank Transfer</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Trusted Brand</h3>
                  <p className="text-sm text-gray-600">10,000+ happy customers</p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Footer Content */}
        <div className="bg-white py-12">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">KW</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-green-800">KidsWear Pakistan</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Premium Pakistani traditional and modern clothing for children. 
                    Made with love and care for your little ones.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">
                      Main Bazaar, Liberty Market, Lahore, Pakistan
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">+92-300-1234567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">info@kidswearpk.com</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Shop by Category</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link 
                        href={category.href}
                        className="text-sm text-gray-600 hover:text-green-600 transition-colors flex items-center justify-between"
                      >
                        <span>{category.name}</span>
                        {category.name === "Sale Items" && (
                          <Badge variant="danger" size="sm">
                            Hot
                          </Badge>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Stay Updated</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest updates on new arrivals and exclusive offers.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="pakistan"
                  />
                  <Button variant="pakistan" className="w-full">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-100 py-6">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-gray-600">
                © 2024 KidsWear Pakistan. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-4">
                {policies.map((policy, index) => (
                  <React.Fragment key={policy.name}>
                    <Link 
                      href={policy.href}
                      className="text-xs text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {policy.name}
                    </Link>
                    {index < policies.length - 1 && (
                      <span className="text-gray-400">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>in Pakistan</span>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    );
  }
);
Footer.displayName = "Footer";

export { Footer };

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'Boys Clothing', href: '/boys' },
      { label: 'Girls Clothing', href: '/girls' },
      { label: 'Newborn & Baby', href: '/newborn' },
      { label: 'School Uniforms', href: '/uniforms' },
      { label: 'Party Wear', href: '/party-wear' },
      { label: 'Sale Items', href: '/sale' }
    ],
    customer: [
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns & Exchanges', href: '/returns' },
      { label: 'Track Your Order', href: '/track-order' },
      { label: 'Customer Reviews', href: '/reviews' },
      { label: 'Gift Cards', href: '/gift-cards' }
    ],
    company: [
      { label: 'About KidsWear PK', href: '/about' },
      { label: 'Our Story', href: '/story' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press & Media', href: '/press' },
      { label: 'Wholesale', href: '/wholesale' },
      { label: 'Contact Us', href: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Refund Policy', href: '/refund-policy' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/kidswear.pk', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/kidswear.pk', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/kidswear_pk', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@kidswear-pk', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-12">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with KidsWear PK!</h3>
            <p className="text-primary-100 mb-6">
              Get the latest kids fashion trends, exclusive deals, and parenting tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="flex-1 bg-white border-0"
                leftIcon={<Mail className="h-4 w-4" />}
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-primary-200 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                  KidsWear PK
                </h2>
                <p className="text-xs text-gray-500">Making Childhood Colorful</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-sm">
              Pakistan's leading kids fashion destination. We offer high-quality, comfortable, 
              and stylish clothing for children of all ages, from newborns to teenagers.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-primary-600" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-primary-600" />
                <span>hello@kidswear.pk</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-primary-600" />
                <span>Lahore, Karachi, Islamabad</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full bg-primary-100 hover:bg-primary-200 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-primary-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {footerLinks.customer.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {currentYear} KidsWear PK. All rights reserved. Made with ❤️ in Pakistan.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">We accept:</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    COD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export { Footer };

import { Search, Heart, ShoppingCart, Star } from 'lucide-react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Badge,
  DiscountBadge,
  NewBadge,
  SaleBadge,
  FeaturedBadge
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            KidsWear Pakistan - Component Showcase
          </h1>
          <p className="text-lg text-gray-600">
            Beautiful UI components with Pakistani theme for kids e-commerce
          </p>
        </div>

        {/* Button Showcase */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="pakistan">Pakistan Theme</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="success" leftIcon={<Heart className="w-4 h-4" />}>
                Success with Icon
              </Button>
              <Button variant="warning" loading>
                Loading Button
              </Button>
              <Button variant="danger" rightIcon={<ShoppingCart className="w-4 h-4" />}>
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Badge Showcase */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="pakistan">Pakistan</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <NewBadge />
              <SaleBadge />
              <FeaturedBadge />
              <DiscountBadge>50% OFF</DiscountBadge>
            </div>
          </CardContent>
        </Card>

        {/* Input Showcase */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Default input" />
              <Input 
                placeholder="Search products..." 
                leftIcon={<Search className="w-4 h-4" />}
                variant="pakistan"
              />
              <Input 
                placeholder="Email address" 
                type="email"
                rightIcon={<Star className="w-4 h-4" />}
              />
              <Input 
                placeholder="Input with error" 
                error="This field is required"
                variant="error"
              />
              <Input 
                placeholder="Success state" 
                variant="success"
              />
              <Input 
                placeholder="Large input" 
                size="lg"
                leftIcon={<Heart className="w-4 h-4" />}
              />
            </div>
          </CardContent>
        </Card>

        {/* Card Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">This is a default card with standard styling.</p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">This card has elevated shadow styling.</p>
            </CardContent>
          </Card>

          <Card variant="pakistan">
            <CardHeader>
              <CardTitle className="text-green-800">Pakistan Theme Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700">This card uses Pakistani green theme colors.</p>
              <div className="mt-4 flex gap-2">
                <Button variant="pakistan" size="sm">Shop Now</Button>
                <NewBadge />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sample Product Card */}
        <Card variant="pakistan" className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-green-800">Sample Product</span>
              <div className="flex gap-2">
                <NewBadge />
                <DiscountBadge>30% OFF</DiscountBadge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg text-green-900">
                  Traditional Shalwar Kameez for Kids
                </h3>
                <p className="text-green-700">Premium Pakistani traditional wear</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-2xl font-bold text-green-800">PKR 2,500</span>
                  <span className="text-lg text-gray-500 line-through">PKR 3,500</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="pakistan" leftIcon={<ShoppingCart className="w-4 h-4" />}>
                  Add to Cart
                </Button>
                <Button variant="outline" leftIcon={<Heart className="w-4 h-4" />}>
                  Wishlist
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

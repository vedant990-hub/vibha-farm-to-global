import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductEnquiryProps {
  currentLang: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  enquiry: string;
  recaptcha: boolean;
}

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
}

const ProductEnquiry: React.FC<ProductEnquiryProps> = ({ currentLang }) => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    enquiry: '',
    recaptcha: false
  });

  // Mock product data - in real app, fetch from API based on productId
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Simulate fetching product data
    const mockProduct: Product = {
      id: productId || 'default',
      name: getProductName(productId),
      image: getProductImage(productId),
      category: getProductCategory(productId),
      description: getProductDescription(productId)
    };
    setProduct(mockProduct);
  }, [productId]);

  const getProductName = (id: string | undefined) => {
    const products: { [key: string]: string } = {
      'toor-dal': 'Toor Dal (Pigeon Peas)',
      'moong-dal': 'Moong Dal (Green Gram)',
      'chana-dal': 'Chana Dal (Bengal Gram)',
      'basmati-rice': 'Basmati Rice',
      'turmeric': 'Turmeric Powder',
      'red-chili': 'Red Chili Powder',
      'cumin': 'Cumin Seeds',
      'coriander': 'Coriander Seeds',
      'natural-honey': 'Natural Honey',
      'default': 'Premium Agricultural Product'
    };
    return products[id || 'default'] || 'Premium Agricultural Product';
  };

  const getProductImage = (id: string | undefined) => {
    const images: { [key: string]: string } = {
      'toor-dal': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
      'moong-dal': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
      'chana-dal': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
      'basmati-rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
      'turmeric': 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop',
      'red-chili': 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop',
      'cumin': 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop',
      'coriander': 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop',
      'natural-honey': '/honey.jpg',
      'default': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop'
    };
    return images[id || 'default'] || images.default;
  };

  const getProductCategory = (id: string | undefined) => {
    const categories: { [key: string]: string } = {
      'toor-dal': 'Pulses & Lentils',
      'moong-dal': 'Pulses & Lentils',
      'chana-dal': 'Pulses & Lentils',
      'basmati-rice': 'Grains & Cereals',
      'turmeric': 'Spices & Seasonings',
      'red-chili': 'Spices & Seasonings',
      'cumin': 'Spices & Seasonings',
      'coriander': 'Spices & Seasonings',
      'natural-honey': 'Herbal Products',
      'default': 'Agricultural Products'
    };
    return categories[id || 'default'] || 'Agricultural Products';
  };

  const getProductDescription = (id: string | undefined) => {
    const descriptions: { [key: string]: string } = {
      'toor-dal': 'Premium quality Toor Dal sourced from the finest farms in India. Rich in protein and essential nutrients.',
      'moong-dal': 'High-quality Moong Dal with excellent taste and nutritional value. Perfect for various culinary applications.',
      'chana-dal': 'Premium Chana Dal known for its rich flavor and high protein content. Ideal for traditional Indian dishes.',
      'basmati-rice': 'Aromatic Basmati Rice with long, slender grains. Known for its distinctive fragrance and taste.',
      'turmeric': 'Pure Turmeric Powder with high curcumin content. Natural color and flavor enhancer.',
      'red-chili': 'Premium Red Chili Powder with perfect heat and color. Ideal for various cuisines.',
      'cumin': 'Whole Cumin Seeds with intense aroma and flavor. Essential spice for many dishes.',
      'coriander': 'Fresh Coriander Seeds with mild, citrusy flavor. Perfect for seasoning and garnishing.',
      'natural-honey': 'Pure Natural Honey, minimally processed to preserve enzymes and antioxidants. Ideal as a natural sweetener and for wellness.',
      'default': 'Premium quality agricultural product sourced from the finest farms in India.'
    };
    return descriptions[id || 'default'] || 'Premium quality agricultural product sourced from the finest farms in India.';
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.phone.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your phone number.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.city.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your city.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.enquiry.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your enquiry details.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.recaptcha) {
      toast({
        title: "Validation Error",
        description: "Please complete the reCAPTCHA verification.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          productId,
          productName: product?.name
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Enquiry Sent Successfully!",
          description: "We'll get back to you within 24 hours with detailed information.",
        });
      } else {
        throw new Error('Failed to send enquiry');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send enquiry. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading product information...</p>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
              Enquiry Sent Successfully!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your interest in {product.name}. We'll get back to you within 24 hours with detailed information, pricing, and samples.
            </p>
            <div className="space-y-4">
              <Button 
                onClick={() => navigate('/products')}
                className="bg-gradient-primary hover:bg-primary/90"
              >
                Browse More Products
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/contact')}
              >
                Contact Us Directly
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Product Image */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                {product.category}
              </Badge>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-heading text-lg font-semibold mb-3">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground">
                Get detailed information, pricing, and samples
              </p>
            </div>

            <Card className="shadow-medium border-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Phone *
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 234 567 8900"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        City *
                      </label>
                      <Input
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Your city"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Enquiry Details *
                    </label>
                    <Textarea
                      value={formData.enquiry}
                      onChange={(e) => handleInputChange('enquiry', e.target.value)}
                      placeholder="Tell us about your requirements, quantities, delivery preferences, and any specific questions..."
                      rows={4}
                      required
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex items-center gap-3 p-4 border border-border rounded-lg bg-muted/30">
                    <input
                      type="checkbox"
                      id="recaptcha"
                      checked={formData.recaptcha}
                      onChange={(e) => handleInputChange('recaptcha', e.target.checked)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <label htmlFor="recaptcha" className="text-sm text-muted-foreground">
                      I'm not a robot
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:bg-primary/90 text-lg py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending Enquiry...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Enquiry
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Sales Enquiry Details */}
            <Card className="shadow-medium border-border bg-gradient-accent">
              <CardContent className="p-6 text-accent-foreground">
                <h3 className="font-heading text-lg font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">+91 98331 66617</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:info@vibhaglobaleximservices.com" className="text-sm hover:opacity-80 transition-opacity">info@vibhaglobaleximservices.com</a>
                  </div>
                </div>
                <p className="text-sm mt-4 opacity-90">
                  Our sales team is available 24/7 to assist you with any questions about pricing, 
                  specifications, or delivery options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEnquiry; 
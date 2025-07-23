import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Building,
  Globe,
  FileText,
  Users
} from 'lucide-react';

interface ContactProps {
  currentLang: string;
}

const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productInterest: '',
    quantity: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '+91 98765 43210',
      secondary: '+91 87654 32109',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@vibhaexim.com',
      secondary: 'sales@vibhaexim.com',
      description: 'Send us your inquiries anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      primary: '123 Export Plaza, Mumbai',
      secondary: 'Maharashtra 400001, India',
      description: 'Visit our main office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      primary: 'Mon - Fri: 9:00 AM - 6:00 PM',
      secondary: 'Sat: 9:00 AM - 1:00 PM',
      description: 'Indian Standard Time (IST)'
    }
  ];

  const officeLocations = [
    {
      city: 'Mumbai',
      type: 'Head Office',
      address: '123 Export Plaza, Andheri East, Mumbai - 400001',
      phone: '+91 98765 43210',
      email: 'mumbai@vibhaexim.com'
    },
    {
      city: 'Delhi',
      type: 'Regional Office',
      address: '456 Trade Center, Connaught Place, New Delhi - 110001',
      phone: '+91 87654 32109',
      email: 'delhi@vibhaexim.com'
    },
    {
      city: 'Chennai',
      type: 'South Regional Office',
      address: '789 Commerce Hub, T. Nagar, Chennai - 600017',
      phone: '+91 76543 21098',
      email: 'chennai@vibhaexim.com'
    }
  ];

  const quickActions = [
    {
      icon: FileText,
      title: 'Product Catalog',
      description: 'Download our complete product catalog',
      action: 'Download PDF',
      color: 'gradient-primary'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Chat with us instantly on WhatsApp',
      action: 'Start Chat',
      color: 'gradient-saffron'
    },
    {
      icon: Users,
      title: 'Schedule Meeting',
      description: 'Book a video call with our team',
      action: 'Book Now',
      color: 'gradient-gold'
    },
    {
      icon: Globe,
      title: 'Track Shipment',
      description: 'Track your order status online',
      action: 'Track Order',
      color: 'gradient-primary'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Ready to partner with us? Get in touch for quotes, product information, or any inquiries
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                24/7 Customer Support
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                Quick Response Time
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                Global Reach
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    Get a Quote
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Select onValueChange={(value) => handleInputChange('country', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uae">United Arab Emirates</SelectItem>
                            <SelectItem value="ksa">Saudi Arabia</SelectItem>
                            <SelectItem value="qatar">Qatar</SelectItem>
                            <SelectItem value="kuwait">Kuwait</SelectItem>
                            <SelectItem value="oman">Oman</SelectItem>
                            <SelectItem value="bahrain">Bahrain</SelectItem>
                            <SelectItem value="bangladesh">Bangladesh</SelectItem>
                            <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                            <SelectItem value="malaysia">Malaysia</SelectItem>
                            <SelectItem value="singapore">Singapore</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+971 xxx xxx xxx"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product">Product Interest *</Label>
                        <Select onValueChange={(value) => handleInputChange('productInterest', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pulses">Pulses & Lentils</SelectItem>
                            <SelectItem value="grains">Grains & Cereals</SelectItem>
                            <SelectItem value="spices">Spices & Seasonings</SelectItem>
                            <SelectItem value="oilseeds">Oil Seeds</SelectItem>
                            <SelectItem value="multiple">Multiple Categories</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity Required (MT/Month)</Label>
                      <Select onValueChange={(value) => handleInputChange('quantity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select quantity range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-50">0 - 50 MT</SelectItem>
                          <SelectItem value="50-100">50 - 100 MT</SelectItem>
                          <SelectItem value="100-500">100 - 500 MT</SelectItem>
                          <SelectItem value="500-1000">500 - 1000 MT</SelectItem>
                          <SelectItem value="1000+">1000+ MT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your requirements, preferred packaging, delivery terms, or any specific questions..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-saffron hover:bg-secondary-hover">
                      <Send className="mr-2 h-5 w-5" />
                      Send Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-1">{info.title}</h3>
                        <p className="font-medium mb-1">{info.primary}</p>
                        <p className="text-muted-foreground text-sm mb-2">{info.secondary}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Quick Actions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast ways to get the information you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover-lift cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-${action.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <action.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{action.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{action.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at our offices across India for face-to-face meetings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold">{office.city}</h3>
                      <Badge variant="secondary" className="text-xs">{office.type}</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">{office.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Find Us on Map
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Mumbai's business district
            </p>
          </div>

          <Card className="shadow-strong">
            <CardContent className="p-0">
              <div className="bg-gradient-primary rounded-lg h-96 flex items-center justify-center text-white">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-2">Interactive Map</h3>
                  <p className="opacity-90">Google Maps integration would be placed here</p>
                  <Button variant="secondary" className="mt-4 bg-white text-primary hover:bg-gray-100">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Start Your Partnership?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied importers who trust Vibha Exim for premium agricultural products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
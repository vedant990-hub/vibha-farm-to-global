import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { EMAILJS_CONFIG } from '@/config/emailjs';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send,
  Building,
  Globe,
  FileText,
  Users,
  ChevronsUpDown,
  Check
} from 'lucide-react';

interface ContactProps {
  currentLang: string;
}

const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  // EmailJS configuration from centralized config
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

  const countryOptions = [
    { value: 'afghanistan', label: 'Afghanistan' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'australia', label: 'Australia' },
    { value: 'bahrain', label: 'Bahrain' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'canada', label: 'Canada' },
    { value: 'chile', label: 'Chile' },
    { value: 'china', label: 'China' },
    { value: 'egypt', label: 'Egypt' },
    { value: 'ethiopia', label: 'Ethiopia' },
    { value: 'france', label: 'France' },
    { value: 'germany', label: 'Germany' },
    { value: 'ghana', label: 'Ghana' },
    { value: 'india', label: 'India' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'italy', label: 'Italy' },
    { value: 'japan', label: 'Japan' },
    { value: 'kenya', label: 'Kenya' },
    { value: 'kuwait', label: 'Kuwait' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'maldives', label: 'Maldives' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'morocco', label: 'Morocco' },
    { value: 'nepal', label: 'Nepal' },
    { value: 'new-zealand', label: 'New Zealand' },
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'oman', label: 'Oman' },
    { value: 'pakistan', label: 'Pakistan' },
    { value: 'philippines', label: 'Philippines' },
    { value: 'poland', label: 'Poland' },
    { value: 'qatar', label: 'Qatar' },
    { value: 'russia', label: 'Russia' },
    { value: 'saudi-arabia', label: 'Saudi Arabia' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'south-africa', label: 'South Africa' },
    { value: 'south-korea', label: 'South Korea' },
    { value: 'spain', label: 'Spain' },
    { value: 'sri-lanka', label: 'Sri Lanka' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'uae', label: 'United Arab Emirates' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'usa', label: 'United States' },
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'other', label: 'Other' },
  ].sort((a, b) => a.label.localeCompare(b.label));

  const [countryOpen, setCountryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Prepare template parameters for EmailJS
    const templateParams = {
      full_name: formData.name,
      email: formData.email,
      company_name: formData.company,
      country: countryOptions.find(c => c.value === formData.country)?.label || formData.country,
      phone: formData.phone,
      message: formData.message,
      time: new Date().toLocaleString(), // optional, matches {{time}}
    };
    

    // Send email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '+91 98331 66617',
      secondary: '+91 98331 66617',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@vibhaglobaleximservices.com',
      secondary: 'info@vibhaglobaleximservices.com',
      description: 'Send us your inquiries anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      primary: 'Gokul Residency H Building, Kandivali East',
      secondary: 'Mumbai, Maharashtra 400101, India',
      description: 'Visit our main office'
    }
  ];

  const officeLocations = [
    {
      city: 'Mumbai',
      type: 'Head Office',
      address: 'Gokul Residency H Building, Gokul Gagan, Kandivali, Dattani Park, Thakur Village, Kandivali East, Mumbai - 400101',
      phone: '+91 98331 66617',
      email: 'info@vibhaglobaleximservices.com'
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/contact.jpeg)`
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 md:mb-8 px-4 sm:px-0">
              Ready to partner with us? Get in touch for quotes, product information, or any inquiries
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white text-primary px-3 py-2 text-sm sm:text-base md:text-lg">
                24/7 Customer Support
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-3 py-2 text-sm sm:text-base md:text-lg">
                Quick Response Time
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-3 py-2 text-sm sm:text-base md:text-lg">
                Global Reach
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="font-heading text-xl sm:text-2xl text-primary">
                    Get a Quote
                  </CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
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
                        <Label htmlFor="company" className="text-sm font-medium">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-sm font-medium">Country *</Label>
                        <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={countryOpen}
                              className="w-full justify-between"
                            >
                              {formData.country
                                ? countryOptions.find((c) => c.value === formData.country)?.label
                                : 'Select your country'}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                            <Command>
                              <CommandInput placeholder="Search country..." />
                              <CommandEmpty>No country found.</CommandEmpty>
                              <CommandList>
                                <CommandGroup>
                                  {countryOptions.map((country) => (
                                    <CommandItem
                                      key={country.value}
                                      value={country.label}
                                      onSelect={() => {
                                        handleInputChange('country', country.value);
                                        setCountryOpen(false);
                                      }}
                                    >
                                      <Check
                                        className={`mr-2 h-4 w-4 ${
                                          formData.country === country.value ? 'opacity-100' : 'opacity-0'
                                        }`}
                                      />
                                      {country.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+971 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your requirements, preferred packaging, delivery terms, or any specific questions..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:bg-primary-hover text-white text-sm sm:text-base">
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                    </Button>
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 text-center">
                          Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 text-center">
                          Sorry, there was an error sending your message. Please try again or contact us directly.
                        </p>
                        <div className="mt-2 text-center">
                          <a 
                            href="tel:+919833166617" 
                            className="text-red-600 hover:text-red-800 underline"
                          >
                            Call us: +91 98331 66617
                          </a>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base sm:text-lg font-semibold mb-1">{info.title}</h3>
                        <p className="font-medium mb-1 text-sm sm:text-base">{info.primary}</p>
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
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Quick Actions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Fast ways to get the information you need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <action.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold mb-2">{action.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{action.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => {
                      if (action.title === 'Product Catalog') {
                        // Download PDF functionality
                        const link = document.createElement('a');
                        link.href = '/product-catalog.pdf'; // You'll need to add this PDF to public folder
                        link.download = 'Vibha_Exim_Product_Catalog.pdf';
                        link.click();
                      } else if (action.title === 'WhatsApp') {
                        // WhatsApp chat functionality
                        window.open('https://wa.me/919833166617?text=Hi, I would like to know more about your products', '_blank');
                      } else if (action.title === 'Schedule Meeting') {
                        // Schedule meeting functionality
                        window.open('https://calendly.com/vibha-exim/meeting', '_blank');
                      }
                    }}
                  >
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Offices
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4 sm:px-0">
              Visit us at our offices across India for face-to-face meetings
            </p>
          </div>

          <div className="flex justify-center">
            {officeLocations.map((office, index) => (
              <Card key={index} className="hover-lift max-w-md">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-semibold">{office.city}</h3>
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
                      <a href="mailto:{office.email}" className="text-sm font-medium hover:text-primary transition-colors">{office.email}</a>
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
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Find Us on Map
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Located in the heart of Mumbai's business district
            </p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2!2d72.8667!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644ed87%3A0xdecc1499814c163f!2sGokul%20Residency%20H%20Building%2C%20Gokul%20Gagan%2C%20Kandivali%2C%20Dattani%20Park%2C%20Thakur%20Village%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101%2C%20India!5e0!3m2!1sen!2sin!4v1703123456789"
              width="100%"
              height="300"
              style={{ border: 0, cursor: 'grab' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vibha Exim Office Location - Gokul Residency H Building, Kandivali East, Mumbai"
            ></iframe>
          </div>
          
          {/* Mobile-friendly map styles */}
          <style jsx>{`
            @media (min-width: 640px) {
              iframe { height: 400px !important; }
            }
            @media (min-width: 768px) {
              iframe { height: 450px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Start Your Partnership?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4 sm:px-0">
            Join hundreds of satisfied importers who trust Vibha Exim for premium agricultural products
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-primary">
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
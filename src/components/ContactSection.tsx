import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  // EmailJS configuration from centralized config
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company_name: formData.company,
      country: formData.country,
      phone_number: formData.phone,
      product_interest: formData.productInterest,
      message: formData.message,
      to_name: 'Vibha Exim Team'
    };

    // Send email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast({
          title: "Quote Request Sent!",
          description: "We'll get back to you within 24 hours with a detailed quote.",
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          phone: '',
          productInterest: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or contact us directly.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98331 66617',
      link: 'tel:+919833166617'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@vibhaglobaleximservices.com',
      link: 'mailto:info@vibhaglobaleximservices.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+91 98331 66617',
      link: 'https://wa.me/919833166617'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Gokul Residency H Building, Gokul Gagan, Kandivali, Dattani Park, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start
            <span className="text-accent block">Importing?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contact us today for competitive quotes, product samples, and personalized 
            import solutions tailored to your market needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-medium border-border">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Request a Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Company Name *
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Country *
                      </label>
                      <Input
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Product Interest
                      </label>
                      <Input
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        placeholder="Dal, Pulses, Spices, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, quantities, and delivery preferences..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-saffron hover:bg-secondary-hover"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-medium border-border">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-border bg-gradient-accent">
              <CardContent className="p-6 text-accent-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6" />
                  <h3 className="font-heading text-lg font-bold">Quick Response</h3>
                </div>
                <p className="text-sm mb-4">
                  We respond to all quote requests within 24 hours with detailed 
                  pricing and product specifications.
                </p>
                <div className="space-y-2 text-sm">
                  <div>📋 Detailed product catalogs</div>
                  <div>💰 Competitive wholesale pricing</div>
                  <div>🚢 Shipping & logistics support</div>
                  <div>📞 Direct access to our team</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">
                  Prefer to Talk?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Call us directly for immediate assistance
                </p>
                <a 
                  href="https://wa.me/919833166617"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Google Map Section */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-soft bg-white p-6">
          <h3 className="font-heading text-2xl font-bold mb-2 text-primary">Find Us on Map</h3>
          <p className="text-muted-foreground mb-4">Located in the heart of Mumbai's business district</p>
          <div className="font-semibold mb-2 text-accent-foreground">Interactive Map</div>
          <iframe
            title="Vibha Global Exim Services Office Map"
            src="https://www.google.com/maps?q=Gokul+Residency+H+Building,+Gokul+Gagan,+Kandivali,+Dattani+Park,+Thakur+Village,+Kandivali+East,+Mumbai,+Maharashtra+400101&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg mb-4"
          ></iframe>
          <a
            href="https://www.google.com/maps/place/Gokul+Residency+H+Building,+Gokul+Gagan,+Kandivali,+Dattani+Park,+Thakur+Village,+Kandivali+East,+Mumbai,+Maharashtra+400101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-2 bg-accent text-accent-foreground rounded-md font-semibold shadow hover:bg-accent-hover transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
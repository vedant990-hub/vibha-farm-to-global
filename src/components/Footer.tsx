import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Global Presence', href: '#global-presence' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    'Toor Dal',
    'Moong Dal',
    'Chana Dal',
    'Basmati Rice',
    'Turmeric Powder',
    'Red Chili Powder',
    'Cumin Seeds',
    'Coriander Seeds'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">V</span>
                </div>
                <div>
                  <h2 className="font-heading font-bold text-xl">Vibha Exim</h2>
                  <p className="text-sm opacity-90">Global Services</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-6">
                Trusted exporters of premium Indian agricultural products to global markets. 
                Quality, reliability, and excellence in every shipment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@vibhaexim.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Our Products</h3>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li key={index}>
                    <span className="text-sm opacity-90">{product}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Export Markets */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Export Markets</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-accent mb-2">Middle East</h4>
                  <p className="text-sm opacity-90">UAE, Saudi Arabia, Qatar, Kuwait, Oman</p>
                </div>
                <div>
                  <h4 className="font-medium text-accent mb-2">South Asia</h4>
                  <p className="text-sm opacity-90">Singapore, Malaysia, Bangladesh</p>
                </div>
                <div>
                  <h4 className="font-medium text-accent mb-2">East Africa</h4>
                  <p className="text-sm opacity-90">Kenya, Tanzania, Uganda</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="bg-accent/10 rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">Ready to Import Premium Products?</h3>
            <p className="text-sm opacity-90 mb-6 max-w-2xl mx-auto">
              Join our network of satisfied importers worldwide. Get competitive quotes and 
              reliable supply chain solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-hover transition-colors"
              >
                Get Quote Now
              </a>
              <a 
                href="https://wa.me/919876543210"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm opacity-90">
              © 2024 Vibha Exim Global Services. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm opacity-90">Certified by FSSAI & ISO</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-primary-foreground hover:text-accent"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
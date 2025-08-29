import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', to: '/about' },
    { name: 'Products', to: '/products' },
    { name: 'Why Choose Us', to: '/why-choose' }, // This may need to be a separate page or removed if not routed
    { name: 'Global Presence', to: '/global-reach' },
    { name: 'Contact', to: '/contact' }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
                             <div className="flex items-center gap-2 mb-6">
                 <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                   <span className="text-accent-foreground font-bold text-xl">V</span>
                 </div>
                 <div>
                   <h2 className="font-heading font-bold text-lg sm:text-xl">Vibha Global Exim Services</h2>
                 </div>
               </div>
              <p className="text-sm opacity-90 mb-4 sm:mb-6">
                Trusted exporters of premium Indian agricultural products to global markets. 
                Quality, reliability, and excellence in every shipment.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 98331 66617</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@vibhaglobaleximservices.com" className="text-sm hover:text-accent transition-colors">info@vibhaglobaleximservices.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Mumbai, Maharashtra 400101, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1">
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="sm:col-span-1">
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Our Products</h3>
              <ul className="space-y-2 sm:space-y-3">
                {products.map((product, index) => (
                  <li key={index}>
                    <span className="text-sm opacity-90">{product}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Export Markets */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Export Markets</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-accent mb-1 sm:mb-2 text-sm sm:text-base">Middle East</h4>
                  <p className="text-sm opacity-90">UAE, Saudi Arabia, Qatar, Kuwait, Oman</p>
                </div>
                <div>
                  <h4 className="font-medium text-accent mb-1 sm:mb-2 text-sm sm:text-base">South Asia</h4>
                  <p className="text-sm opacity-90">Singapore, Malaysia, Bangladesh</p>
                </div>
                <div>
                  <h4 className="font-medium text-accent mb-1 sm:mb-2 text-sm sm:text-base">East Africa</h4>
                  <p className="text-sm opacity-90">Kenya, Tanzania, Uganda</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="bg-secondary/20 rounded-xl p-4 sm:p-6 md:p-8 text-center">
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Import Premium Products?</h3>
            <p className="text-sm opacity-90 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Join our network of satisfied importers worldwide. Get competitive quotes and 
              reliable supply chain solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-hover transition-colors shadow-soft text-sm sm:text-base"
              >
                Get Quote Now
              </Link>
              <a 
                href="https://wa.me/919833166617"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors shadow-soft text-sm sm:text-base"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

                 {/* Bottom footer */}
         <div className="border-t border-primary-foreground/20 py-6">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
             <div className="text-sm opacity-90">
               © 2025 Vibha Global Exim Services. All rights reserved.
             </div>
             <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mr-16">
               <span className="text-sm opacity-90">Certified by FSSAI & APEDA</span>
             </div>
           </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
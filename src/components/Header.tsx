import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Phone, Mail } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@vibhaexim.com</span>
            </div>
          </div>
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-primary">Vibha Exim</h1>
              <p className="text-xs text-muted-foreground">Global Services</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/about"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary font-medium' : ''}`}
            >
              About Us
            </Link>
            <Link 
              to="/products"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/products' ? 'text-primary font-medium' : ''}`}
            >
              Products
            </Link>
            <Link 
              to="/global-reach"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/global-reach' ? 'text-primary font-medium' : ''}`}
            >
              Global Reach
            </Link>
            <Link 
              to="/testimonials"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/testimonials' ? 'text-primary font-medium' : ''}`}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/contact' ? 'text-primary font-medium' : ''}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-saffron hover:bg-secondary-hover"
            >
              Get Quote
            </Button>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
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
    <header className="fixed top-0 left-0 right-0 z-50 font-body transition-all">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Go to home page">
            <img
              src="/vibha_logo.jpg"
              className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
              style={{ minWidth: '3rem' }}
              alt="Vibha Exim Logo"
            />
            <div>
              <h1 className="font-heading font-bold text-2xl text-primary whitespace-nowrap">Vibha Exim Global Services</h1>
            </div>
          </Link>

          {/* Main navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/about"
              className={`text-foreground px-1 pb-1 border-b-2 border-transparent hover:border-primary hover:text-primary transition-all font-medium ${location.pathname === '/about' ? 'border-primary text-primary' : ''}`}
            >
              About Us
            </Link>
            <Link 
              to="/products"
              className={`text-foreground px-1 pb-1 border-b-2 border-transparent hover:border-primary hover:text-primary transition-all font-medium ${location.pathname === '/products' ? 'border-primary text-primary' : ''}`}
            >
              Products
            </Link>
            <Link 
              to="/global-reach"
              className={`text-foreground px-1 pb-1 border-b-2 border-transparent hover:border-primary hover:text-primary transition-all font-medium ${location.pathname === '/global-reach' ? 'border-primary text-primary' : ''}`}
            >
              Global Reach
            </Link>
            <Link 
              to="/testimonials"
              className={`text-foreground px-1 pb-1 border-b-2 border-transparent hover:border-primary hover:text-primary transition-all font-medium ${location.pathname === '/testimonials' ? 'border-primary text-primary' : ''}`}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact"
              className={`text-foreground px-1 pb-1 border-b-2 border-transparent hover:border-primary hover:text-primary transition-all font-medium ${location.pathname === '/contact' ? 'border-primary text-primary' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              asChild
              className="bg-accent text-accent-foreground rounded-md px-5 py-2 text-sm font-semibold shadow-soft hover:bg-accent-hover transition-all focus:ring-2 focus:ring-accent/40"
            >
              <Link to="/contact">Get Quote</Link>
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
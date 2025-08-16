import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-body transition-all backdrop-blur-md bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none" 
            aria-label="Go to home page"
            onClick={() => {
              if (location.pathname === '/') {
                scrollToTop();
              }
            }}
          >
            <img
              src="/vibha_logo.jpg"
              className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform group-hover:scale-105"
              style={{ minWidth: '3rem' }}
              alt="Vibha Exim Logo"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-xl md:text-2xl text-white whitespace-nowrap">Vibha Exim Global Services</h1>
            </div>
            <div className="sm:hidden">
              <h1 className="font-heading font-bold text-lg text-white">Vibha Exim</h1>
            </div>
          </Link>

          {/* Main navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/about"
              className={`text-white px-1 pb-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all font-medium ${location.pathname === '/about' ? 'border-white text-white' : ''}`}
            >
              About Us
            </Link>
            <Link 
              to="/products"
              className={`text-white px-1 pb-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all font-medium ${location.pathname === '/products' ? 'border-white text-white' : ''}`}
            >
              Products
            </Link>
            <Link 
              to="/global-reach"
              className={`text-white px-1 pb-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all font-medium ${location.pathname === '/global-reach' ? 'border-white text-white' : ''}`}
            >
              Global Reach
            </Link>
            <Link 
              to="/testimonials"
              className={`text-white px-1 pb-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all font-medium ${location.pathname === '/testimonials' ? 'border-white text-white' : ''}`}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact"
              className={`text-white px-1 pb-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all font-medium ${location.pathname === '/contact' ? 'border-white text-white' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              asChild
              className="hidden sm:inline-flex bg-accent text-accent-foreground rounded-md px-3 md:px-5 py-2 text-sm font-semibold shadow-soft hover:bg-accent-hover transition-all focus:ring-2 focus:ring-accent/40"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-white border-white hover:bg-transparent bg-transparent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 backdrop-blur-md bg-black/30">
            <nav className="py-4 space-y-2">
              <Link 
                to="/about"
                className={`block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors ${location.pathname === '/about' ? 'bg-white/20 text-white' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/products"
                className={`block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors ${location.pathname === '/products' ? 'bg-white/20 text-white' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/global-reach"
                className={`block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors ${location.pathname === '/global-reach' ? 'bg-white/20 text-white' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Global Reach
              </Link>
              <Link 
                to="/testimonials"
                className={`block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors ${location.pathname === '/testimonials' ? 'bg-white/20 text-white' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/contact"
                className={`block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors ${location.pathname === '/contact' ? 'bg-white/20 text-white' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 py-2">
                <Button 
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent-hover"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
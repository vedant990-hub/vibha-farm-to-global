import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  // Track scroll to switch navbar style for readability
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !hasScrolled;
  const headerBgClass = isTransparent
    ? 'bg-transparent'
    : 'bg-background/90 supports-[backdrop-filter]:bg-background/60 backdrop-blur-md shadow-sm';
  const brandTextClass = isTransparent ? 'text-white' : 'text-foreground';
  const linkBaseClass = isTransparent
    ? 'text-white hover:text-white border-white'
    : 'text-foreground hover:text-foreground border-foreground/60';
  const getLinkClass = (path: string) => `px-1 pb-1 border-b-2 border-transparent hover:border-current transition-all font-medium ${linkBaseClass} ${location.pathname === path ? 'border-current' : ''}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 font-body transition-all ${headerBgClass}`}>
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
              <h1 className={`font-heading font-bold text-xl md:text-2xl whitespace-nowrap ${brandTextClass}`}>Vibha Global Exim Services</h1>
            </div>
            <div className="sm:hidden">
              <h1 className={`font-heading font-bold text-lg ${brandTextClass}`}>Vibha Global</h1>
            </div>
          </Link>

          {/* Main navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/about"
              className={getLinkClass('/about')}
            >
              About Us
            </Link>
            <Link 
              to="/products"
              className={getLinkClass('/products')}
            >
              Products
            </Link>
            <Link 
              to="/global-reach"
              className={getLinkClass('/global-reach')}
            >
              Global Reach
            </Link>
            <Link 
              to="/testimonials"
              className={getLinkClass('/testimonials')}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact"
              className={getLinkClass('/contact')}
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
              className={`lg:hidden ${isTransparent ? 'text-white' : 'text-foreground'} bg-transparent hover:bg-transparent`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden border-t ${isTransparent ? 'border-white/20 bg-black/40' : 'border-border/60 bg-background/95 backdrop-blur-md'}`}>
            <nav className="py-4 space-y-2">
              <Link 
                to="/about"
                className={`block px-4 py-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-foreground/10'} ${location.pathname === '/about' ? (isTransparent ? 'bg-white/20 text-white' : 'bg-foreground/10') : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/products"
                className={`block px-4 py-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-foreground/10'} ${location.pathname === '/products' ? (isTransparent ? 'bg-white/20 text-white' : 'bg-foreground/10') : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/global-reach"
                className={`block px-4 py-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-foreground/10'} ${location.pathname === '/global-reach' ? (isTransparent ? 'bg-white/20 text-white' : 'bg-foreground/10') : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Global Reach
              </Link>
              <Link 
                to="/testimonials"
                className={`block px-4 py-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-foreground/10'} ${location.pathname === '/testimonials' ? (isTransparent ? 'bg-white/20 text-white' : 'bg-foreground/10') : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/contact"
                className={`block px-4 py-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-foreground/10'} ${location.pathname === '/contact' ? (isTransparent ? 'bg-white/20 text-white' : 'bg-foreground/10') : ''}`}
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
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Truck, Plane } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-strong">
          <Globe className="h-8 w-8 text-accent-foreground animate-globe" />
        </div>
      </div>
      <div className="absolute top-40 right-40 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-medium">
          <Truck className="h-6 w-6 text-secondary-foreground" />
        </div>
      </div>
      <div className="absolute top-60 right-60 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shadow-medium">
          <Plane className="h-7 w-7 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
              🌾 Premium Agricultural Exports from India
            </span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            From Indian
            <span className="text-accent block">Farms</span>
            to Global
            <span className="text-secondary block">Markets</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Trusted exporters of premium dal, pulses, grains, and spices. 
            Connecting the finest Indian agricultural products to wholesalers 
            and importers across UAE, Saudi Arabia, Qatar, and South Asia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-saffron hover:bg-secondary-hover text-lg px-8 py-6 group"
            >
              Start Importing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Products
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm opacity-90">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
              <div className="text-sm opacity-90">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99%</div>
              <div className="text-sm opacity-90">Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plane } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';
import { Link } from 'react-router-dom';
import Loader from '@/components/Loader';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isVideoReady, setIsVideoReady] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-95"
          onCanPlay={() => { setIsVideoReady(true); window.dispatchEvent(new Event('hero-video-ready')); }}
          onLoadedData={() => { setIsVideoReady(true); window.dispatchEvent(new Event('hero-video-ready')); }}
          onError={() => { setIsVideoReady(true); window.dispatchEvent(new Event('hero-video-ready')); }}
        >
          <source src="/output.mp4" type="video/mp4" />
          
          {/* Fallback to image if video fails to load */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
        </video>
        {/* Local overlay no longer required since global overlay is used */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
              🌾 Premium Agricultural Exports from India
            </span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
            From Indian
            <span className="text-accent block">Farms</span>
            to Global
            <span className="text-secondary block">Markets</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl leading-relaxed font-body">
            Trusted exporters of premium dal, pulses, grains, and spices. 
            Connecting the finest Indian agricultural products to wholesalers 
            and importers across UAE, Saudi Arabia, Qatar, and South Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              asChild
              className="bg-gradient-saffron hover:bg-secondary-hover text-lg px-8 py-6 group rounded-md shadow"
            >
              <Link to="/contact">
                Start Importing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 rounded-md"
            >
              <Link to="/products">View Products</Link>
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
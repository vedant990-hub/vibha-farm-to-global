import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Shield, Truck, Users } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';

interface HomeProps {
  currentLang: string;
}

const Home: React.FC<HomeProps> = ({ currentLang }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
              From Indian Farms to Global Markets
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 opacity-90 px-4 sm:px-0">
              Premium quality pulses, grains, and spices exported worldwide with trust and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link to="/products">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-gradient-accent hover:bg-accent-hover text-accent-foreground">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Your Trusted Export Partner
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Connecting Indian agricultural excellence with global markets through quality, trust, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="hover-lift">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-sm sm:text-base text-muted-foreground">FSSAI, ISO certified products with stringent quality controls</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Exporting to 15+ countries across Middle East and Asia</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">Reliable Logistics</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Timely delivery with advanced supply chain management</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">Trusted Partners</h3>
                <p className="text-sm sm:text-base text-muted-foreground">500+ satisfied importers and growing partnerships</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg sm:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4 sm:px-0">
            Join hundreds of importers who trust Vibha Exim for premium Indian agricultural products
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link to="/about">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
                Learn More About Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-float">
              From Indian Farms to Global Markets
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Premium quality pulses, grains, and spices exported worldwide with trust and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" variant="secondary" className="bg-gradient-saffron hover:bg-secondary-hover">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 animate-float opacity-30">
          <Globe className="h-20 w-20 text-white animate-pulse-slow" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float opacity-30" style={{ animationDelay: '2s' }}>
          <Truck className="h-16 w-16 text-white" />
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Your Trusted Export Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting Indian agricultural excellence with global markets through quality, trust, and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">FSSAI, ISO certified products with stringent quality controls</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">Exporting to 15+ countries across Middle East and Asia</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Reliable Logistics</h3>
                <p className="text-muted-foreground">Timely delivery with advanced supply chain management</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Trusted Partners</h3>
                <p className="text-muted-foreground">500+ satisfied importers and growing partnerships</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of importers who trust Vibha Exim for premium Indian agricultural products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Learn More About Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
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
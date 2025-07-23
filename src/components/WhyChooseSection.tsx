import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Globe, Shield, Truck, Users, Target, Award } from 'lucide-react';
import shippingImage from '@/assets/shipping-port.jpg';

const WhyChooseSection: React.FC = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: '100% quality assurance with rigorous testing and certification'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Consistent on-time delivery with efficient logistics network'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving 15+ countries with established distribution channels'
    },
    {
      icon: Shield,
      title: 'Secure Packaging',
      description: 'Advanced packaging technology for maximum product protection'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated account managers and 24/7 customer support'
    },
    {
      icon: Target,
      title: 'Competitive Pricing',
      description: 'Best wholesale rates with flexible payment terms'
    }
  ];

  const stats = [
    { number: '500+', label: 'Containers Shipped Monthly' },
    { number: '99.8%', label: 'On-Time Delivery Rate' },
    { number: '24/7', label: 'Customer Support' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <section id="why-choose" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Why Choose Vibha Exim?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Success is
            <span className="text-accent block">Our Priority</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We go beyond just being a supplier. We're your strategic partner in building 
            a successful import business with reliable, high-quality agricultural products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <div 
              className="rounded-2xl shadow-strong h-80 bg-cover bg-center mb-8"
              style={{ backgroundImage: `url(${shippingImage})` }}
            >
              <div className="h-full bg-gradient-to-t from-primary/80 to-transparent rounded-2xl flex items-end p-8">
                <div className="text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">Global Logistics Excellence</h3>
                  <p className="opacity-90">State-of-the-art shipping and handling facilities</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8" />
                <div>
                  <h3 className="font-bold text-lg">Industry Recognition</h3>
                  <p className="opacity-90 text-sm">Export Excellence Award Winner 2023</p>
                </div>
              </div>
              <p className="text-sm opacity-90">
                Recognized by the Ministry of Commerce & Industry for outstanding 
                contribution to agricultural exports.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-saffron rounded-2xl p-8 md:p-12">
          <div className="text-center text-secondary-foreground mb-8">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Trusted by Importers Worldwide
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our growing network of satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
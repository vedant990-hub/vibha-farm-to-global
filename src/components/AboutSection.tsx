import React from 'react';
import { Shield, Award, Truck, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every step, from sourcing to delivery'
    },
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'FSSAI, APEDA, and international export certifications'
    },
    {
      icon: Truck,
      title: 'Reliable Logistics',
      description: 'On-time delivery with efficient supply chain management'
    },
    {
      icon: Users,
      title: 'Trusted Partnership',
      description: 'Building long-term relationships with global importers'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Vibha Global Exim Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Trusted Partner in
            <span className="text-primary block">Agricultural Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience in agricultural exports, Vibha Global Exim Services 
            has established itself as a leading supplier of premium Indian dal, pulses, grains, 
            and spices to international markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-6">
              From Heritage to Global Markets
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Rooted in India's rich agricultural heritage, we understand the importance of 
                quality and authenticity in every grain we export. Our commitment to excellence 
                has made us a preferred choice for wholesalers and importers across the Middle East 
                and South Asia.
              </p>
              <p>
                We work directly with farmers and cooperatives across India's premier agricultural 
                regions, ensuring fair prices for producers while maintaining the highest quality 
                standards for our international customers.
              </p>
              <p>
                Our state-of-the-art processing facilities and stringent quality control measures 
                ensure that every shipment meets international standards and exceeds customer expectations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-border shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Certifications & Compliance
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We maintain the highest standards of quality and compliance with international regulations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">FSSAI</div>
              <div className="text-sm opacity-80">Certified</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">APEDA</div>
              <div className="text-sm opacity-80">Certified</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">HACCP</div>
              <div className="text-sm opacity-80">Compliant</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">Export</div>
              <div className="text-sm opacity-80">Licensed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
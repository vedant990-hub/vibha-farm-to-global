import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Plane, Ship, Users } from 'lucide-react';
import globalMapImage from '@/assets/global-map.jpg';

const GlobalPresenceSection: React.FC = () => {
  const regions = [
    {
      name: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'],
      icon: '🕌',
      stats: '60% of exports'
    },
    {
      name: 'South Asia',
      countries: ['Singapore', 'Malaysia', 'Bangladesh', 'Sri Lanka'],
      icon: '🏛️',
      stats: '25% of exports'
    },
    {
      name: 'East Africa',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Ethiopia'],
      icon: '🦁',
      stats: '15% of exports'
    }
  ];

  const logisticsFeatures = [
    {
      icon: Ship,
      title: 'Sea Freight',
      description: 'Container shipping from major Indian ports'
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Express delivery for urgent orders'
    },
    {
      icon: MapPin,
      title: 'Port Network',
      description: 'Connected to 20+ international ports'
    },
    {
      icon: Users,
      title: 'Local Partners',
      description: 'Trusted distributors in key markets'
    }
  ];

  return (
    <section id="global-presence" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Global Presence
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connecting India to
            <span className="text-secondary block">the World</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our extensive network spans across continents, bringing Indian agricultural excellence 
            to wholesalers and importers worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div 
              className="rounded-2xl shadow-strong h-96 bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${globalMapImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">15+ Countries Served</h3>
                  <p className="opacity-90">Growing global footprint</p>
                </div>
              </div>
              
              {/* Animated pulse points */}
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-accent rounded-full animate-pulse-slow"></div>
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-accent rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          <div className="space-y-6">
            {regions.map((region, index) => (
              <Card key={index} className="hover-lift border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{region.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading text-xl font-bold text-foreground">{region.name}</h3>
                        <span className="text-sm font-medium text-accent-foreground bg-accent/10 px-2 py-1 rounded">
                          {region.stats}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {region.countries.map((country, countryIndex) => (
                          <span 
                            key={countryIndex}
                            className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Seamless Global Logistics
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Advanced supply chain management ensuring your products reach you fresh and on time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm opacity-80">Containers/Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">20+</div>
              <div className="text-sm opacity-80">International Ports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">99%</div>
              <div className="text-sm opacity-80">Delivery Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-80">Tracking Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
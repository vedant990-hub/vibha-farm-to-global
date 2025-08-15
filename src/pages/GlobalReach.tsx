import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin, Truck, Ship, Plane, Clock } from 'lucide-react';
import globalMapImage from '@/assets/global-map.jpg';

interface GlobalReachProps {
  currentLang: string;
}

const GlobalReach: React.FC<GlobalReachProps> = ({ currentLang }) => {
  const exportCountries = [
    {
      region: 'Middle East',
      countries: [
        { name: 'United Arab Emirates', flag: '🇦🇪', volume: 'High' },
        { name: 'Saudi Arabia', flag: '🇸🇦', volume: 'High' },
        { name: 'Qatar', flag: '🇶🇦', volume: 'Medium' },
        { name: 'Kuwait', flag: '🇰🇼', volume: 'Medium' },
        { name: 'Oman', flag: '🇴🇲', volume: 'Medium' },
        { name: 'Bahrain', flag: '🇧🇭', volume: 'Low' }
      ]
    },
    {
      region: 'South Asia',
      countries: [
        { name: 'Bangladesh', flag: '🇧🇩', volume: 'High' },
        { name: 'Sri Lanka', flag: '🇱🇰', volume: 'Medium' },
        { name: 'Nepal', flag: '🇳🇵', volume: 'Medium' },
        { name: 'Maldives', flag: '🇲🇻', volume: 'Low' }
      ]
    },
    {
      region: 'Southeast Asia',
      countries: [
        { name: 'Malaysia', flag: '🇲🇾', volume: 'Medium' },
        { name: 'Singapore', flag: '🇸🇬', volume: 'Medium' },
        { name: 'Indonesia', flag: '🇮🇩', volume: 'Low' }
      ]
    },
    {
      region: 'Africa',
      countries: [
        { name: 'South Africa', flag: '🇿🇦', volume: 'Medium' },
        { name: 'Kenya', flag: '🇰🇪', volume: 'Low' },
        { name: 'Tanzania', flag: '🇹🇿', volume: 'Low' }
      ]
    }
  ];

  const logisticsCapabilities = [
    {
      mode: 'Sea Freight',
      icon: Ship,
      description: 'Cost-effective bulk shipments',
      routes: ['Mumbai Port', 'JNPT Port', 'Chennai Port'],
      transitTime: '15-25 days',
      capacity: 'Up to 20,000 MT/month'
    },
    {
      mode: 'Air Freight',
      icon: Plane,
      description: 'Fast delivery for urgent orders',
      routes: ['Delhi IGI', 'Mumbai Airport', 'Chennai Airport'],
      transitTime: '3-7 days',
      capacity: 'Up to 500 MT/month'
    },
    {
      mode: 'Land Transport',
      icon: Truck,
      description: 'Regional deliveries and warehouse distribution',
      routes: ['Border Crossings', 'Inland Container Depots'],
      transitTime: '5-15 days',
      capacity: 'Up to 1,000 MT/month'
    }
  ];

  const portCapabilities = [
    {
      port: 'Jawaharlal Nehru Port (JNPT)',
      location: 'Mumbai, Maharashtra',
      capacity: 'Primary Export Hub',
      specialization: 'Containerized Cargo',
      volume: '60% of exports'
    },
    {
      port: 'Mumbai Port',
      location: 'Mumbai, Maharashtra',
      capacity: 'Major Gateway',
      specialization: 'Bulk & Break-bulk',
      volume: '25% of exports'
    },
    {
      port: 'Chennai Port',
      location: 'Chennai, Tamil Nadu',
      capacity: 'South India Hub',
      specialization: 'Regional Distribution',
      volume: '15% of exports'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ 
            backgroundImage: `url(${globalMapImage})`,
            filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Global Reach & Logistics
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Connecting Indian excellence with markets across 15+ countries worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                <Globe className="w-4 h-4 mr-2" />
                15+ Countries
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                <Ship className="w-4 h-4 mr-2" />
                3 Major Ports
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                <Truck className="w-4 h-4 mr-2" />
                Multi-modal Logistics
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Export Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Export Countries</div>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Global Partners</div>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">MT Annual Export</div>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">On-time Delivery</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Export Countries by Region */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Our Export Markets
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving diverse markets across multiple continents with tailored solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportCountries.map((region, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4 text-center">
                    {region.region}
                  </h3>
                  <div className="space-y-3">
                    {region.countries.map((country, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{country.flag}</span>
                          <span className="text-sm font-medium">{country.name}</span>
                        </div>
                        <Badge 
                          variant={country.volume === 'High' ? 'default' : 
                                  country.volume === 'Medium' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {country.volume}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Logistics Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multi-modal transportation solutions for efficient global delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {logisticsCapabilities.map((capability, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-center mb-3">
                    {capability.mode}
                  </h3>
                  <p className="text-muted-foreground text-center mb-4">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Transit Time:</span>
                      <span className="font-medium">{capability.transitTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-medium">{capability.capacity}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium text-sm mb-2">Key Routes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {capability.routes.map((route, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {route}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Port Capabilities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Strategic Port Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging India's major ports for efficient export operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portCapabilities.map((port, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center">
                      <Ship className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{port.port}</h3>
                      <p className="text-sm text-muted-foreground">{port.location}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-medium">{port.capacity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Specialization:</span>
                      <span className="font-medium">{port.specialization}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Export Volume:</span>
                      <Badge variant="secondary" className="text-xs">
                        {port.volume}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Supply Chain Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Why global importers choose Vibha Exim for their logistics needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">On-Time Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  99% on-time delivery rate with real-time tracking
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Strategic Location</h3>
                <p className="text-muted-foreground text-sm">
                  Proximity to major Indian ports and production centers
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Flexible Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Customized packaging and shipping solutions
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Global Network</h3>
                <p className="text-muted-foreground text-sm">
                  Established partnerships with international freight forwarders
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Expand Your Market Reach
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with us to access premium Indian agricultural products with reliable global logistics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Logistics Quote
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              View Port Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalReach;
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin, Truck, Ship, Plane, Clock, CheckCircle, Target, Users, Award } from 'lucide-react';

interface GlobalReachProps {
  currentLang: string;
}

const GlobalReach: React.FC<GlobalReachProps> = ({ currentLang }) => {
  const targetMarkets = [
    {
      region: 'Middle East',
      status: 'Target Market',
      focus: 'Pulses, Spices, Grains',
      description: 'Strategic focus on UAE, Saudi Arabia, and Qatar for premium agricultural exports'
    },
    {
      region: 'South Asia',
      status: 'Expanding Soon',
      focus: 'Rice, Pulses, Herbal Products',
      description: 'Building partnerships in Bangladesh, Sri Lanka, and Nepal'
    },
    {
      region: 'Africa',
      status: 'Future Market',
      focus: 'Grains, Spices, Processed Foods',
      description: 'Exploring opportunities in East African markets'
    }
  ];

  const logisticsCapabilities = [
    {
      mode: 'Sea Freight',
      icon: Ship,
      description: 'Partnerships with shipping agencies for containerized cargo',
      status: 'Established'
    },
    {
      mode: 'Air Freight',
      icon: Plane,
      description: 'Fast delivery for perishable products',
      status: 'In Progress'
    },
    {
      mode: 'Local Transport',
      icon: Truck,
      description: 'Farmer-to-port collection network in progress',
      status: 'Developing'
    }
  ];

  const strategicPorts = [
    {
      port: 'JNPT – Mumbai',
      location: 'Maharashtra',
      specialization: 'Containerized Cargo',
      status: 'Primary Export Gateway'
    },
    {
      port: 'Mundra Port',
      location: 'Gujarat',
      specialization: 'Major Seaport',
      status: 'Strategic Partner'
    },
    {
      port: 'Chennai Port',
      location: 'Tamil Nadu',
      specialization: 'South India Export Hub',
      status: 'Regional Gateway'
    }
  ];

  const expansionPlans = [
    {
      year: '2025',
      target: 'Establish presence in UAE & Bangladesh',
      focus: 'Core product lines and market entry'
    },
    {
      year: '2026',
      target: 'Expand to Sri Lanka & Nepal',
      focus: 'Regional partnerships and distribution'
    },
    {
      year: '2027',
      target: 'Build long-term trade partnerships in Africa',
      focus: 'Sustainable market development'
    }
  ];

  const trustPoints = [
    {
      icon: Award,
      title: 'Government-licensed & DGFT Compliant',
      description: 'Full compliance with Indian export regulations and standards'
    },
    {
      icon: Users,
      title: 'Direct Sourcing from Farmers',
      description: 'Ensuring fair trade and quality control from source to export'
    },
    {
      icon: CheckCircle,
      title: 'Quality Control & Customization',
      description: 'Focus on packaging customization and quality assurance'
    },
    {
      icon: Target,
      title: 'Long-term Partnership Approach',
      description: 'Building sustainable relationships with global importers'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/world.jpg)`
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Expanding Our Reach Beyond Borders
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              At Vibha Global Exim Services, we are committed to connecting Indian farmers with international markets, starting with our initial target regions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                <CheckCircle className="w-4 h-4 mr-2" />
                IEC Registered & RCMC Compliant
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                <Users className="w-4 h-4 mr-2" />
                Trusted Farmer Network in India
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                <Award className="w-4 h-4 mr-2" />
                Government-Approved Exporter
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Target Export Markets */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Our Target Export Markets
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic focus on key regions where we plan to establish strong export partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetMarkets.map((market, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-center mb-2">
                    {market.region}
                  </h3>
                  <Badge 
                    variant={market.status === 'Target Market' ? 'default' : 
                            market.status === 'Expanding Soon' ? 'secondary' : 'outline'}
                    className="mx-auto mb-3 block"
                  >
                    {market.status}
                  </Badge>
                  <p className="text-muted-foreground text-center mb-3">
                    <strong>Key Focus:</strong> {market.focus}
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    {market.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Readiness & Logistics */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Export Readiness & Logistics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building comprehensive logistics capabilities for reliable global delivery
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
                  <Badge 
                    variant={capability.status === 'Established' ? 'default' : 
                            capability.status === 'In Progress' ? 'secondary' : 'outline'}
                    className="mx-auto block"
                  >
                    {capability.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Ports */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Our Export Gateways
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic port partnerships for efficient export operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {strategicPorts.map((port, index) => (
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
                      <span className="text-muted-foreground">Specialization:</span>
                      <span className="font-medium">{port.specialization}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge variant="secondary" className="text-xs">
                        {port.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Our Expansion Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A roadmap for sustainable growth and market expansion
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {expansionPlans.map((plan, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-2xl font-bold text-white">{plan.year}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold mb-2">{plan.target}</h3>
                        <p className="text-muted-foreground">{plan.focus}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Professionalism */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Why Partner with Vibha Global Exim Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building trust through transparency, compliance, and quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalReach;
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, MapPin, Building, Users, TrendingUp } from 'lucide-react';

interface TestimonialsProps {
  currentLang: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      position: 'Import Manager',
      company: 'Gulf Trading LLC',
      location: 'Dubai, UAE',
      rating: 5,
      image: 'AR',
      testimonial: 'Vibha Exim has been our trusted partner for over 3 years. Their consistent quality of pulses and timely deliveries have helped us maintain our reputation in the market. The FSSAI certification gives us complete confidence in their products.',
      products: ['Toor Dal', 'Moong Dal', 'Chana Dal'],
      partnership: '3+ Years',
      volume: '500+ MT/Year'
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      position: 'Procurement Director',
      company: 'Middle East Foods',
      location: 'Riyadh, Saudi Arabia',
      rating: 5,
      image: 'FZ',
      testimonial: 'Outstanding service and premium quality products. Vibha Exim understands our market requirements perfectly. Their basmati rice quality is exceptional and our customers love the authentic taste and aroma.',
      products: ['Basmati Rice', 'Spices', 'Lentils'],
      partnership: '5+ Years',
      volume: '800+ MT/Year'
    },
    {
      id: 3,
      name: 'Mohammad Rahman',
      position: 'Managing Director',
      company: 'Bengal Imports',
      location: 'Dhaka, Bangladesh',
      rating: 5,
      image: 'MR',
      testimonial: 'Reliable supply chain and competitive pricing make Vibha Exim our preferred supplier. Their professional approach and understanding of South Asian market preferences is remarkable.',
      products: ['Rice', 'Wheat', 'Spices'],
      partnership: '4+ Years',
      volume: '1200+ MT/Year'
    },
    {
      id: 4,
      name: 'Raj Patel',
      position: 'Import Specialist',
      company: 'Global Grains Ltd',
      location: 'Kuala Lumpur, Malaysia',
      rating: 5,
      image: 'RP',
      testimonial: 'Vibha Exim\'s commitment to quality and their ability to meet our specific packaging requirements sets them apart. Their customer service team is always responsive and helpful.',
      products: ['Pulses', 'Millets', 'Oil Seeds'],
      partnership: '2+ Years',
      volume: '300+ MT/Year'
    },
    {
      id: 5,
      name: 'Hassan Al-Kuwari',
      position: 'Operations Manager',
      company: 'Qatar Food Distributors',
      location: 'Doha, Qatar',
      rating: 5,
      image: 'HK',
      testimonial: 'The consistency in quality and their proactive communication about shipment schedules has made our operations smooth. Vibha Exim is definitely a partner we can rely on.',
      products: ['Premium Rice', 'Spices'],
      partnership: '3+ Years',
      volume: '400+ MT/Year'
    },
    {
      id: 6,
      name: 'Priya Sharma',
      position: 'Supply Chain Manager',
      company: 'African Markets Corp',
      location: 'Cape Town, South Africa',
      rating: 5,
      image: 'PS',
      testimonial: 'Excellent packaging and documentation. Their products arrive in perfect condition even after long sea voyages. The quality certificates are always accurate and complete.',
      products: ['Turmeric', 'Coriander', 'Cumin'],
      partnership: '2+ Years',
      volume: '200+ MT/Year'
    }
  ];

  const clientLogos = [
    { name: 'Gulf Trading LLC', country: 'UAE', logo: 'GT' },
    { name: 'Middle East Foods', country: 'KSA', logo: 'MEF' },
    { name: 'Bengal Imports', country: 'BD', logo: 'BI' },
    { name: 'Global Grains Ltd', country: 'MY', logo: 'GG' },
    { name: 'Qatar Food Distributors', country: 'QA', logo: 'QFD' },
    { name: 'African Markets Corp', country: 'ZA', logo: 'AMC' },
    { name: 'Asian Spice Co', country: 'SG', logo: 'ASC' },
    { name: 'Premium Foods Inc', country: 'AE', logo: 'PFI' }
  ];

  const successStats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '15+', label: 'Countries Served', icon: MapPin },
    { number: '98%', label: 'Client Retention', icon: TrendingUp },
    { number: '99%', label: 'On-time Delivery', icon: Building }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Hear what our global partners say about their experience with Vibha Exim
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-2xl font-bold ml-4">4.9/5</span>
            </div>
            <p className="text-lg opacity-80">Average rating from 500+ global partners</p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {successStats.map((stat, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from importers who trust Vibha Exim for their agricultural product needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-secondary font-medium">{testimonial.position}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative mb-6 flex-1">
                    <Quote className="h-8 w-8 text-primary opacity-20 absolute -top-2 -left-1" />
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Partnership:</span>
                      <Badge variant="secondary">{testimonial.partnership}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Annual Volume:</span>
                      <Badge variant="outline">{testimonial.volume}</Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm block mb-2">Main Products:</span>
                      <div className="flex flex-wrap gap-1">
                        {testimonial.products.map((product, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Trusted by Leading Importers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the growing family of satisfied partners across the globe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">{client.logo}</span>
                  </div>
                  <h3 className="font-medium text-sm mb-1">{client.name}</h3>
                  <Badge variant="outline" className="text-xs">{client.country}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Partnership Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How Vibha Exim has helped businesses grow and succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">Market Expansion Success</h3>
                    <p className="text-muted-foreground">Gulf Trading LLC - Dubai</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "With Vibha Exim's consistent supply and quality products, we expanded from serving 
                  50 retailers to over 200 across the UAE. Our business grew by 300% in just 2 years."
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-primary text-lg">300%</div>
                    <div className="text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary text-lg">200+</div>
                    <div className="text-muted-foreground">Retailers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary text-lg">2</div>
                    <div className="text-muted-foreground">Years</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">Quality Recognition</h3>
                    <p className="text-muted-foreground">Middle East Foods - Riyadh</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Vibha Exim's premium basmati rice helped us win the 'Best Rice Importer Award' 
                  in Saudi Arabia. Their quality consistency is unmatched in the industry."
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-primary text-lg">1st</div>
                    <div className="text-muted-foreground">Award</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary text-lg">5+</div>
                    <div className="text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary text-lg">800+</div>
                    <div className="text-muted-foreground">MT/Year</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Become part of our growing family of satisfied partners. Experience the Vibha Exim difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Partnership
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Request References
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
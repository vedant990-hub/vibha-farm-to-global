import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Eye, Heart, Target, Shield, Users, Globe, Truck } from 'lucide-react';

interface AboutProps {
  currentLang: string;
}

const About: React.FC<AboutProps> = ({ currentLang }) => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              About Vibha Global Exim Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Trusted exporter delivering high-quality Indian agricultural produce to global markets. Founded by a registered farmer, we bring authenticity, freshness, and competitive pricing — straight from Indian farms to international buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Vibha Global Exim Services is a trusted exporter of agricultural products based in Mumbai, Maharashtra, India. Founded by Mr. Vishnudas V. Pawar, a registered farmer (ID: 44811157678), we are committed to ethical trade, direct farm sourcing, and long-term global relationships rooted in quality.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We deliver pulses, spices, grains, and cereals — including Pigeon Peas (Toor), Urad Dal, Moong Dal, Turmeric, Red Chilli, Cumin, Wheat, and Rice — to international buyers with a focus on authenticity and freshness.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our IEC Code: AMNPP7565N. We stand for transparent pricing, timely delivery, and quality control meeting international standards.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-primary rounded-2xl p-8 shadow-strong">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-lg opacity-90 mb-6">Years of Excellence</div>
                    
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-lg opacity-90 mb-6">Global Partners</div>
                    
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-lg opacity-90">Product Varieties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower farmers by bridging the gap between Indian agriculture and global markets, ensuring quality exports, ethical trade, and sustainable farming livelihoods.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized globally for authentic, high-quality Indian agricultural exports, and to foster sustainable, long-term relationships with buyers and farmers alike.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground text-sm">
                  Direct sourcing from farms, transparent pricing, and quality control meeting international standards.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Trust & Integrity</h3>
                <p className="text-muted-foreground text-sm">
                  Ethical trade and long-term global relationships rooted in quality.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Customer Focus</h3>
                <p className="text-muted-foreground text-sm">
                  Custom packaging options and timely delivery for every client.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Global Mindset</h3>
                <p className="text-muted-foreground text-sm">
                  Bringing Indian produce to international markets with authenticity and freshness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is validated by international standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">FSSAI Certified</h3>
                <p className="text-muted-foreground">
                  Food Safety and Standards Authority of India certification ensuring highest food safety standards for all our exports.
                </p>
                <Badge variant="secondary" className="mt-4">IEC Code: AMNPP7565N</Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">ISO 22000:2018</h3>
                <p className="text-muted-foreground">
                  International standard for food safety management systems ensuring global quality compliance
                </p>
                <Badge variant="secondary" className="mt-4">Certified Since 2018</Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">HACCP Compliant</h3>
                <p className="text-muted-foreground">
                  Hazard Analysis Critical Control Points system for comprehensive food safety management
                </p>
                <Badge variant="secondary" className="mt-4">Verified 2024</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vedanta Healthcare Strategic Venture Section */}
      <section style={{ background: '#f4f8fd' }} className="w-full py-20 flex flex-col items-center justify-center">
        <div style={{ maxWidth: 700 }} className="w-full mx-auto px-4 text-center">
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.2rem', color: '#17416d', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
            Vedanta Healthcare – <span style={{ color: '#3b82f6' }}>A Mission Beyond Business</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#334155', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Founded by Mr. Vishnudas V. Pawar, Vedanta Healthcare is a mission-led initiative dedicated to delivering affordable, compassionate medical care across India.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {/* Card 1: Founded in 2012 */}
            <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(59,130,246,0.08)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 16, color: '#2563eb' }}>📅</div>
              <div style={{ fontWeight: 700, color: '#17416d', fontSize: '1.15rem', marginBottom: 6, fontFamily: 'Inter, sans-serif' }}>Founded in 2012</div>
              <div style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>
                Over a decade of delivering healthcare with compassion and consistency across India.
              </div>
            </div>
            {/* Card 2: Trusted by Hospitals Nationwide */}
            <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(59,130,246,0.08)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 16, color: '#2563eb' }}>🏥</div>
              <div style={{ fontWeight: 700, color: '#17416d', fontSize: '1.15rem', marginBottom: 6, fontFamily: 'Inter, sans-serif' }}>Trusted by Hospitals Nationwide</div>
              <div style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>
                Recognized by top medical institutions for quality service and ethical commitment.
              </div>
            </div>
          </div>
          <a
            href="https://vedantahealthcare.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#2563eb',
              color: '#fff',
              fontWeight: 600,
              borderRadius: 9999,
              padding: '0.85rem 2.5rem',
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(59,130,246,0.10)',
              letterSpacing: '0.01em',
              transition: 'background 0.18s, box-shadow 0.18s, transform 0.18s',
              marginTop: 8,
            }}
            onMouseOver={e => { e.currentTarget.style.background = '#17416d'; e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'; }}
            onMouseOut={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'none'; }}
          >
            Discover Vedanta Healthcare
          </a>
        </div>
        <style>{`
          @media (max-width: 700px) {
            .vh-feature-row { flex-direction: column !important; }
            .vh-feature-box { min-width: 0 !important; width: 100% !important; margin-bottom: 1.5rem; }
          }
        `}</style>
      </section>
    </div>
  );
};

export default About;
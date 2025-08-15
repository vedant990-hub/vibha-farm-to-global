import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Eye, Heart, Target, Shield, Users, Globe, Truck } from 'lucide-react';

interface AboutProps {
  currentLang: string;
}

const About: React.FC<AboutProps> = ({ currentLang }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/flowerbg.jpg)`
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              About Vibha Global Exim Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 px-4 sm:px-0">
              Trusted exporter delivering high-quality Indian agricultural produce to global markets. Founded by a registered farmer, we bring authenticity, freshness, and competitive pricing — straight from Indian farms to international buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Our Story
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  Vibha Global Exim Services is a trusted exporter of agricultural products based in Mumbai, Maharashtra, India. Founded by Mr. Vishnudas V. Pawar, a registered farmer (ID: 44811157678), we are committed to ethical trade, direct farm sourcing, and long-term global relationships rooted in quality.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  We deliver pulses, spices, grains, and cereals — including Pigeon Peas (Toor), Urad Dal, Moong Dal, Turmeric, Red Chilli, Cumin, Wheat, and Rice — to international buyers with a focus on authenticity and freshness.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Our IEC Code: AMNPP7565N. We stand for transparent pricing, timely delivery, and quality control meeting international standards.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-primary rounded-2xl p-6 sm:p-8 shadow-strong">
                  <div className="text-white text-center">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">15+</div>
                    <div className="text-base sm:text-lg opacity-90 mb-4 sm:mb-6">Years of Excellence</div>
                    
                    <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
                    <div className="text-base sm:text-lg opacity-90 mb-4 sm:mb-6">Global Partners</div>
                    
                    <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
                    <div className="text-base sm:text-lg opacity-90">Product Varieties</div>
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
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To empower farmers by bridging the gap between Indian agriculture and global markets, ensuring quality exports, ethical trade, and sustainable farming livelihoods.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
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
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="hover-lift text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground text-sm">
                  Direct sourcing from farms, transparent pricing, and quality control meeting international standards.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="relative py-20 bg-muted overflow-hidden">
        {/* Background Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/src/assets/vibha_logo.jpg" 
            alt="Vibha Global Exim Services" 
            className="w-full max-w-4xl sm:max-w-6xl h-auto opacity-5 blur-sm transition-all duration-1000 ease-out transform hover:scale-105"
            style={{
              filter: 'grayscale(100%) brightness(1.2)',
            }}
          />
        </div>
        
        {/* Content Layer */}
        <div className="relative container mx-auto px-4 z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Certifications & Standards
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Our commitment to quality is validated by international standards
            </p>
          </div>

          {/* High-resolution certification badges */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 md:mb-16">
            <div className="inline-flex flex-col items-center gap-4">
              {/* FSSAI Badge */}
              <div className="relative">
                <div
                  className="relative"
                  style={{
                    width: 160,
                    height: 160,
                    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))',
                  }}
                  aria-hidden
                >
                  {/* Outer ring */}
                  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[200px] sm:h-[200px]">
                    <defs>
                      <linearGradient id="ring-fssai" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2563EB" />
                        <stop offset="1" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="78" stroke="url(#ring-fssai)" strokeWidth="4" className="sm:cx-[100] sm:cy-[100] sm:r-[98]" />
                  </svg>

                  {/* Inner circle (white) */}
                  <div className="absolute inset-2 rounded-full bg-white border border-gray-200" />

                  {/* Centered FSSAI logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/src/assets/fssai_logo.png"
                      alt="FSSAI"
                      className="object-contain"
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mt-6">
                  <div className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-primary leading-tight">
                    FSSAI Certified
                  </div>
                </div>

                {/* Tag */}
                <div className="px-3 py-1 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium mt-4 mx-auto w-fit" style={{ backgroundColor: '#16A34A' }}>
                  IEC Code: AMNPP7565N
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-center gap-4">
              {/* APEDA Badge */}
              <div className="relative">
                <div
                  className="relative"
                  style={{
                    width: 200,
                    height: 200,
                    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))',
                  }}
                  aria-hidden
                >
                  {/* Outer ring */}
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="ring-apeda" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2563EB" />
                        <stop offset="1" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="98" stroke="url(#ring-apeda)" strokeWidth="4" />
                  </svg>

                  {/* Inner circle (white) */}
                  <div className="absolute inset-2 rounded-full bg-white border border-gray-200" />

                  {/* Centered APEDA logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/src/assets/apeda_new_logo.jpg"
                      alt="APEDA"
                      className="object-contain"
                      style={{ width: 130, height: 130 }}
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mt-6">
                  <div className="font-heading font-bold text-2xl text-primary leading-tight">
                    APEDA Certified
                  </div>
                </div>

                {/* Tag */}
                <div className="px-4 py-2 rounded-full text-white text-sm font-medium mt-4 mx-auto w-fit" style={{ backgroundColor: '#16A34A' }}>
                  APEDA Registered
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom CSS for responsive background logo */}
        <style jsx>{`
          @media (min-width: 640px) {
            .relative div[style*="width: 160"] {
              width: 200px !important;
              height: 200px !important;
            }
            .relative img[style*="width: 100"] {
              width: 130px !important;
              height: 130px !important;
            }
          }
          @media (max-width: 768px) {
            .absolute img {
              max-width: 90vw;
              height: auto;
            }
          }
          
          @media (max-width: 480px) {
            .absolute img {
              max-width: 85vw;
              height: auto;
            }
          }
        `}</style>
      </section>

      {/* Vedanta Healthcare Strategic Venture Section */}
      <section style={{ background: '#f4f8fd' }} className="w-full py-20 flex flex-col items-center justify-center">
        <div style={{ maxWidth: 700 }} className="w-full mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#17416d] mb-4 sm:mb-6">
            Vedanta Healthcare – <span style={{ color: 'green' }}>A Mission Beyond Business</span>
          </h2>
          <p className="text-base sm:text-lg text-[#334155] mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            Founded by Mr. Vishnudas V. Pawar, Vedanta Healthcare is a mission-led initiative dedicated to delivering affordable, compassionate medical care across India.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center mb-6 sm:mb-8 md:mb-10">
            {/* Card 1: Founded in 2012 */}
            <div className="flex-1 min-w-[240px] sm:min-w-[260px] bg-white rounded-2xl shadow-soft p-6 sm:p-8 flex flex-col items-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#2563eb]">📅</div>
              <div className="font-bold text-[#17416d] text-base sm:text-lg mb-2 sm:mb-3">Founded in 2012</div>
              <div className="text-[#64748b] text-sm sm:text-base leading-relaxed text-center">
                Over a decade of delivering healthcare with compassion and consistency across India.
              </div>
            </div>
            {/* Card 2: Trusted by Hospitals Nationwide */}
            <div className="flex-1 min-w-[240px] sm:min-w-[260px] bg-white rounded-2xl shadow-soft p-6 sm:p-8 flex flex-col items-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#2563eb]">🏥</div>
              <div className="font-bold text-[#17416d] text-base sm:text-lg mb-2 sm:mb-3">Trusted by Hospitals Nationwide</div>
              <div className="text-[#64748b] text-sm sm:text-base leading-relaxed text-center">
                Recognized by top medical institutions for quality service and ethical commitment.
              </div>
            </div>
          </div>
          <a
            href="https://vedantahealthcare.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[green] text-white font-semibold rounded-full px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg shadow-soft hover:bg-[#17416d] hover:shadow-medium transition-all duration-200 hover:scale-105"
          >
            Discover Vedanta Healthcare
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
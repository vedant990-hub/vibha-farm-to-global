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
              About Vibha Exim
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Leading the way in premium agricultural exports with tradition, quality, and global vision
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
                  Founded with a vision to bridge the gap between Indian agricultural excellence and global markets, 
                  Vibha Exim has emerged as a trusted name in premium exports. We began our journey with a simple 
                  belief: quality speaks louder than words.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Today, we work directly with farmers across India, ensuring fair trade practices while maintaining 
                  the highest standards of quality. Our products reach tables in over 15 countries, carrying the 
                  authentic taste and nutrition of Indian agriculture.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every grain, pulse, and spice we export is a testament to our commitment to excellence and our 
                  responsibility towards both farmers and consumers worldwide.
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
                  To be the bridge that connects premium Indian agricultural products with global markets, 
                  ensuring fair trade for farmers and superior quality for consumers. We strive to maintain 
                  the highest standards of quality, sustainability, and customer satisfaction in every shipment.
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
                  To become the world's most trusted name in Indian agricultural exports, known for quality, 
                  reliability, and innovation. We envision a future where Vibha Exim products are synonymous 
                  with excellence in kitchens around the globe.
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
                  Uncompromising commitment to the highest standards in every product
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
                  Building lasting relationships through honesty and transparency
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
                  Putting our partners' success at the center of everything we do
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
                  Thinking globally while staying rooted in Indian traditions
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
                  Food Safety and Standards Authority of India certification ensuring highest food safety standards
                </p>
                <Badge variant="secondary" className="mt-4">License No: 12345678901234</Badge>
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

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals driving our vision forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">RS</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-1">Rajesh Sharma</h3>
                <p className="text-secondary font-medium mb-3">Chief Executive Officer</p>
                <p className="text-muted-foreground text-sm">
                  20+ years in agricultural exports, leading strategic growth and international partnerships
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">PK</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-1">Priya Kumar</h3>
                <p className="text-secondary font-medium mb-3">Quality Assurance Director</p>
                <p className="text-muted-foreground text-sm">
                  Expert in food safety standards and quality control with international certifications
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">AM</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-1">Amit Mehta</h3>
                <p className="text-secondary font-medium mb-3">Operations Manager</p>
                <p className="text-muted-foreground text-sm">
                  Specialist in supply chain optimization and logistics coordination for global markets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
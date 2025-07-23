import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Al-Rashid Trading LLC',
      location: 'Dubai, UAE',
      rating: 5,
      text: 'Vibha Exim has been our trusted partner for over 5 years. Their consistent quality and reliable delivery have helped us build a strong customer base in the UAE market.',
      flag: '🇦🇪'
    },
    {
      name: 'Mohammad Khan',
      company: 'Khan Import & Export',
      location: 'Riyadh, Saudi Arabia',
      rating: 5,
      text: 'Excellent quality products and professional service. The dal and spices we import from Vibha Exim are always fresh and meet our high standards.',
      flag: '🇸🇦'
    },
    {
      name: 'Sarah Qureshi',
      company: 'Doha Foods Distribution',
      location: 'Doha, Qatar',
      rating: 5,
      text: 'Outstanding logistics and customer support. They understand our market requirements and always deliver exactly what we need, when we need it.',
      flag: '🇶🇦'
    },
    {
      name: 'Rajesh Patel',
      company: 'Patel Brothers International',
      location: 'Singapore',
      rating: 5,
      text: 'The quality of pulses and grains from Vibha Exim is exceptional. Our customers in Southeast Asia appreciate the authentic taste and freshness.',
      flag: '🇸🇬'
    },
    {
      name: 'Fatima Al-Zahra',
      company: 'Al-Zahra Global Trading',
      location: 'Kuwait City, Kuwait',
      rating: 5,
      text: 'Competitive pricing combined with premium quality makes Vibha Exim our preferred supplier. Their team is always responsive and professional.',
      flag: '🇰🇼'
    },
    {
      name: 'Hassan Mahmood',
      company: 'Mahmood Trading Company',
      location: 'Muscat, Oman',
      rating: 5,
      text: 'Reliable partner for our spice and dal requirements. The packaging is excellent and ensures product freshness during long shipments.',
      flag: '🇴🇲'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Partners
            <span className="text-primary block">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building lasting relationships through quality products and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-accent" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                      {testimonial.flag}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Join Our Growing Network
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to experience the Vibha Exim difference? 
              Contact us today to discuss your import requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started Today
              </a>
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
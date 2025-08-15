import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/test.jpg)`
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Client Testimonials
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 md:mb-8 px-4 sm:px-0">
              Hear from our satisfied partners across the globe
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Card className="max-w-xl w-full mx-auto shadow-soft border-border bg-card">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-4 text-accent">
                  <Quote className="w-10 h-10 mx-auto" strokeWidth={1.5} />
                </div>
                <CardTitle className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                  We're New — But Passionate
                </CardTitle>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 font-body">
                  "As a fresh face in global agricultural exports, we bring unmatched energy, integrity, and a genuine commitment to your success. Every client is a partner, and every shipment is a promise. Trust us to deliver quality, transparency, and care—right from the very start."
                </p>
                <div className="text-sm text-accent-foreground opacity-80 italic">
                  Early partners help us grow. We're here to earn your trust.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
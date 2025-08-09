import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
      <Card className="max-w-xl w-full mx-auto shadow-soft border-border bg-card">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <div className="mb-4 text-accent">
            <Quote className="w-10 h-10 mx-auto" strokeWidth={1.5} />
          </div>
          <CardTitle className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            We’re New — But Passionate
          </CardTitle>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 font-body">
            "As a fresh face in global agricultural exports, we bring unmatched energy, integrity, and a genuine commitment to your success. Every client is a partner, and every shipment is a promise. Trust us to deliver quality, transparency, and care—right from the very start."
          </p>
          <div className="text-sm text-accent-foreground opacity-80 italic">
            Early partners help us grow. We’re here to earn your trust.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Testimonials;
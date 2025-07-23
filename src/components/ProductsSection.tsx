import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import productsImage from '@/assets/products-showcase.jpg';

const ProductsSection: React.FC = () => {
  const productCategories = [
    {
      name: 'Dal & Pulses',
      items: ['Toor Dal', 'Moong Dal', 'Chana Dal', 'Urad Dal', 'Masoor Dal', 'Arhar Dal'],
      description: 'Premium quality lentils and pulses'
    },
    {
      name: 'Grains & Cereals',
      items: ['Basmati Rice', 'Wheat', 'Millet', 'Quinoa', 'Barley', 'Chickpeas'],
      description: 'High-grade grains and cereals'
    },
    {
      name: 'Spices',
      items: ['Turmeric', 'Cumin', 'Coriander', 'Red Chili', 'Black Pepper', 'Cardamom'],
      description: 'Authentic Indian spices'
    },
    {
      name: 'Specialty Items',
      items: ['Cashews', 'Almonds', 'Sesame Seeds', 'Mustard Seeds', 'Fenugreek', 'Fennel'],
      description: 'Premium nuts and specialty products'
    }
  ];

  const qualityFeatures = [
    'Hand-picked from premium farms',
    'Multiple quality checks',
    'Moisture controlled packaging',
    'International shipping standards',
    'Trace-back guarantee',
    'Competitive wholesale pricing'
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Our Premium Products
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Finest Quality
            <span className="text-secondary block">Agricultural Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the fertile fields of India to your warehouse, we ensure every product 
            meets the highest standards of quality and authenticity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div 
            className="rounded-2xl shadow-strong h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${productsImage})` }}
          >
            <div className="h-full bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
          
          <div>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-6">
              Quality You Can Trust
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-accent/10 rounded-lg p-6">
              <h4 className="font-semibold text-accent-foreground mb-2">Bulk Order Benefits</h4>
              <p className="text-sm text-muted-foreground">
                Special pricing for wholesale quantities, flexible payment terms, 
                and dedicated account management for regular importers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Card key={index} className="hover-lift border-border shadow-soft">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
                
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex} 
                      variant="secondary" 
                      className="mr-2 mb-2"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Custom Requirements?
            </h3>
            <p className="text-muted-foreground mb-4">
              We can source specific varieties and grades based on your market requirements.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
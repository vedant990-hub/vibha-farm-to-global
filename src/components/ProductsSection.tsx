import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Send, Leaf, Star } from 'lucide-react';
import productsImage from '@/assets/products-showcase.jpg';
import { Link } from 'react-router-dom';

const ProductsSection: React.FC = () => {
  const herbalProducts = [
    {
      name: 'Moringa Powder',
      description: 'A nutrient-rich superfood powder made from dried Moringa leaves, known for its high antioxidant and anti-inflammatory properties.',
      benefits: ['High in antioxidants', 'Anti-inflammatory', 'Rich in vitamins'],
      exportQuality: true,
      enquiryId: 'moringa-powder'
    },
    {
      name: 'Turmeric Powder',
      description: 'Bright yellow spice with powerful curcumin content, widely used for its anti-inflammatory and immunity-boosting benefits.',
      benefits: ['High curcumin content', 'Anti-inflammatory', 'Immunity booster'],
      exportQuality: true,
      enquiryId: 'turmeric-powder'
    },
    {
      name: 'Ashwagandha Root',
      description: 'An adaptogenic herb traditionally used to reduce stress, boost energy, and improve overall well-being.',
      benefits: ['Adaptogenic', 'Stress reduction', 'Energy booster'],
      exportQuality: true,
      enquiryId: 'ashwagandha-root'
    },
    {
      name: 'Giloy (Tinospora cordifolia)',
      description: 'Known for enhancing immunity and detoxifying the body, widely used in Ayurvedic medicine.',
      benefits: ['Immunity enhancer', 'Detoxifying', 'Ayurvedic'],
      exportQuality: true,
      enquiryId: 'giloy'
    },
    {
      name: 'Tulsi (Holy Basil) Leaves',
      description: 'Sacred herb with antimicrobial and adaptogenic qualities, promoting respiratory and immune health.',
      benefits: ['Antimicrobial', 'Respiratory health', 'Sacred herb'],
      exportQuality: true,
      enquiryId: 'tulsi-leaves'
    },
    {
      name: 'Amla (Indian Gooseberry) Powder',
      description: 'Rich in Vitamin C, supports digestion, skin health, and strengthens the immune system.',
      benefits: ['High Vitamin C', 'Digestive health', 'Skin health'],
      exportQuality: true,
      enquiryId: 'amla-powder'
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
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            <Leaf className="inline w-4 h-4 mr-2" />
            Natural & Organic
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium
            <span className="text-primary block">Herbal Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the power of nature with our premium herbal and Ayurvedic products, 
            sourced from the finest farms and processed with traditional wisdom.
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
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h4 className="font-semibold text-secondary-foreground mb-2">Export Quality Standards</h4>
              <p className="text-sm text-muted-foreground">
                All products meet international export standards with proper certification, 
                testing, and packaging for global markets.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {herbalProducts.map((product, index) => (
            <Card key={index} className="hover-lift border-border shadow-soft bg-gradient-to-br from-secondary to-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  {product.exportQuality && (
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground border-border mb-3">
                      <Star className="w-3 h-3 mr-1" />
                      Export Quality
                    </Badge>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <Badge 
                      key={benefitIndex} 
                      variant="outline" 
                      className="mr-2 mb-2 border-border text-primary bg-secondary"
                    >
                      {benefit}
                    </Badge>
                  ))}
                </div>

                <Button 
                  asChild
                  className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
                >
                  <Link to={`/enquiry/${product.enquiryId}`}>
                    <Send className="h-4 w-4 mr-2" />
                    Request Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-secondary rounded-lg p-8 border border-border">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Custom Herbal Requirements?
            </h3>
            <p className="text-muted-foreground mb-4">
              We can source specific herbal varieties and create custom formulations based on your market requirements.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-hover transition-colors"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
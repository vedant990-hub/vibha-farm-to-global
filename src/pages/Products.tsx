import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Star, Award, Truck, Shield } from 'lucide-react';
import productsImage from '@/assets/products-showcase.jpg';

interface ProductsProps {
  currentLang: string;
}

const Products: React.FC<ProductsProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState('pulses');

  const productCategories = {
    pulses: {
      name: 'Pulses & Lentils',
      icon: '🫘',
      description: 'Premium quality pulses rich in protein and nutrients',
      products: [
        {
          name: 'Toor Dal (Pigeon Peas)',
          varieties: ['Organic', 'Conventional', 'Split', 'Whole'],
          origin: 'Maharashtra, Karnataka',
          protein: '22-24%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000']
        },
        {
          name: 'Moong Dal (Green Gram)',
          varieties: ['Whole', 'Split', 'Husked'],
          origin: 'Rajasthan, Madhya Pradesh',
          protein: '24-26%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000', 'Organic']
        },
        {
          name: 'Chana Dal (Bengal Gram)',
          varieties: ['Desi', 'Kabuli', 'Split'],
          origin: 'Madhya Pradesh, Maharashtra',
          protein: '20-22%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000']
        },
        {
          name: 'Masoor Dal (Red Lentils)',
          varieties: ['Whole', 'Split', 'Football'],
          origin: 'Uttar Pradesh, Bihar',
          protein: '26-28%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000']
        }
      ]
    },
    grains: {
      name: 'Grains & Cereals',
      icon: '🌾',
      description: 'High-quality grains for global consumption',
      products: [
        {
          name: 'Basmati Rice',
          varieties: ['1121', 'Pusa', 'Traditional'],
          origin: 'Punjab, Haryana',
          grainLength: '7-8mm',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000', 'GI Tag']
        },
        {
          name: 'Non-Basmati Rice',
          varieties: ['IR64', 'Sona Masuri', 'PR11'],
          origin: 'Andhra Pradesh, Telangana',
          grainLength: '5-6mm',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000']
        },
        {
          name: 'Wheat',
          varieties: ['Durum', 'Hard Red', 'Soft White'],
          origin: 'Punjab, Uttar Pradesh',
          protein: '11-14%',
          packaging: '50kg Bags, Bulk',
          certifications: ['FSSAI', 'ISO 22000']
        },
        {
          name: 'Millets',
          varieties: ['Pearl', 'Finger', 'Foxtail'],
          origin: 'Karnataka, Maharashtra',
          fiber: 'High',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'Organic']
        }
      ]
    },
    spices: {
      name: 'Spices & Seasonings',
      icon: '🌶️',
      description: 'Aromatic spices with authentic Indian flavors',
      products: [
        {
          name: 'Turmeric Powder',
          varieties: ['Erode', 'Salem', 'Nizamabad'],
          origin: 'Tamil Nadu, Andhra Pradesh',
          curcumin: '3-5%',
          packaging: '25kg Bags, Small Packs',
          certifications: ['FSSAI', 'ISO 22000', 'Organic']
        },
        {
          name: 'Red Chili Powder',
          varieties: ['Guntur', 'Kashmir', 'Byadgi'],
          origin: 'Andhra Pradesh, Karnataka',
          scoville: '2000-8000 SHU',
          packaging: '25kg Bags, Small Packs',
          certifications: ['FSSAI', 'ISO 22000']
        },
        {
          name: 'Coriander Seeds',
          varieties: ['Eagle', 'Scooter', 'CS-6'],
          origin: 'Gujarat, Rajasthan',
          oilContent: '0.8-1.0%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000']
        },
        {
          name: 'Cumin Seeds',
          varieties: ['Gujarat', 'Rajasthan', 'Machine Clean'],
          origin: 'Gujarat, Rajasthan',
          oilContent: '2-4%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000']
        }
      ]
    },
    oilseeds: {
      name: 'Oil Seeds',
      icon: '🌻',
      description: 'Premium oil seeds for various industrial applications',
      products: [
        {
          name: 'Sesame Seeds',
          varieties: ['Natural', 'Hulled', 'Black'],
          origin: 'Gujarat, Rajasthan',
          oilContent: '48-50%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000']
        },
        {
          name: 'Groundnuts',
          varieties: ['Bold', 'Java', 'Red Skin'],
          origin: 'Gujarat, Andhra Pradesh',
          oilContent: '45-48%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000']
        },
        {
          name: 'Sunflower Seeds',
          varieties: ['Confectionery', 'Oil Type'],
          origin: 'Karnataka, Andhra Pradesh',
          oilContent: '40-45%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000']
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${productsImage})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Premium Export Products
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              From the finest Indian farms to your global markets - quality guaranteed
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                50+ Product Varieties
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                FSSAI Certified
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-4 py-2 text-lg">
                ISO 22000:2018
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of premium agricultural products
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {Object.entries(productCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key} className="text-sm font-medium">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(productCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="mb-8 text-center">
                  <h3 className="font-heading text-3xl font-bold text-primary mb-4">
                    {category.name}
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.products.map((product, index) => (
                    <Card key={index} className="hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-heading text-xl font-semibold text-primary mb-2">
                              {product.name}
                            </h4>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.varieties.map((variety, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {variety}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                            <Package className="h-6 w-6 text-white" />
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Origin:</span>
                            <span className="font-medium">{product.origin}</span>
                          </div>
                          {product.protein && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Protein:</span>
                              <span className="font-medium">{product.protein}</span>
                            </div>
                          )}
                          {product.grainLength && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Grain Length:</span>
                              <span className="font-medium">{product.grainLength}</span>
                            </div>
                          )}
                          {product.curcumin && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Curcumin:</span>
                              <span className="font-medium">{product.curcumin}</span>
                            </div>
                          )}
                          {product.oilContent && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Oil Content:</span>
                              <span className="font-medium">{product.oilContent}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Packaging:</span>
                            <span className="font-medium">{product.packaging}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex gap-1">
                            {product.certifications.map((cert, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                <Award className="h-3 w-3 mr-1" />
                                {cert}
                              </Badge>
                            ))}
                          </div>
                          <Button size="sm" className="bg-gradient-saffron hover:bg-secondary-hover">
                            Get Quote
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every product undergoes rigorous quality checks to ensure excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Source Verification</h3>
                <p className="text-muted-foreground">
                  Direct partnerships with verified farmers and rigorous source authentication
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Laboratory Testing</h3>
                <p className="text-muted-foreground">
                  Advanced testing for purity, moisture content, and nutritional values
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Safe Packaging</h3>
                <p className="text-muted-foreground">
                  Food-grade packaging with proper labeling and traceability codes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get competitive quotes for all our premium products with flexible packaging and delivery options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Request Product Catalog
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
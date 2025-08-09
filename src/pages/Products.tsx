import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Star, Award, Truck, Shield, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import productsImage from '@/assets/products-showcase.jpg';
import moringaImage from '@/assets/moringa_powder.jpg';
import toorDalImage from '@/assets/toor_dal.jpg';
import moongDalImage from '@/assets/Moong_dal.webp';
import chanaDalImage from '@/assets/Chana_Dal.webp';
import masoorDalImage from '@/assets/masoor_dal.jpg';

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
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'toor-dal'
        },
        {
          name: 'Moong Dal (Green Gram)',
          varieties: ['Whole', 'Split', 'Husked'],
          origin: 'Rajasthan, Madhya Pradesh',
          protein: '24-26%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000', 'Organic'],
          enquiryId: 'moong-dal'
        },
        {
          name: 'Chana Dal (Bengal Gram)',
          varieties: ['Desi', 'Kabuli', 'Split'],
          origin: 'Madhya Pradesh, Maharashtra',
          protein: '20-22%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'chana-dal'
        },
        {
          name: 'Masoor Dal (Red Lentils)',
          varieties: ['Whole', 'Split', 'Football'],
          origin: 'Uttar Pradesh, Bihar',
          protein: '26-28%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'masoor-dal'
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
          certifications: ['FSSAI', 'ISO 22000', 'GI Tag'],
          enquiryId: 'basmati-rice'
        },
        {
          name: 'Non-Basmati Rice',
          varieties: ['IR64', 'Sona Masuri', 'PR11'],
          origin: 'Andhra Pradesh, Telangana',
          grainLength: '5-6mm',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'non-basmati-rice'
        },
        {
          name: 'Wheat',
          varieties: ['Durum', 'Hard Red', 'Soft White'],
          origin: 'Punjab, Uttar Pradesh',
          protein: '11-14%',
          packaging: '50kg Bags, Bulk',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'wheat'
        },
        {
          name: 'Millets',
          varieties: ['Pearl', 'Finger', 'Foxtail'],
          origin: 'Karnataka, Maharashtra',
          fiber: 'High',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'Organic'],
          enquiryId: 'millets'
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
          varieties: ['Alleppey', 'Madras', 'Organic'],
          origin: 'Tamil Nadu, Andhra Pradesh',
          curcumin: '2.5-5%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'turmeric'
        },
        {
          name: 'Red Chili Powder',
          varieties: ['Kashmiri', 'Byadgi', 'Guntur'],
          origin: 'Andhra Pradesh, Karnataka',
          heatLevel: 'Medium-Hot',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'red-chili'
        },
        {
          name: 'Cumin Seeds',
          varieties: ['Whole', 'Ground', 'Organic'],
          origin: 'Gujarat, Rajasthan',
          oilContent: '2-4%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'cumin'
        },
        {
          name: 'Coriander Seeds',
          varieties: ['Whole', 'Ground', 'Organic'],
          origin: 'Rajasthan, Madhya Pradesh',
          oilContent: '0.3-1%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'coriander'
        }
      ]
    },
    herbal: {
      name: 'Herbal Products',
      icon: '🌿',
      description: 'Premium herbal and Ayurvedic products for health and wellness',
      products: [
        {
          name: 'Moringa Powder',
          varieties: ['Organic', 'Conventional', 'Premium Grade'],
          origin: 'Tamil Nadu, Karnataka',
          description: 'Nutrient-rich herbal powder made from dried moringa leaves, ideal for health, wellness, and nutrition export markets.',
          benefits: 'High in antioxidants, Anti-inflammatory, Rich in vitamins',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000', 'Organic'],
          enquiryId: 'moringa-powder'
        },
        {
          name: 'Turmeric Powder',
          varieties: ['Alleppey', 'Madras', 'Organic', 'High Curcumin'],
          origin: 'Tamil Nadu, Andhra Pradesh',
          benefits: 'High curcumin content, Anti-inflammatory, Immunity booster',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'turmeric-powder'
        },
        {
          name: 'Ashwagandha Root',
          varieties: ['Whole Root', 'Powder', 'Organic'],
          origin: 'Madhya Pradesh, Rajasthan',
          benefits: 'Adaptogenic, Stress reduction, Energy booster',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000', 'Organic'],
          enquiryId: 'ashwagandha-root'
        },
        {
          name: 'Giloy (Tinospora cordifolia)',
          varieties: ['Stem Powder', 'Whole Plant', 'Organic'],
          origin: 'Uttar Pradesh, Bihar',
          benefits: 'Immunity enhancer, Detoxifying, Ayurvedic',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'giloy'
        },
        {
          name: 'Tulsi (Holy Basil) Leaves',
          varieties: ['Krishna Tulsi', 'Rama Tulsi', 'Vana Tulsi'],
          origin: 'Uttar Pradesh, Maharashtra',
          benefits: 'Antimicrobial, Respiratory health, Sacred herb',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000', 'Organic'],
          enquiryId: 'tulsi-leaves'
        },
        {
          name: 'Amla (Indian Gooseberry) Powder',
          varieties: ['Wild Amla', 'Cultivated', 'Organic'],
          origin: 'Uttar Pradesh, Madhya Pradesh',
          benefits: 'High Vitamin C, Digestive health, Skin health',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'ISO 22000'],
          enquiryId: 'amla-powder'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${productsImage})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Premium Export Products
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-6 md:mb-8 px-4">
              From the finest Indian farms to your global markets - quality guaranteed
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
              <Badge variant="secondary" className="bg-white text-primary px-3 py-2 md:px-4 md:py-2 text-sm md:text-lg">
                50+ Product Varieties
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-3 py-2 md:px-4 md:py-2 text-sm md:text-lg">
                FSSAI Certified
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-3 py-2 md:px-4 md:py-2 text-sm md:text-lg">
                ISO 22000:2018
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Explore our comprehensive range of premium agricultural products
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 md:mb-12 bg-white shadow-soft">
              {Object.entries(productCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key} className="text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  <span className="mr-2">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(productCategories).map(([key, category]) => (
                             <TabsContent key={key} value={key}>
                 <div className="mb-8 md:mb-12 text-center">
                   <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">
                     {category.name}
                   </h3>
                   <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                     {category.description}
                   </p>
                 </div>

                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                   {category.products.map((product, index) => (
                     <Card key={index} className="hover-lift flex flex-col justify-between p-4 rounded-xl shadow-soft min-h-[420px]">
                       <CardContent className="p-0 flex flex-col h-full">
                                                   {/* Product Image Section */}
                          <div className="product-image mb-3">
                            {product.name === 'Moringa Powder' ? (
                              <img 
                                src={moringaImage} 
                                alt="Moringa Powder – Herbal Product for Export" 
                                className="w-full h-[180px] object-cover rounded-lg"
                                loading="lazy"
                              />
                            ) : product.name === 'Toor Dal (Pigeon Peas)' ? (
                              <img 
                                src={toorDalImage} 
                                alt="Toor Dal (Pigeon Peas) – Premium Export Product" 
                                className="w-full h-[180px] object-cover rounded-lg"
                                loading="lazy"
                              />
                            ) : product.name === 'Moong Dal (Green Gram)' ? (
                              <img 
                                src={moongDalImage} 
                                alt="Moong Dal (Green Gram) – Premium Export Product" 
                                className="w-full h-[180px] object-cover rounded-lg"
                                loading="lazy"
                              />
                            ) : product.name === 'Chana Dal (Bengal Gram)' ? (
                              <img 
                                src={chanaDalImage} 
                                alt="Chana Dal (Bengal Gram) – Premium Export Product" 
                                className="w-full h-[180px] object-cover rounded-lg"
                                loading="lazy"
                              />
                            ) : product.name === 'Masoor Dal (Red Lentils)' ? (
                              <img 
                                src={masoorDalImage} 
                                alt="Masoor Dal (Red Lentils) – Premium Export Product" 
                                className="w-full h-[180px] object-cover rounded-lg"
                                loading="lazy"
                              />
                            ) : (
                              <div className="product-placeholder w-full h-[180px] bg-gray-100 flex items-center justify-center rounded-lg">
                                <Package className="h-12 w-12 text-gray-400" />
                              </div>
                            )}
                          </div>

                         {/* Product Details */}
                         <div className="product-info flex flex-col gap-4 flex-grow">
                           {/* Product Header */}
                           <div>
                             <h4 className="font-heading text-xl md:text-2xl font-bold text-primary mb-2">
                               {product.name}
                             </h4>
                             {product.description && (
                               <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                 {product.description}
                               </p>
                             )}
                           </div>

                           {/* Product Tags */}
                           <div className="flex flex-wrap gap-2">
                             {product.varieties.slice(0, 3).map((variety, i) => (
                               <Badge key={i} variant="outline" className="text-xs border-border">
                                 {variety}
                               </Badge>
                             ))}
                             {product.certifications.slice(0, 2).map((cert, i) => (
                               <Badge key={i} variant="secondary" className="text-xs">
                                 <Award className="h-3 w-3 mr-1" />
                                 {cert}
                               </Badge>
                             ))}
                           </div>

                           {/* Product Specifications */}
                           <div className="grid grid-cols-1 gap-3 text-sm">
                             <div className="flex items-center gap-2">
                               <span className="text-muted-foreground">Origin:</span>
                               <span className="font-medium">{product.origin}</span>
                             </div>
                             <div className="flex items-center gap-2">
                               <span className="text-muted-foreground">Packaging:</span>
                               <span className="font-medium">{product.packaging}</span>
                             </div>
                             {product.protein && (
                               <div className="flex items-center gap-2">
                                 <span className="text-muted-foreground">Protein:</span>
                                 <span className="font-medium">{product.protein}</span>
                               </div>
                             )}
                             {product.grainLength && (
                               <div className="flex items-center gap-2">
                                 <span className="text-muted-foreground">Grain Length:</span>
                                 <span className="font-medium">{product.grainLength}</span>
                               </div>
                             )}
                             {product.curcumin && (
                               <div className="flex items-center gap-2">
                                 <span className="text-muted-foreground">Curcumin:</span>
                                 <span className="font-medium">{product.curcumin}</span>
                               </div>
                             )}
                             {product.oilContent && (
                               <div className="flex items-center gap-2">
                                 <span className="text-muted-foreground">Oil Content:</span>
                                 <span className="font-medium">{product.oilContent}</span>
                               </div>
                             )}
                             {product.benefits && (
                               <div className="flex items-start gap-2">
                                 <span className="text-muted-foreground">Benefits:</span>
                                 <span className="font-medium text-green-600">{product.benefits}</span>
                               </div>
                             )}
                           </div>
                         </div>

                         {/* Action Button */}
                         <div className="mt-auto pt-4">
                           <Button 
                             asChild
                             size="lg" 
                             className="w-full bg-accent hover:bg-accent-hover text-accent-foreground shadow-soft hover:shadow-medium transition-all duration-200 hover:scale-105"
                           >
                             <Link to={`/enquiry/${product.enquiryId}`}>
                               <Send className="h-4 w-4 mr-2" />
                               {product.name === 'Moringa Powder' ? 'Enquire Now' : 'Send an Enquiry'}
                             </Link>
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
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Quality Assurance
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
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
      <section className="py-16 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Get competitive quotes for all our premium products with flexible packaging and delivery options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent-hover shadow-soft hover:scale-105 transition-all duration-200">
              Request Product Catalog
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
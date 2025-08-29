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
import moongDalImage from '@/assets/Moong-Dal-Chilka.jpg';
import chanaDalImage from '@/assets/Chana_Dal.webp';
import masoorDalImage from '@/assets/masoor_dal.jpg';
import basmatiRiceImage from '@/assets/basmati_rice.jpg';
import nonBasmatiRiceImage from '@/assets/non_basmati_rice.jpg';
import milletsImage from '@/assets/millets_image.jpg';

// Wheat image from Unsplash for professional appearance
const wheatImage = 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop';

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
          origin: 'India',
          protein: '22-24%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'APEDA'],
          enquiryId: 'toor-dal'
        },
        {
          name: 'Moong Dal (Green Gram)',
          varieties: ['Whole', 'Split', 'Husked'],
          origin: 'India',
          protein: '24-26%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'APEDA', 'Organic'],
          enquiryId: 'moong-dal'
        },
        {
          name: 'Chana Dal (Bengal Gram)',
          varieties: ['Desi', 'Kabuli', 'Split'],
          origin: 'India',
          protein: '20-22%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'APEDA'],
          enquiryId: 'chana-dal'
        },
        {
          name: 'Masoor Dal (Red Lentils)',
          varieties: ['Whole', 'Split', 'Football'],
          origin: 'India',
          protein: '26-28%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'APEDA'],
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
          origin: 'India',
          grainLength: '7-8mm',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'GI Tag'],
          enquiryId: 'basmati-rice'
        },
        {
          name: 'Non-Basmati Rice',
          varieties: ['IR64', 'Sona Masuri', 'PR11'],
          origin: 'India',
          grainLength: '5-6mm',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI'],
          enquiryId: 'non-basmati-rice'
        },
        {
          name: 'Wheat',
          varieties: ['Durum', 'Hard Red', 'Soft White'],
          origin: 'India',
          protein: '11-14%',
          packaging: '50kg Bags, Bulk',
          certifications: ['FSSAI'],
          enquiryId: 'wheat'
        },
        {
          name: 'Millets',
          varieties: ['Pearl', 'Finger', 'Foxtail'],
          origin: 'India',
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
          origin: 'India',
          curcumin: '2.5-5%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI'],
          enquiryId: 'turmeric'
        },
        {
          name: 'Red Chili Powder',
          varieties: ['Kashmiri', 'Byadgi', 'Guntur'],
          origin: 'India',
          heatLevel: 'Medium-Hot',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI'],
          enquiryId: 'red-chili'
        },
        {
          name: 'Cumin Seeds',
          varieties: ['Whole', 'Ground', 'Organic'],
          origin: 'India',
          oilContent: '2-4%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI'],
          enquiryId: 'cumin'
        },
        {
          name: 'Coriander Seeds',
          varieties: ['Whole', 'Ground', 'Organic'],
          origin: 'India',
          oilContent: '0.3-1%',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI'],
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
          origin: 'India',
          description: 'Nutrient-rich herbal powder made from dried moringa leaves, ideal for health, wellness, and nutrition export markets.',
          benefits: 'High in antioxidants, Anti-inflammatory, Rich in vitamins',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'Organic'],
          enquiryId: 'moringa-powder'
        },
        {
          name: 'Turmeric Powder',
          varieties: ['Alleppey', 'Madras', 'Organic', 'High Curcumin'],
          origin: 'India',
          benefits: 'High curcumin content, Anti-inflammatory, Immunity booster',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI'],
          enquiryId: 'turmeric-powder'
        },
        {
          name: 'Ashwagandha Root',
          varieties: ['Whole Root', 'Powder', 'Organic'],
          origin: 'India',
          benefits: 'Adaptogenic, Stress reduction, Energy booster',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'Organic'],
          enquiryId: 'ashwagandha-root'
        },
        {
          name: 'Giloy (Tinospora cordifolia)',
          varieties: ['Stem Powder', 'Whole Plant', 'Organic'],
          origin: 'India',
          benefits: 'Immunity enhancer, Detoxifying, Ayurvedic',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI'],
          enquiryId: 'giloy'
        },
        {
          name: 'Tulsi (Holy Basil) Leaves',
          varieties: ['Krishna Tulsi', 'Rama Tulsi', 'Vana Tulsi'],
          origin: 'India',
          benefits: 'Antimicrobial, Respiratory health, Sacred herb',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI', 'Organic'],
          enquiryId: 'tulsi-leaves'
        },
        {
          name: 'Amla (Indian Gooseberry) Powder',
          varieties: ['Wild Amla', 'Cultivated', 'Organic'],
          origin: 'India',
          benefits: 'High Vitamin C, Digestive health, Skin health',
          packaging: '25kg, 50kg Bags',
          certifications: ['FSSAI'],
          enquiryId: 'amla-powder'
        },
        {
          name: 'Natural Honey',
          varieties: ['Raw', 'Organic', 'Multiflora'],
          origin: 'India',
          benefits: 'Natural sweetener, Antioxidant-rich, Soothes throat',
          packaging: '500g, 1kg, Bulk',
          certifications: ['FSSAI'],
          enquiryId: 'natural-honey'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${productsImage})`
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Premium Export Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mb-6 md:mb-8 px-4">
              From the finest Indian farms to your global markets - quality guaranteed
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
              <Badge variant="secondary" className="bg-white text-primary px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-lg">
                50+ Product Varieties
              </Badge>
              <Badge variant="secondary" className="bg-white text-primary px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-lg">
                FSSAI Certified
              </Badge>
              
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Product Categories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Explore our comprehensive range of premium agricultural products
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6 md:mb-8 lg:mb-12 bg-white shadow-soft h-auto">
              {Object.entries(productCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key} className="text-xs sm:text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground p-2 sm:p-3">
                  <span className="mr-2">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden text-xs">{category.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(productCategories).map(([key, category]) => (
                             <TabsContent key={key} value={key}>
                 <div className="mb-8 md:mb-12 text-center">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">
                     {category.name}
                   </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                     {category.description}
                   </p>
                 </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                   {category.products.map((product, index) => (
                    <Card key={index} className="flex flex-col border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                      <CardContent className="p-4 flex flex-col h-full">
                         {/* Product Image Section - fixed 250x250 */}
                        <div className="w-full flex items-center justify-center mb-4">
                          <div className="w-[250px] h-[250px] overflow-hidden rounded-md">
                            {product.name === 'Moringa Powder' ? (
                              <img 
                                src={moringaImage} 
                                alt="Moringa Powder – Herbal Product for Export" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Toor Dal (Pigeon Peas)' ? (
                              <img 
                                src={toorDalImage} 
                                alt="Toor Dal (Pigeon Peas) – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Moong Dal (Green Gram)' ? (
                              <img 
                                src={moongDalImage} 
                                alt="Moong Dal (Green Gram) – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Chana Dal (Bengal Gram)' ? (
                              <img 
                                src={chanaDalImage} 
                                alt="Chana Dal (Bengal Gram) – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Masoor Dal (Red Lentils)' ? (
                              <img 
                                src={masoorDalImage} 
                                alt="Masoor Dal (Red Lentils) – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Basmati Rice' ? (
                              <img 
                                src={basmatiRiceImage} 
                                alt="Basmati Rice – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Non-Basmati Rice' ? (
                              <img 
                                src={nonBasmatiRiceImage} 
                                alt="Non-Basmati Rice – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Wheat' ? (
                              <img 
                                src={wheatImage} 
                                alt="Wheat – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Millets' ? (
                              <img 
                                src={milletsImage} 
                                alt="Millets – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Turmeric Powder' ? (
                              <img 
                                src="/Turmeric Powder.jpg" 
                                alt="Turmeric Powder – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Red Chili Powder' ? (
                              <img 
                                src="/Red Chili Powder.jpg" 
                                alt="Red Chili Powder – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Cumin Seeds' ? (
                              <img 
                                src="/Cumin Seeds.jpg" 
                                alt="Cumin Seeds – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Coriander Seeds' ? (
                              <img 
                                src="/Coriander Seeds.jpg" 
                                alt="Coriander Seeds – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Ashwagandha Root' ? (
                              <img 
                                src="/Ashwagandha Root.jpg" 
                                alt="Ashwagandha Root – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Giloy (Tinospora cordifolia)' ? (
                              <img 
                                src="/Giloy (Tinospora cordifolia).jpg" 
                                alt="Giloy (Tinospora cordifolia) – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Tulsi (Holy Basil) Leaves' ? (
                              <img 
                                src="/Tulsi (Holy Basil) Leaves.jpg" 
                                alt="Tulsi (Holy Basil) Leaves – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Amla (Indian Gooseberry) Powder' ? (
                              <img 
                                src="/Amla (Indian Gooseberry) Powder.jpg" 
                                alt="Amla (Indian Gooseberry) Powder – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : product.name === 'Natural Honey' ? (
                              <img 
                                src="/honey.jpg" 
                                alt="Natural Honey – Premium Export Product" 
                                className="w-[250px] h-[250px] object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-[250px] h-[250px] bg-gray-100 flex items-center justify-center rounded-md">
                                <Package className="h-12 w-12 text-gray-400" />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Product Details */}
                       <div className="product-info flex flex-col gap-3 flex-grow">
                           {/* Product Header */}
                           <div>
                           <h4 className="font-heading text-lg sm:text-xl font-bold text-primary mb-1">
                                {product.name}
                              </h4>
                           </div>
 
                           {/* Product Tags */}
                         <div className="flex flex-wrap gap-2 mb-2">
                              {product.varieties.slice(0, 3).map((variety, i) => (
                             <Badge key={i} variant="secondary" className="text-xs bg-secondary text-secondary-foreground border border-border px-2 py-1">
                                  {variety}
                                </Badge>
                              ))}
                              {product.certifications.slice(0, 2).map((cert, i) => (
                             <Badge key={i} variant="secondary" className="text-xs bg-secondary text-secondary-foreground border border-border px-2 py-1">
                                  <Award className="h-3 w-3 mr-1" />
                                  {cert}
                                </Badge>
                              ))}
                           </div>
 
                          {/* Product Specifications */}
                         <div className="space-y-1 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Origin</span>
                              <span className="font-medium">{product.origin}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Packaging</span>
                              <span className="font-medium">{product.packaging}</span>
                            </div>
                            {product.protein && (
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Protein</span>
                                <span className="font-medium">{product.protein}</span>
                              </div>
                            )}
                             {product.grainLength && (
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Grain Length</span>
                                <span className="font-medium">{product.grainLength}</span>
                              </div>
                            )}
                             {product.curcumin && (
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Curcumin</span>
                                <span className="font-medium">{product.curcumin}</span>
                              </div>
                            )}
                             {product.oilContent && (
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Oil Content</span>
                                <span className="font-medium">{product.oilContent}</span>
                              </div>
                            )}
                             {product.benefits && (
                              <div className="pt-1">
                                <span className="text-muted-foreground mr-2">Benefits</span>
                                <span className="font-medium text-green-600">{product.benefits}</span>
                              </div>
                            )}
                           </div>
                         </div>
 
                        {/* Action Button - fixed width at bottom */}
                       <div className="mt-auto pt-2 flex justify-center">
                           <Button 
                             asChild
                            size="default" 
                            className="w-48 bg-accent hover:bg-accent-hover text-accent-foreground shadow-soft transition-all duration-200"
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
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Quality Assurance
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Every product undergoes rigorous quality checks to ensure excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="hover-lift">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Source Verification</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Direct partnerships with verified farmers and rigorous source authentication
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Get competitive quotes for all our premium products with flexible packaging and delivery options
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent-hover shadow-soft hover:scale-105 transition-all duration-200">
              Request Product Catalog
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
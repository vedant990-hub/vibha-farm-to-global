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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ 
            backgroundImage: `url(${productsImage})`,
            filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
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
              <Badge variant="secondary" className="bg-white text-primary px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-lg">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                   {category.products.map((product, index) => (
                    <Card key={index} className="hover-lift flex flex-col justify-between rounded-xl shadow-soft overflow-hidden min-h-[450px] sm:min-h-[500px]">
                       <CardContent className="p-0 flex flex-col h-full">
                         {/* Product Image Section - 60% of card height */}
                        <div className="product-image h-[60%] min-h-[250px] sm:min-h-[300px] relative">
                           {product.name === 'Moringa Powder' ? (
                             <img 
                               src={moringaImage} 
                               alt="Moringa Powder – Herbal Product for Export" 
                               className="w-full h-full object-cover rounded-t-xl"
                               loading="lazy"
                             />
                           ) : product.name === 'Toor Dal (Pigeon Peas)' ? (
                             <img 
                               src={toorDalImage} 
                               alt="Toor Dal (Pigeon Peas) – Premium Export Product" 
                               className="w-full h-full object-cover rounded-t-xl"
                               loading="lazy"
                             />
                           ) : product.name === 'Moong Dal (Green Gram)' ? (
                             <img 
                               src={moongDalImage} 
                               alt="Moong Dal (Green Gram) – Premium Export Product" 
                               className="w-full h-full object-cover rounded-t-xl"
                               loading="lazy"
                             />
                           ) : product.name === 'Chana Dal (Bengal Gram)' ? (
                             <img 
                               src={chanaDalImage} 
                               alt="Chana Dal (Bengal Gram) – Premium Export Product" 
                               className="w-full h-full object-cover rounded-t-xl"
                               loading="lazy"
                             />
                           ) : product.name === 'Masoor Dal (Red Lentils)' ? (
                             <img 
                               src={masoorDalImage} 
                               alt="Masoor Dal (Red Lentils) – Premium Export Product" 
                               className="w-full h-full object-cover rounded-t-xl"
                               loading="lazy"
                             />
                           ) : product.name === 'Basmati Rice' ? (
                             <img 
                               src={basmatiRiceImage} 
                               alt="Basmati Rice – Premium Export Product" 
                               className="w-full h-full object-cover rounded-t-xl"
                               loading="lazy"
                             />
                           ) : product.name === 'Non-Basmati Rice' ? (
                             <img 
                               src={nonBasmatiRiceImage} 
                               alt="Non-Basmati Rice – Premium Export Product" 
                               className="w-full h-full object-cover rounded-t-xl"
                               loading="lazy"
                             />
                           ) : product.name === 'Wheat' ? (
                             <img 
                               src={wheatImage} 
                               alt="Wheat – Premium Export Product" 
                               className="w-full h-full object-cover rounded-t-xl"
                               loading="lazy"
                             />
                           ) : product.name === 'Millets' ? (
                             <img 
                               src={milletsImage} 
                               alt="Millets – Premium Export Product" 
                               className="w-full h-full object-cover rounded-t-xl"
                               loading="lazy"
                             />
                           ) : (
                             <div className="product-placeholder w-full h-full bg-gray-100 flex items-center justify-center rounded-t-xl">
                               <Package className="h-12 w-12 text-gray-400" />
                             </div>
                           )}
                         </div>

                         {/* Product Details - 40% of card height */}
                        <div className="product-info flex flex-col gap-2 sm:gap-3 flex-grow p-3 sm:p-4">
                           {/* Product Header */}
                           <div>
                            <h4 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">
                               {product.name}
                             </h4>
                           </div>

                           {/* Product Tags */}
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                             {product.varieties.slice(0, 3).map((variety, i) => (
                              <Badge key={i} variant="secondary" className="text-xs bg-secondary text-secondary-foreground border-border px-2 py-1">
                                 {variety}
                               </Badge>
                             ))}
                             {product.certifications.slice(0, 2).map((cert, i) => (
                              <Badge key={i} variant="secondary" className="text-xs bg-secondary text-secondary-foreground px-2 py-1">
                                 <Award className="h-3 w-3 mr-1" />
                                 {cert}
                               </Badge>
                             ))}
                           </div>

                           {/* Product Specifications Grid */}
                          <div className="grid grid-cols-1 gap-1 sm:gap-2 text-xs sm:text-sm flex-grow">
                             <div className="flex items-center gap-2">
                               <span className="text-muted-foreground font-medium">Origin:</span>
                              <span className="font-medium text-xs sm:text-sm">{product.origin}</span>
                             </div>
                             <div className="flex items-center gap-2">
                               <span className="text-muted-foreground font-medium">Packaging:</span>
                              <span className="font-medium text-xs sm:text-sm">{product.packaging}</span>
                             </div>
                             {product.protein && (
                               <div className="flex items-center gap-2">
                                 <span className="text-muted-foreground font-medium">Protein:</span>
                                 <span className="font-medium">{product.protein}</span>
                               </div>
                             )}
                             {product.grainLength && (
                               <div className="flex items-center gap-2">
                                 <span className="text-muted-foreground font-medium">Grain Length:</span>
                                 <span className="font-medium">{product.grainLength}</span>
                               </div>
                             )}
                             {product.curcumin && (
                               <div className="flex items-center gap-2">
                                 <span className="text-muted-foreground font-medium">Curcumin:</span>
                                 <span className="font-medium">{product.curcumin}</span>
                               </div>
                             )}
                             {product.oilContent && (
                               <div className="flex items-center gap-2">
                                 <span className="text-muted-foreground font-medium">Oil Content:</span>
                                 <span className="font-medium">{product.oilContent}</span>
                               </div>
                             )}
                             {product.benefits && (
                               <div className="flex items-start gap-2">
                                 <span className="text-muted-foreground font-medium">Benefits:</span>
                                 <span className="font-medium text-green-600">{product.benefits}</span>
                               </div>
                             )}
                           </div>
                         </div>

                         {/* Action Button - Full width with larger padding */}
                        <div className="p-3 sm:p-4 pt-0">
                           <Button 
                             asChild
                            size="default" 
                            className="w-full bg-accent hover:bg-accent-hover text-accent-foreground shadow-soft hover:shadow-medium transition-all duration-200 hover:scale-105 py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
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
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
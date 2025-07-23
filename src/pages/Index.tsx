import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GlobalPresenceSection from '@/components/GlobalPresenceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    // Here you would typically implement actual language switching logic
    // For now, we'll just update the state
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <GlobalPresenceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
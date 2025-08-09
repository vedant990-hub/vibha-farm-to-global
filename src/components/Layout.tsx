import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main><Outlet /></main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
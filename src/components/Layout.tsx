import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import ScrollToTopFloat from './ScrollToTopFloat';
import { Outlet } from 'react-router-dom';
import Loader from './Loader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isAppReady, setIsAppReady] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  useEffect(() => {
    const readyHandler = () => setIsAppReady(true);
    window.addEventListener('hero-video-ready', readyHandler as EventListener);

    const timeoutId = window.setTimeout(() => setIsAppReady(true), 8000);

    return () => {
      window.removeEventListener('hero-video-ready', readyHandler as EventListener);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {!isAppReady && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <Loader />
        </div>
      )}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main><Outlet /></main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTopFloat />
    </div>
  );
};

export default Layout;
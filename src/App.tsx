import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import GlobalReach from "./pages/GlobalReach";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ProductEnquiry from "./pages/ProductEnquiry";
import NotFound from "./pages/NotFound";
import Layout from "@/components/Layout";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { LoadingProvider, useLoading } from "./contexts/LoadingContext";
import LoadingScreen from "./components/LoadingScreen";
import { useMediaLoader } from "./hooks/useMediaLoader";

const queryClient = new QueryClient();

// Custom hook for scroll to top on route change
const useScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);
};

// Component that uses the hook
const ScrollToTopOnRouteChange = () => {
  useScrollToTopOnRouteChange();
  return null;
};

// Component that handles media loading detection
const AppContent = () => {
  const { isLoading } = useLoading();
  
  // Initialize media loader to detect all images and videos
  useMediaLoader();
  
  // Add a small delay to ensure DOM is ready
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if there are any media elements to load
      const images = document.querySelectorAll('img');
      const videos = document.querySelectorAll('video');
      
      if (images.length === 0 && videos.length === 0) {
        // No media to load, hide loading screen after a short delay
        setTimeout(() => {
          // This will be handled by the context
        }, 1000);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <ScrollToTopOnRouteChange />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home currentLang="en" />} />
          <Route path="about" element={<About currentLang="en" />} />
          <Route path="products" element={<Products currentLang="en" />} />
          <Route path="global-reach" element={<GlobalReach currentLang="en" />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact currentLang="en" />} />
          <Route path="enquiry/:productId" element={<ProductEnquiry currentLang="en" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LoadingProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LoadingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

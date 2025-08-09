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

const queryClient = new QueryClient();

// Custom hook for scroll to top
const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);
};

// Component that uses the hook
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home currentLang="en" />} />
            <Route path="about" element={<About currentLang="en" />} />
            <Route path="products" element={<Products currentLang="en" />} />
            <Route path="global-reach" element={<GlobalReach currentLang="en" />} />
            <Route path="testimonials" element={<Testimonials currentLang="en" />} />
            <Route path="contact" element={<Contact currentLang="en" />} />
            <Route path="enquiry/:productId" element={<ProductEnquiry currentLang="en" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

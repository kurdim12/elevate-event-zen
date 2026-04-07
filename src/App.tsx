import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Pages
import GalaDinners from "./pages/GalaDinners";
import Exhibitions from "./pages/Exhibitions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import Destinations from "./pages/Destinations";
import NotFound from "./pages/NotFound";

// Weddings
import WeddingsMain from "./pages/weddings/WeddingsMain";
import PetraWedding from "./pages/weddings/PetraWedding";
import WadiRumWedding from "./pages/weddings/WadiRumWedding";
import DeadSeaWedding from "./pages/weddings/DeadSeaWedding";
import AmmanWedding from "./pages/weddings/AmmanWedding";

// Corporate
import CorporateEventsMain from "./pages/corporate/CorporateEventsMain";
import CorporateSubPage from "./pages/corporate/CorporateSubPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Weddings */}
          <Route path="/weddings" element={<WeddingsMain />} />
          <Route path="/weddings/petra" element={<PetraWedding />} />
          <Route path="/weddings/wadi-rum" element={<WadiRumWedding />} />
          <Route path="/weddings/dead-sea" element={<DeadSeaWedding />} />
          <Route path="/weddings/amman" element={<AmmanWedding />} />
          
          {/* Corporate */}
          <Route path="/corporate-events" element={<CorporateEventsMain />} />
          <Route path="/corporate-events/:subSlug" element={<CorporateSubPage />} />
          
          {/* Services */}
          <Route path="/gala-dinners" element={<GalaDinners />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          
          {/* Core */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Corporate Events
import CorporateEventsMain from "./pages/corporate/CorporateEventsMain";
import CorporateServicePage from "./pages/corporate/CorporateServicePage";

// Weddings
import WeddingsMain from "./pages/weddings/WeddingsMain";
import WeddingServicePage from "./pages/weddings/WeddingServicePage";
import PetraWedding from "./pages/weddings/PetraWedding";
import WadiRumWedding from "./pages/weddings/WadiRumWedding";

// Destinations
import DestinationsMain from "./pages/destinations/DestinationsMain";
import DestinationPage from "./pages/destinations/DestinationPage";

// Standalone Service Pages
import GalaDinners from "./pages/GalaDinners";
import Exhibitions from "./pages/Exhibitions";

// Core Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FAQs from "./pages/FAQs";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";

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
          
          {/* Corporate Events */}
          <Route path="/corporate-events" element={<CorporateEventsMain />} />
          <Route path="/corporate-events/:serviceSlug" element={<CorporateServicePage />} />
          
          {/* Weddings */}
          <Route path="/destination-luxury-weddings" element={<WeddingsMain />} />
          <Route path="/destination-luxury-weddings/:serviceSlug" element={<WeddingServicePage />} />
          <Route path="/weddings/petra" element={<PetraWedding />} />
          <Route path="/weddings/wadi-rum" element={<WadiRumWedding />} />
          
          {/* Destinations */}
          <Route path="/destinations" element={<DestinationsMain />} />
          <Route path="/destinations/:destinationSlug" element={<DestinationPage />} />
          
          {/* Standalone Service Pages */}
          <Route path="/gala-dinners" element={<GalaDinners />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          
          {/* Core Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/work" element={<Work />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

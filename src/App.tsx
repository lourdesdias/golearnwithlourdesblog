import LinkInBio from "./pages/LinkInBio";
import VisionArchitect from "./pages/VisionArchitect";
import ViralEngine from "./pages/ViralEngine";
import Newsletter from "./pages/Newsletter";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Final deployment trigger for go.learnwithlourdes.blog
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TravelWebinar from "./pages/TravelWebinar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import IncomeDisclosure from "./pages/IncomeDisclosure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<LinkInBio />} />
          <Route path="/blog" element={<Index />} />
          <Route path="/travelfreedom" element={<Index />} />
          <Route path="/travelwebinar" element={<TravelWebinar />} />
          <Route path="/visionarchitect" element={<VisionArchitect />} />
          <Route path="/viralengine" element={<ViralEngine />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/income-disclosure" element={<IncomeDisclosure />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

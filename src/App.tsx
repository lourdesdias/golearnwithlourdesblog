import LinkInBio from "./pages/LinkInBio";
import VisionArchitect from "./pages/VisionArchitect";
import ViralEngine from "./pages/ViralEngine";
import Newsletter from "./pages/Newsletter";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
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
      <HashRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Legacy path (hash-based) */}
          <Route path="/travelfreedom" element={<Navigate to="/" replace />} />

          {/* Other pages */}
          <Route path="/linkinbio" element={<LinkInBio />} />
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
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

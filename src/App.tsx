import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioGallery from "./pages/PortfolioGallery";
import PortfolioDetails from "./pages/PortfolioDetails";
import NotFound from "./pages/NotFound";
import PowerBIDashboards from "./pages/portfolio/PowerBIDashboards";
import AIMLSolutions from "./pages/portfolio/AIMLSolutions";
import ExcelAutomation from "./pages/portfolio/ExcelAutomation";
import WebAPISolutions from "./pages/portfolio/WebAPISolutions";
import DataArchitecture from "./pages/portfolio/DataArchitecture";
import AIChatbots from "./pages/portfolio/AIChatbots";
import WebApplications from "./pages/portfolio/WebApplications";
import AdvancedAnalytics from "./pages/portfolio/AdvancedAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<PortfolioGallery />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/portfolio/power-bi" element={<PowerBIDashboards />} />
          <Route path="/portfolio/ai-ml" element={<AIMLSolutions />} />
          <Route path="/portfolio/excel-automation" element={<ExcelAutomation />} />
          <Route path="/portfolio/web-api" element={<WebAPISolutions />} />
          <Route path="/portfolio/data-architecture" element={<DataArchitecture />} />
          <Route path="/portfolio/chatbots" element={<AIChatbots />} />
          <Route path="/portfolio/web-applications" element={<WebApplications />} />
          <Route path="/portfolio/advanced-analytics" element={<AdvancedAnalytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

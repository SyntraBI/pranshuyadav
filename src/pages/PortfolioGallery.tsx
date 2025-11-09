import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, FileSpreadsheet, Package, Users, TrendingUp, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PortfolioGallery = () => {
  const navigate = useNavigate();
  const [selectedDashboard, setSelectedDashboard] = useState("sales");

  const dashboards = [
    {
      id: "sales",
      title: "Sales & Distribution",
      icon: BarChart3,
      url: "https://app.powerbi.com/view?r=eyJrIjoiZThiZTc2YmQtOGIxMi00OWQ5LTgzNjEtYjljMDk3ZmQyODgwIiwidCI6IjZmODcyOGQ1LWMxYzUtNDBlMC1iMTIwLTJhMTQ0MWI3ZjQyMyIsImMiOjEwfQ%3D%3D",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "finance",
      title: "Finance & AR/AP",
      icon: FileSpreadsheet,
      url: "https://app.powerbi.com/view?r=eyJrIjoiZDkwYTU3NDQtNWJmMi00NGRhLTkxOGItOTRhNmQwNzM3Zjg4IiwidCI6IjZmODcyOGQ1LWMxYzUtNDBlMC1iMTIwLTJhMTQ0MWI3ZjQyMyIsImMiOjEwfQ%3D%3D",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "procurement",
      title: "PO & GRN (Procurement)",
      icon: Package,
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTZhZTU5ZWItZThlYy00NGQyLWEzNjUtNDY2ODI4MTU0YzgzIiwidCI6IjZmODcyOGQ1LWMxYzUtNDBlMC1iMTIwLTJhMTQ0MWI3ZjQyMyIsImMiOjEwfQ%3D%3D",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "stock",
      title: "Closing Stock & Stock Cover Days",
      icon: TrendingUp,
      url: "https://app.powerbi.com/view?r=eyJrIjoiNzJlNDZlNjktOWZlZS00ZmFhLTk2MWItNGYxOGI1MWU3YmQxIiwidCI6IjZmODcyOGQ1LWMxYzUtNDBlMC1iMTIwLTJhMTQ0MWI3ZjQyMyIsImMiOjEwfQ%3D%3D",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "hrms",
      title: "HRMS",
      icon: Users,
      url: "", // Placeholder for HRMS dashboard
      color: "from-indigo-500 to-violet-500"
    },
    {
      id: "crm",
      title: "CRM",
      icon: Phone,
      url: "", // Placeholder for CRM dashboard
      color: "from-red-500 to-rose-500"
    }
  ];

  const currentDashboard = dashboards.find(d => d.id === selectedDashboard);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2 hover:bg-accent/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <h1 className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio Gallery
            </h1>
            <div className="w-32" /> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Dashboard Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              onClick={() => setSelectedDashboard(dashboard.id)}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 ${
                selectedDashboard === dashboard.id
                  ? "bg-accent/10 border-accent shadow-glow"
                  : "bg-card border-border hover:border-accent/30"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dashboard.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <dashboard.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-sm text-center text-foreground">
                {dashboard.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Dashboard Display */}
        <div className="bg-card border border-border rounded-2xl p-4 shadow-elegant animate-fade-in">
          <div className="mb-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentDashboard?.color} flex items-center justify-center`}>
                {currentDashboard && <currentDashboard.icon className="w-5 h-5 text-white" />}
              </div>
              {currentDashboard?.title}
            </h2>
          </div>

          {currentDashboard?.url ? (
            <div className="relative w-full bg-background rounded-xl overflow-hidden border border-border" style={{ paddingBottom: "56.25%" }}>
              <iframe
                title={currentDashboard.title}
                src={currentDashboard.url}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-96 bg-background rounded-xl border border-dashed border-border">
              <currentDashboard.icon className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg font-medium mb-2">
                Dashboard Coming Soon
              </p>
              <p className="text-muted-foreground/60 text-sm">
                This dashboard is currently being prepared
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;

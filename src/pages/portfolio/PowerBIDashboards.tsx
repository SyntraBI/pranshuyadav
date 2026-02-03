import { ArrowLeft, BarChart3, TrendingUp, PieChart, Activity, DollarSign, Users, Package, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PowerBIDashboards = () => {
  const navigate = useNavigate();

  const dashboards = [
    {
      title: "Sales & Distribution Analytics",
      description: "Comprehensive sales performance tracking with real-time KPIs, regional analysis, and trend forecasting.",
      icon: TrendingUp,
      features: ["Revenue Tracking", "Regional Performance", "Sales Forecasting", "Customer Segmentation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Finance & AR/AP Dashboard",
      description: "Complete financial overview with accounts receivable, payable tracking, and cash flow analysis.",
      icon: DollarSign,
      features: ["Cash Flow Analysis", "Invoice Tracking", "Budget vs Actual", "Financial KPIs"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "HRM Analytics",
      description: "Human resource metrics including attendance, performance, and workforce analytics.",
      icon: Users,
      features: ["Attendance Tracking", "Performance Metrics", "Headcount Analysis", "Attrition Reports"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Inventory Management",
      description: "Real-time inventory tracking with stock levels, movement analysis, and reorder alerts.",
      icon: Package,
      features: ["Stock Levels", "Movement Trends", "Aging Analysis", "Reorder Points"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Procurement Analytics",
      description: "Purchase order tracking, vendor performance, and procurement efficiency metrics.",
      icon: ShoppingCart,
      features: ["PO Tracking", "Vendor Analysis", "GRN Reports", "Cost Optimization"],
      color: "from-red-500 to-rose-500"
    }
  ];

  const technologies = ["Power BI", "DAX", "Power Query", "SQL Server", "SAP HANA", "Excel Integration"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Power BI Dashboards
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dynamic, interactive business intelligence dashboards with advanced DAX calculations, 
            real-time data refresh, and stunning visualizations for data-driven decision making.
          </p>
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: "100ms" }}>
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Dashboards Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dashboards.map((dashboard, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dashboard.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <dashboard.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                {dashboard.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {dashboard.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {dashboard.features.map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12 text-center shadow-elegant animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Need a Custom Dashboard?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's discuss your business intelligence needs and create a tailored solution.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/#contact")}
            className="bg-white text-blue-600 hover:bg-white/90 font-bold px-8"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PowerBIDashboards;

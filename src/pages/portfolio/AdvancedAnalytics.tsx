import { ArrowLeft, BarChart3, TrendingUp, PieChart, Target, DollarSign, Package, ShoppingCart, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AdvancedAnalytics = () => {
  const navigate = useNavigate();

  const analytics = [
    {
      title: "Sales Analytics & Forecasting",
      description: "Comprehensive sales analysis with trend detection, seasonal patterns, and accurate revenue forecasting models.",
      icon: TrendingUp,
      features: ["Revenue Trends", "Sales Forecasting", "Territory Analysis", "Pipeline Metrics"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Financial Analytics & Budgeting",
      description: "Deep financial insights with budget vs actual analysis, cash flow forecasting, and profitability metrics.",
      icon: DollarSign,
      features: ["Budget Analysis", "Profitability", "Cash Flow", "Variance Reports"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Inventory & Stock Analysis",
      description: "Advanced inventory analytics including stock cover days, aging analysis, and optimal stock level recommendations.",
      icon: Package,
      features: ["Stock Cover Days", "Aging Analysis", "Reorder Optimization", "Dead Stock Detection"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Purchase & Procurement Insights",
      description: "Procurement analytics with vendor performance scoring, cost analysis, and purchase pattern optimization.",
      icon: ShoppingCart,
      features: ["Vendor Scoring", "Cost Optimization", "Lead Time Analysis", "Spend Analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cross-Module Comparison",
      description: "Integrated analytics comparing Sales, Purchase, Inventory, and Finance modules for holistic business insights.",
      icon: Layers,
      features: ["Module Integration", "Cross-Analysis", "KPI Dashboard", "Unified Reporting"],
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Predictive & Prescriptive Analytics",
      description: "AI-powered predictions with actionable recommendations for strategic decision-making.",
      icon: Target,
      features: ["Demand Prediction", "Risk Assessment", "Action Recommendations", "What-If Scenarios"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const technologies = ["Power BI", "Python", "R", "SQL", "Machine Learning", "SAP HANA", "Tableau", "Advanced Excel"];

  const insights = [
    { icon: "📈", title: "Forecasting", desc: "Predict future trends with ML models" },
    { icon: "💰", title: "Budgeting", desc: "Optimize financial planning and allocation" },
    { icon: "🎯", title: "Prediction", desc: "Anticipate market and customer behavior" },
    { icon: "📊", title: "Comparison", desc: "Cross-module insights for better decisions" }
  ];

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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Advanced Analytics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analytics across Sales, Purchase, Inventory, and Finance with predictive insights, 
            budgeting analysis, and cross-module comparisons for data-driven decision making.
          </p>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl bg-card border border-border text-center animate-fade-in hover:border-accent/30 transition-colors hover:-translate-y-1 duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{insight.icon}</div>
              <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
              <p className="text-xs text-muted-foreground">{insight.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: "200ms" }}>
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Analytics Flow */}
      <section className="container mx-auto px-6 pb-12">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "250ms" }}>
          <h3 className="font-serif text-xl font-semibold mb-6 text-center">Analytics Integration Flow</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <div className="font-semibold text-blue-400">Sales</div>
              <div className="text-xs text-muted-foreground mt-1">Revenue & Trends</div>
            </div>
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="font-semibold text-emerald-400">Purchase</div>
              <div className="text-xs text-muted-foreground mt-1">Procurement & Costs</div>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <div className="font-semibold text-amber-400">Inventory</div>
              <div className="text-xs text-muted-foreground mt-1">Stock & Movement</div>
            </div>
            <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <div className="font-semibold text-purple-400">Finance</div>
              <div className="text-xs text-muted-foreground mt-1">Budget & Cash Flow</div>
            </div>
          </div>
          <div className="text-center mt-4 text-muted-foreground">
            ↓ Unified Analytics Platform ↓
          </div>
          <div className="text-center mt-2">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
              Actionable Business Insights
            </span>
          </div>
        </div>
      </section>

      {/* Analytics Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {analytics.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.features.map((feature, idx) => (
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-12 text-center shadow-elegant animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Transform Your Data Into Insights
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's unlock the full potential of your business data with advanced analytics.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/#contact")}
            className="bg-white text-cyan-600 hover:bg-white/90 font-bold px-8"
          >
            Get Analytics Insights
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAnalytics;

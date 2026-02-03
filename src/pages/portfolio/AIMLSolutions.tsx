import { ArrowLeft, Brain, TrendingUp, BarChart3, Package, MessageSquare, Sparkles, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AIMLSolutions = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Sales Prediction & Forecasting",
      description: "Machine learning models to predict future sales trends, seasonal patterns, and revenue forecasting with high accuracy.",
      icon: TrendingUp,
      features: ["Time Series Analysis", "Seasonal Decomposition", "Trend Prediction", "Revenue Forecasting"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Inventory Optimization",
      description: "AI-driven inventory management with demand forecasting, stock cover days analysis, and automated reorder recommendations.",
      icon: Package,
      features: ["Demand Forecasting", "Stock Cover Days", "Safety Stock Calculation", "Reorder Point Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Procurement Intelligence",
      description: "Smart procurement analytics using ML to optimize vendor selection, pricing analysis, and purchase timing.",
      icon: Target,
      features: ["Vendor Scoring", "Price Prediction", "Lead Time Analysis", "Spend Analytics"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Sentiment Analysis",
      description: "NLP-powered sentiment detection for customer feedback, reviews, and social media monitoring.",
      icon: MessageSquare,
      features: ["Text Classification", "Opinion Mining", "Emotion Detection", "Trend Analysis"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Predictive Maintenance",
      description: "Machine learning models to predict equipment failures and optimize maintenance schedules.",
      icon: Sparkles,
      features: ["Anomaly Detection", "Failure Prediction", "Maintenance Scheduling", "Cost Reduction"],
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Customer Analytics",
      description: "Advanced customer segmentation, churn prediction, and lifetime value analysis using ML algorithms.",
      icon: BarChart3,
      features: ["Customer Segmentation", "Churn Prediction", "CLV Analysis", "Behavior Patterns"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const technologies = ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "NLTK", "OpenAI API", "Jupyter"];

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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI & Machine Learning Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge AI/ML solutions for demand forecasting, sentiment analysis, and predictive modeling 
            to transform your data into actionable intelligence.
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

      {/* Solutions Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature, idx) => (
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12 text-center shadow-elegant animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Leverage AI for Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's explore how machine learning can transform your operations and decision-making.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/#contact")}
            className="bg-white text-purple-600 hover:bg-white/90 font-bold px-8"
          >
            Start Your AI Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIMLSolutions;

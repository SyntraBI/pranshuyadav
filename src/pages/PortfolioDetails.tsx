import { useState } from "react";
import { ArrowLeft, Check, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PortfolioDetails = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");

  const projectImages = [
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      title: "Analytics Dashboard",
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Data Visualization",
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      title: "Business Intelligence",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$999",
      period: "per project",
      description: "Perfect for small projects and startups",
      features: [
        "Basic Dashboard Development",
        "Data Visualization (up to 5 charts)",
        "Standard Data Integration",
        "Email Support",
        "1 Revision Round",
        "2-3 Week Delivery",
      ],
      support: "Email Support (48h response)",
      technical: "Power BI or Tableau",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$2,499",
      period: "per project",
      description: "Most popular for growing businesses",
      features: [
        "Advanced Dashboard Development",
        "Custom Data Visualizations (unlimited)",
        "Multi-Source Data Integration",
        "Real-time Data Refresh",
        "Priority Email & Chat Support",
        "3 Revision Rounds",
        "SAP HANA Integration",
        "ETL Process Setup",
        "1-2 Week Delivery",
      ],
      support: "Priority Support (24h response)",
      technical: "Power BI, Tableau, SAP HANA, Custom APIs",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$5,999",
      period: "per project",
      description: "Enterprise-grade solutions with full support",
      features: [
        "Enterprise Dashboard Suite",
        "Custom AI/ML Integration",
        "Advanced Analytics & Forecasting",
        "Full SAP HANA Integration",
        "Automated Data Pipelines",
        "24/7 Dedicated Support",
        "Unlimited Revisions",
        "Team Training Sessions",
        "Custom Branding & White-labeling",
        "Performance Optimization",
        "5-7 Day Delivery",
      ],
      support: "24/7 Dedicated Support Manager",
      technical: "Full Stack (Power BI, SAP HANA, Python, R, Custom ML Models)",
      highlighted: false,
    },
  ];

  const industryExpertise = [
    "Manufacturing & Production",
    "Retail & E-commerce",
    "Finance & Banking",
    "Healthcare & Pharmaceuticals",
    "Supply Chain & Logistics",
    "Technology & SaaS",
  ];

  const technicalStack = [
    "Power BI",
    "SAP HANA",
    "Tableau",
    "Python (Pandas, NumPy)",
    "SQL & PostgreSQL",
    "Azure & AWS",
    "APIs & REST Services",
    "ETL Tools (SSIS, Talend)",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2 hover:bg-accent/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio & Services
          </h1>
          <div className="w-24" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Image Carousel */}
      <section className="container mx-auto px-6 py-12">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projectImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-white text-3xl font-serif font-bold p-8">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Your Data Into Actionable Insights
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 5 years of experience in data analytics and business intelligence, 
              I specialize in creating powerful, intuitive dashboards that drive business decisions. 
              From SAP HANA integration to custom AI/ML models, I deliver solutions that scale with your business.
            </p>
          </div>

          {/* Technical Stack */}
          <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 shadow-elegant">
            <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-accent" />
              Technical Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-muted to-muted/50 hover:from-accent/20 hover:to-primary/20 transition-all"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Industry Experience */}
          <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 shadow-elegant">
            <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-accent" />
              Industry Experience
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industryExpertise.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-foreground font-medium"
                >
                  <Check className="h-5 w-5 text-accent" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible pricing options designed to meet your specific needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 transition-all hover:scale-105 ${
                plan.highlighted
                  ? "border-accent shadow-glow bg-gradient-to-br from-accent/5 to-primary/5"
                  : "border-border bg-card hover:border-accent/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">/{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-sm mb-3 text-accent">Features:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-sm mb-2 text-accent">Support:</h4>
                  <p className="text-sm text-muted-foreground">{plan.support}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-sm mb-2 text-accent">Technical:</h4>
                  <p className="text-sm text-muted-foreground">{plan.technical}</p>
                </div>
              </div>

              <Button
                onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg"
                    : ""
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center shadow-glow">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Let's discuss your project and create a custom solution that fits your needs.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/")}
            className="bg-white text-primary hover:bg-white/90 shadow-xl font-bold px-8"
          >
            Contact Me Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetails;

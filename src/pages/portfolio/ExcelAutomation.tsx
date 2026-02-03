import { ArrowLeft, FileSpreadsheet, Zap, RefreshCw, Database, CheckCircle, Clock, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ExcelAutomation = () => {
  const navigate = useNavigate();

  const automations = [
    {
      title: "VBA Macro Development",
      description: "Custom VBA macros to automate repetitive tasks, data processing, and report generation - saving hours of manual work.",
      icon: Zap,
      features: ["One-Click Reports", "Data Cleaning", "Auto Formatting", "Batch Processing"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Automated Data Validation",
      description: "Smart data validation rules and error checking to ensure data integrity and quality across all spreadsheets.",
      icon: CheckCircle,
      features: ["Error Detection", "Data Validation", "Duplicate Removal", "Format Checking"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Excel to SQL Integration",
      description: "Seamless pipelines to import/export data between Excel and SQL databases with automated scheduling.",
      icon: Database,
      features: ["Data Import/Export", "SQL Queries", "Scheduled Updates", "Data Sync"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "KPI Dashboard Templates",
      description: "Dynamic Excel dashboards with pivot tables, charts, and slicers for real-time performance monitoring.",
      icon: Settings,
      features: ["Pivot Tables", "Dynamic Charts", "Interactive Slicers", "Auto Refresh"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Scheduled Report Generation",
      description: "Automated report generation and email distribution at scheduled intervals without manual intervention.",
      icon: Clock,
      features: ["Auto Generation", "Email Distribution", "PDF Export", "Scheduled Tasks"],
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Data Transformation Tools",
      description: "Power Query and VBA solutions to transform raw data into structured, analysis-ready formats.",
      icon: RefreshCw,
      features: ["Power Query", "Data Reshaping", "Text to Columns", "Merge & Append"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const technologies = ["VBA", "Power Query", "Excel Formulas", "Power Pivot", "Python (openpyxl)", "SQL Integration"];

  const benefits = [
    { stat: "80%", label: "Time Saved" },
    { stat: "99%", label: "Error Reduction" },
    { stat: "100+", label: "Hours Automated" }
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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
            <FileSpreadsheet className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Excel Automation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful VBA macros and automation tools to eliminate manual work, reduce errors, 
            and transform your Excel workflows into efficient, automated processes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {benefit.stat}
              </div>
              <div className="text-muted-foreground text-sm">{benefit.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: "150ms" }}>
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Automations Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {automations.map((automation, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${automation.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <automation.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                {automation.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {automation.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {automation.features.map((feature, idx) => (
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-12 text-center shadow-elegant animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Tired of Manual Excel Work?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's automate your spreadsheets and free up your time for more important tasks.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/#contact")}
            className="bg-white text-emerald-600 hover:bg-white/90 font-bold px-8"
          >
            Automate Your Workflow
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExcelAutomation;

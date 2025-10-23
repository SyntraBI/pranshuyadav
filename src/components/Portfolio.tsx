import { Button } from "@/components/ui/button";
import { BarChart3, Brain, FileSpreadsheet, Code, Database, MessageSquare, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      icon: BarChart3,
      title: "Power BI Dashboards",
      description: "Dynamic BI dashboards for Sales, Finance, HRM, Inventory & Procurement with advanced DAX and interactive visuals.",
      tags: ["Power BI", "DAX", "Analytics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Demand forecasting, sentiment analysis, and predictive models using Python, scikit-learn, and TensorFlow.",
      tags: ["Python", "ML", "NLP"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileSpreadsheet,
      title: "Excel Automation",
      description: "Automated data validation, Excel to SQL pipelines, and KPI dashboards with VBA and Python integration.",
      tags: ["Excel", "VBA", "Automation"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Code,
      title: "Web & API Solutions",
      description: "RESTful APIs, web portals with real-time data feeds, and dashboard authentication systems.",
      tags: ["API", "Web Dev", "Integration"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "Data warehouse setup, OLAP/OLTP design, query optimization, and pipeline monitoring.",
      tags: ["SQL", "ETL", "Architecture"],
      color: "from-red-500 to-rose-500"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent chatbots using AIML, LangChain, and OpenAI API for customer support and automation.",
      tags: ["AI", "NLP", "Automation"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Portfolio & Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing data-driven solutions across analytics, AI/ML, and automation
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>

                {/* Project title */}
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View link */}
                <div className="flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <p className="text-muted-foreground mb-6">
              Want to see live demos and detailed case studies?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

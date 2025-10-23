import { Database, Brain, Zap, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Expert in ETL/ELT pipelines, data warehousing, and integration across SAP HANA, Oracle, AWS, and more."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Building predictive models, NLP solutions, and deploying ML applications with Python and modern frameworks."
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamlining workflows with Python scripts, Power Automate, and intelligent process automation."
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Creating powerful insights with Power BI, Tableau, and custom analytics dashboards."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a Data Engineer and Analyst with hands-on expertise in Python, AI/ML, and Automation, 
              building end-to-end data ecosystems — from data extraction and transformation to intelligent 
              reporting and workflow automation.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Experience summary */}
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 border border-border/50 animate-fade-in">
            <p className="text-foreground text-center leading-relaxed">
              <span className="font-semibold text-accent">Specialized focus:</span> Performance, scalability, and real business impact. 
              Delivering data-driven insights, predictive models, and intelligent applications across 
              <span className="font-medium"> FMCG, Retail, Finance, Manufacturing, HR, and B2B</span> industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

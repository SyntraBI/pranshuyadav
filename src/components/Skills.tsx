import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Data Engineering",
      color: "from-blue-500 to-cyan-500",
      skills: ["SAP HANA", "Oracle", "AWS", "MySQL", "ETL/ELT", "Data Warehousing", "OLAP/OLTP"]
    },
    {
      category: "Visualization",
      color: "from-purple-500 to-pink-500",
      skills: ["Power BI", "Tableau", "DAX", "Excel Dashboards", "Interactive Reports"]
    },
    {
      category: "Python & AI/ML",
      color: "from-emerald-500 to-teal-500",
      skills: ["pandas", "scikit-learn", "TensorFlow", "PyTorch", "NLP", "Time Series", "Flask/FastAPI"]
    },
    {
      category: "Automation & Integration",
      color: "from-amber-500 to-orange-500",
      skills: ["Python Scripts", "Power Automate", "REST APIs", "Workflow Automation", "CI/CD"]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Core Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent data solutions
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category title with gradient */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>

                {/* Skills badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional expertise */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">Industries:</span> FMCG • Retail • Manufacturing • Finance • Production • B2B • HRM • CRM • MIS
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Modules:</span> Sales • Inventory • Finance • Vendor • Manufacturing • HR • System Integration • Marketing • Procurement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

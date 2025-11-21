import { Badge } from "@/components/ui/badge";
import { TrendingUp, Package, DollarSign, Handshake, Factory, Users, Network, Target } from "lucide-react";

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

          {/* Modules with Flip Cards */}
          <div className="mt-20">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Domain Expertise & Modules
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Sales Analytics",
                  Icon: TrendingUp,
                  details: "Revenue trends, forecasting, product performance"
                },
                {
                  title: "Inventory & Supply Chain",
                  Icon: Package,
                  details: "Stock movement, demand planning, ageing, procurement"
                },
                {
                  title: "Finance Analytics",
                  Icon: DollarSign,
                  details: "Profitability, costing, budgeting, variance analysis"
                },
                {
                  title: "Vendor & Procurement",
                  Icon: Handshake,
                  details: "Vendor performance, PO/PR dashboard, spend analysis"
                },
                {
                  title: "Manufacturing Analytics",
                  Icon: Factory,
                  details: "Production efficiency, WIP, process optimization"
                },
                {
                  title: "HR Analytics",
                  Icon: Users,
                  details: "Attendance, payroll insights, workforce KPIs"
                },
                {
                  title: "System Integration",
                  Icon: Network,
                  details: "SAP HANA, APIs, Dataflows, Power BI ETL"
                },
                {
                  title: "Marketing Analytics",
                  Icon: Target,
                  details: "Campaign performance, customer segmentation"
                }
              ].map((module, index) => (
                <div
                  key={index}
                  className="group h-48 perspective-1000 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-card to-card/50 border border-border p-6 flex flex-col items-center justify-center text-center shadow-elegant">
                      <module.Icon className="w-12 h-12 mb-3 text-accent" strokeWidth={1.5} />
                      <h4 className="font-serif text-lg font-semibold text-foreground">
                        {module.title}
                      </h4>
                    </div>
                    
                    {/* Back of card */}
                    <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 p-6 flex items-center justify-center text-center rotate-y-180 shadow-elegant">
                      <p className="text-sm text-foreground leading-relaxed">
                        {module.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional expertise */}
          <div className="mt-16 text-center animate-fade-in">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Industries:</span> FMCG • Retail • Manufacturing • Finance • Production • B2B • HRM • CRM • MIS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

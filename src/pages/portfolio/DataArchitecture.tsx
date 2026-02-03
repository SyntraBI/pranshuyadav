import { ArrowLeft, Database, Layers, GitBranch, Search, Shield, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DataArchitecture = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Data Warehouse Design",
      description: "Scalable data warehouse architecture with star/snowflake schema design for efficient analytics and reporting.",
      icon: Layers,
      features: ["Star Schema", "Snowflake Schema", "Fact Tables", "Dimension Tables"],
      color: "from-red-500 to-rose-500"
    },
    {
      title: "OLAP/OLTP Optimization",
      description: "Optimized database designs for both analytical processing (OLAP) and transactional workloads (OLTP).",
      icon: Database,
      features: ["OLAP Cubes", "OLTP Tuning", "Indexing Strategy", "Partitioning"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "ETL Pipeline Development",
      description: "Robust ETL pipelines for data extraction, transformation, and loading with error handling and monitoring.",
      icon: GitBranch,
      features: ["Data Extraction", "Transformation", "Loading", "Error Handling"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Query Optimization",
      description: "Advanced SQL optimization techniques to improve query performance and reduce execution times.",
      icon: Search,
      features: ["Index Optimization", "Query Rewriting", "Execution Plans", "Performance Tuning"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Governance",
      description: "Comprehensive data management policies, security protocols, and compliance frameworks.",
      icon: Shield,
      features: ["Data Security", "Access Control", "Audit Trails", "Compliance"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Pipeline Monitoring",
      description: "Real-time monitoring dashboards for data pipeline health, throughput, and error tracking.",
      icon: BarChart3,
      features: ["Health Monitoring", "Alerting", "Throughput Tracking", "Error Logs"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const technologies = ["SQL Server", "PostgreSQL", "SAP HANA", "Azure Data Factory", "SSIS", "Talend", "Snowflake", "Apache Airflow"];

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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mx-auto mb-6">
            <Database className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
            Data Architecture
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade data architecture solutions including warehouse design, ETL development, 
            query optimization, and comprehensive data management strategies.
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

      {/* Architecture Diagram */}
      <section className="container mx-auto px-6 pb-12">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
          <h3 className="font-serif text-xl font-semibold mb-6 text-center">Data Flow Architecture</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <div className="px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-500/30 text-blue-400">
              Source Systems
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="px-4 py-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30 text-emerald-400">
              ETL Pipeline
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="px-4 py-2 bg-purple-500/20 rounded-lg border border-purple-500/30 text-purple-400">
              Data Warehouse
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="px-4 py-2 bg-amber-500/20 rounded-lg border border-amber-500/30 text-amber-400">
              Analytics & BI
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl p-12 text-center shadow-elegant animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Need a Scalable Data Solution?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's architect a data infrastructure that grows with your business.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/#contact")}
            className="bg-white text-red-600 hover:bg-white/90 font-bold px-8"
          >
            Discuss Your Architecture
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DataArchitecture;

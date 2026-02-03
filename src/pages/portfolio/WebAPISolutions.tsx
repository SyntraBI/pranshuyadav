import { ArrowLeft, Code, Globe, Server, Lock, Zap, Database, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WebAPISolutions = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "RESTful API Development",
      description: "Design and develop robust REST APIs with proper authentication, documentation, and error handling for seamless integration.",
      icon: Server,
      features: ["REST Architecture", "JWT Authentication", "API Documentation", "Rate Limiting"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Full Stack Web Portals",
      description: "Complete web application development with React frontend, Node.js backend, and real-time data synchronization.",
      icon: Globe,
      features: ["React/Next.js", "Node.js/Express", "Real-time Updates", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Dashboard Authentication",
      description: "Secure authentication systems with role-based access control, SSO integration, and multi-factor authentication.",
      icon: Lock,
      features: ["RBAC", "OAuth 2.0", "SSO Integration", "MFA Support"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Third-Party Integrations",
      description: "Seamless integration with external services like payment gateways, CRM systems, and enterprise software.",
      icon: Link,
      features: ["Payment Gateways", "CRM Integration", "ERP Connectors", "Webhook Handlers"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Real-Time Data Feeds",
      description: "WebSocket implementations for live data streaming, notifications, and real-time dashboard updates.",
      icon: Zap,
      features: ["WebSockets", "Live Notifications", "Data Streaming", "Event-Driven"],
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Database Integration",
      description: "Backend APIs with PostgreSQL, MySQL, MongoDB integration for efficient data storage and retrieval.",
      icon: Database,
      features: ["PostgreSQL", "MongoDB", "Query Optimization", "Data Caching"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const technologies = ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "REST API", "GraphQL", "WebSockets"];

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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Web & API Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end web development and API integration services, from RESTful APIs to full-stack 
            web portals with real-time data capabilities and secure authentication.
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 text-center shadow-elegant animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Need a Custom Web Solution?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's build a robust web application or API that powers your business forward.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/#contact")}
            className="bg-white text-amber-600 hover:bg-white/90 font-bold px-8"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebAPISolutions;

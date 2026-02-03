import { ArrowLeft, Code, Users, Building, Shield, LayoutDashboard, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WebApplications = () => {
  const navigate = useNavigate();

  const applications = [
    {
      title: "HRMS for Hotels",
      description: "Complete Human Resource Management System designed for the hospitality industry with shift management, attendance tracking, and payroll integration.",
      icon: Building,
      features: ["Shift Scheduling", "Attendance Tracking", "Payroll Management", "Leave Management"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Multi-Role Admin Portal",
      description: "Enterprise admin dashboard with role-based access control, allowing different user levels to access specific features.",
      icon: Users,
      features: ["Role-Based Access", "User Management", "Activity Logs", "Permission Control"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Data Portals",
      description: "Web portals with live data updates, WebSocket integration, and real-time notifications for critical business metrics.",
      icon: LayoutDashboard,
      features: ["Live Updates", "Real-Time Alerts", "Dashboard Widgets", "Data Visualization"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Inventory Management System",
      description: "Full-featured inventory system with stock tracking, barcode scanning, and automated reorder notifications.",
      icon: Settings,
      features: ["Stock Tracking", "Barcode Support", "Reorder Alerts", "Multi-Location"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Customer Portal",
      description: "Self-service customer portal for order tracking, support tickets, and account management.",
      icon: Users,
      features: ["Order Tracking", "Support Tickets", "Account Settings", "Document Access"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Secure Enterprise Apps",
      description: "Security-first web applications with encryption, audit trails, and compliance with industry standards.",
      icon: Shield,
      features: ["Data Encryption", "Audit Trails", "2FA Support", "GDPR Compliance"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const technologies = ["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Next.js", "Express", "Socket.io"];

  const highlights = [
    { stat: "10+", label: "Applications Built" },
    { stat: "50K+", label: "Users Served" },
    { stat: "99.9%", label: "Uptime" }
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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mx-auto mb-6">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Web Applications
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dynamic, multi-role web portals and enterprise applications with role-based access control, 
            real-time data management, and industry-specific solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                {item.stat}
              </div>
              <div className="text-muted-foreground text-sm">{item.label}</div>
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

      {/* Applications Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <app.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                {app.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {app.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {app.features.map((feature, idx) => (
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-12 text-center shadow-elegant animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's create a powerful, scalable web solution tailored to your business needs.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/#contact")}
            className="bg-white text-pink-600 hover:bg-white/90 font-bold px-8"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebApplications;

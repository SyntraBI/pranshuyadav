import { ArrowLeft, MessageSquare, Bot, Brain, Headphones, ShoppingCart, HelpCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AIChatbots = () => {
  const navigate = useNavigate();

  const chatbots = [
    {
      title: "Customer Support Bot",
      description: "24/7 intelligent customer support chatbot that handles FAQs, ticket routing, and escalation to human agents.",
      icon: Headphones,
      features: ["FAQ Handling", "Ticket Routing", "Multi-language", "Human Handoff"],
      color: "from-indigo-500 to-violet-500"
    },
    {
      title: "E-commerce Assistant",
      description: "Shopping assistant that helps customers find products, compare options, and complete purchases.",
      icon: ShoppingCart,
      features: ["Product Search", "Recommendations", "Order Status", "Cart Assistance"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Knowledge Base Bot",
      description: "Document Q&A chatbot that answers questions from your company's knowledge base and documentation.",
      icon: HelpCircle,
      features: ["Document Search", "Context Awareness", "Citation Links", "Learning Updates"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Lead Generation Bot",
      description: "Conversational bot that qualifies leads, captures information, and schedules appointments automatically.",
      icon: Sparkles,
      features: ["Lead Qualification", "Form Filling", "Calendar Integration", "CRM Sync"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Internal HR Assistant",
      description: "Employee-facing bot for HR queries, leave requests, policy information, and onboarding assistance.",
      icon: Bot,
      features: ["Leave Requests", "Policy FAQ", "Onboarding", "Payroll Queries"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered Analytics Bot",
      description: "Natural language interface to query your business data and generate insights on demand.",
      icon: Brain,
      features: ["NL to SQL", "Data Insights", "Report Generation", "Trend Analysis"],
      color: "from-red-500 to-rose-500"
    }
  ];

  const technologies = ["OpenAI API", "LangChain", "AIML", "Dialogflow", "Python", "Node.js", "Vector Databases", "RAG"];

  const features = [
    { icon: "🧠", title: "Natural Language Understanding", desc: "Advanced NLP for human-like conversations" },
    { icon: "🔄", title: "Context Retention", desc: "Remembers conversation history for coherent responses" },
    { icon: "🌐", title: "Multi-Platform", desc: "Deploy on web, WhatsApp, Slack, Teams & more" },
    { icon: "📊", title: "Analytics Dashboard", desc: "Track conversations, satisfaction & performance" }
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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <MessageSquare className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            AI Chatbots
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intelligent conversational AI powered by LangChain, OpenAI, and custom NLP solutions 
            for customer support, automation, and enhanced user engagement.
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

      {/* Key Features */}
      <section className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl bg-card border border-border text-center animate-fade-in hover:border-accent/30 transition-colors"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chatbots Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {chatbots.map((chatbot, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${chatbot.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <chatbot.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                {chatbot.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {chatbot.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {chatbot.features.map((feature, idx) => (
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl p-12 text-center shadow-elegant animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Automate Your Conversations?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's build an intelligent chatbot that works for your business 24/7.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/#contact")}
            className="bg-white text-indigo-600 hover:bg-white/90 font-bold px-8"
          >
            Build Your Chatbot
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIChatbots;

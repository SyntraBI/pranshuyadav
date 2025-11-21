import { useState } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface Message {
  type: "bot" | "user";
  content: string;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
}

const CATEGORIES = [
  "DATA ANALYST",
  "BUSINESS INTELLIGENCE",
  "AI/ML",
  "WEB DESIGNING",
  "AUTOMATION",
  "DATA MANAGEMENT",
  "PORTFOLIO & PROJECTS",
];

const CATEGORY_QUESTIONS: Record<string, string[]> = {
  "DATA ANALYST": [
    "What tools do you use for data analysis?",
    "Can you help with data visualization?",
    "Do you work with SQL and Python?",
  ],
  "BUSINESS INTELLIGENCE": [
    "Do you create Power BI dashboards?",
    "Can you help with SAP HANA integration?",
    "What BI tools do you specialize in?",
  ],
  "AI/ML": [
    "What ML frameworks do you work with?",
    "Can you build predictive models?",
    "Do you offer AI consulting services?",
  ],
  "WEB DESIGNING": [
    "Do you build responsive websites?",
    "Can you develop dynamic web applications?",
    "What technologies do you use?",
  ],
  "AUTOMATION": [
    "What processes can you automate?",
    "Do you work with RPA tools?",
    "Can you automate business workflows?",
  ],
  "DATA MANAGEMENT": [
    "Do you offer database design services?",
    "Can you help with ETL processes?",
    "What data warehousing solutions do you provide?",
  ],
  "PORTFOLIO & PROJECTS": [],
};

interface ChatbotProps {
  onClose: () => void;
}

export const Chatbot = ({ onClose }: ChatbotProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Thanks For Reaching Us! What Would You Like To Know?",
    },
  ]);
  const [stage, setStage] = useState<"category" | "questions" | "contact" | "complete">("category");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
  });

  const handleCategorySelect = (category: string) => {
    if (category === "PORTFOLIO & PROJECTS") {
      navigate("/portfolio-details");
      onClose();
      return;
    }
    
    setSelectedCategory(category);
    setMessages((prev) => [
      ...prev,
      { type: "user", content: category },
      {
        type: "bot",
        content: `Great! I can help you with ${category}. Here are some common questions:`,
      },
    ]);
    setStage("questions");
  };

  const handleQuestionSelect = (question: string) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", content: question },
      {
        type: "bot",
        content: "I'd love to discuss this with you in detail! Please share your contact information so our team can reach out to you shortly.",
      },
    ]);
    setStage("contact");
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.phone) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: `Thank you, ${contactForm.name}! Our team will contact you shortly at ${contactForm.email}. We appreciate your interest!`,
        },
      ]);
      setStage("complete");
      toast({
        title: "Contact Information Received",
        description: "Our team will reach out to you soon!",
      });
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-gradient-to-br from-card via-card to-card/95 border-2 border-border/50 rounded-2xl shadow-elegant flex flex-col z-50 animate-in slide-in-from-bottom-5 backdrop-blur-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground p-5 rounded-t-2xl flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Pranshu Yadav</h3>
            <p className="text-xs opacity-90 font-medium">Data Engineer & AI Developer</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-primary-foreground hover:bg-white/20 rounded-full relative z-10"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-transparent to-background/50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 shadow-md ${
                msg.type === "user"
                  ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                  : "bg-gradient-to-br from-muted to-muted/70 text-foreground border border-border/50"
              }`}
            >
              <p className="text-sm font-medium leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}

        {/* Category Selection */}
        {stage === "category" && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            {CATEGORIES.map((category, idx) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                onClick={() => handleCategorySelect(category)}
                className="text-xs h-auto py-3 px-4 whitespace-normal font-semibold hover:bg-gradient-to-br hover:from-accent/20 hover:to-primary/20 hover:border-accent transition-all hover:scale-105 hover:shadow-lg animate-in fade-in slide-in-from-bottom-3"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Questions Selection */}
        {stage === "questions" && selectedCategory && (
          <div className="space-y-3 mt-4">
            {CATEGORY_QUESTIONS[selectedCategory].map((question, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                onClick={() => handleQuestionSelect(question)}
                className="w-full text-xs text-left h-auto py-3 px-4 whitespace-normal justify-start font-medium hover:bg-gradient-to-r hover:from-accent/10 hover:to-primary/10 hover:border-accent transition-all hover:translate-x-1 animate-in fade-in slide-in-from-left-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {question}
              </Button>
            ))}
          </div>
        )}

        {/* Contact Form */}
        {stage === "contact" && (
          <form onSubmit={handleSubmitContact} className="space-y-4 mt-4 animate-in fade-in slide-in-from-bottom-3">
            <Input
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
              required
              className="border-2 focus:border-accent transition-colors bg-background/50"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
              required
              className="border-2 focus:border-accent transition-colors bg-background/50"
            />
            <Input
              type="tel"
              placeholder="Your Phone"
              value={contactForm.phone}
              onChange={(e) =>
                setContactForm({ ...contactForm, phone: e.target.value })
              }
              required
              className="border-2 focus:border-accent transition-colors bg-background/50"
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Send className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

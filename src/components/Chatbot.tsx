import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
};

interface ChatbotProps {
  onClose: () => void;
}

export const Chatbot = ({ onClose }: ChatbotProps) => {
  const { toast } = useToast();
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
    <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-5">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Pranshu Yadav</h3>
          <p className="text-xs opacity-90">Data Engineer & AI Developer</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-primary-foreground hover:bg-primary-foreground/20"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.type === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}

        {/* Category Selection */}
        {stage === "category" && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                onClick={() => handleCategorySelect(category)}
                className="text-xs h-auto py-2 px-3 whitespace-normal"
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Questions Selection */}
        {stage === "questions" && selectedCategory && (
          <div className="space-y-2 mt-4">
            {CATEGORY_QUESTIONS[selectedCategory].map((question, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                onClick={() => handleQuestionSelect(question)}
                className="w-full text-xs text-left h-auto py-2 px-3 whitespace-normal justify-start"
              >
                {question}
              </Button>
            ))}
          </div>
        )}

        {/* Contact Form */}
        {stage === "contact" && (
          <form onSubmit={handleSubmitContact} className="space-y-3 mt-4">
            <Input
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
              required
            />
            <Input
              type="tel"
              placeholder="Your Phone"
              value={contactForm.phone}
              onChange={(e) =>
                setContactForm({ ...contactForm, phone: e.target.value })
              }
              required
            />
            <Button type="submit" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

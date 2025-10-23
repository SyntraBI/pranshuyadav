import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Globe, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "yourwebsite.com",
      link: "https://yourwebsite.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-XXXX-XXXXXX",
      link: "tel:+91XXXXXXXXXX"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on data engineering, AI/ML, automation, or analytics projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="bg-background rounded-2xl p-8 border border-border shadow-elegant">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input 
                      placeholder="Your name"
                      className="bg-card border-border focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-card border-border focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-card border-border focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact info */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-elegant"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Tagline */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
                <p className="font-serif text-xl font-semibold text-foreground mb-2 italic">
                  "From Raw Data to Intelligent Automation"
                </p>
                <p className="text-muted-foreground">
                  Building smart data systems with AI and engineering excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

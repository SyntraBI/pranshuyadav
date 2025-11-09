import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A complete data-to-decision expert — highly reliable and professional in every aspect.",
      author: "Senior Manager",
      company: "FMCG Industry"
    },
    {
      quote: "Automated 80% of our manual reporting with Python and Power BI. Incredible efficiency gains.",
      author: "Data Analytics Lead",
      company: "Retail Sector"
    },
    {
      quote: "Exceptional in both technical implementation and business understanding. A rare combination.",
      author: "CTO",
      company: "Manufacturing"
    },
    {
      quote: "Quality of the product delivered was best in class and timely delivered. Exceeded all expectations.",
      author: "Project Director",
      company: "Enterprise Solutions"
    },
    {
      quote: "Developed a dynamic multi-role website that transformed our operations. Outstanding full-stack capabilities.",
      author: "IT Manager",
      company: "Web Development Project"
    },
    {
      quote: "The HRMS system built for our hotel completely streamlined our operations. Perfect solution for our industry needs.",
      author: "HR Director",
      company: "Hotel Industry"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What clients say about working together
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-accent" />
                </div>

                {/* Quote text */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row of testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(3, 6).map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-accent" />
                </div>

                {/* Quote text */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

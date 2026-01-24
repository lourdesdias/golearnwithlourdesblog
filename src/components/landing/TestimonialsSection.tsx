import { ArrowRight, Play } from "lucide-react";

const testimonials = [
  {
    name: "Giovanni B.",
    result: "$8,321 Saved",
    quote: "We used to spend $1,500 per night on hotels. Now we pay $300 for the same quality. This has completely changed how our family travels.",
  },
  {
    name: "Elijah",
    result: "Earns $10K+/month",
    quote: "I was skeptical at first, but within 18 months I replaced my corporate income. Now I work from anywhere and travel with my family whenever we want.",
  },
  {
    name: "53-Year Travel Expert",
    result: "Industry Veteran",
    quote: "After 53 years in the travel industry, I've never seen wholesale access like this made available to everyday families. It's revolutionary.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lives Transformed: Hear From Our Thriving Community
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real families. Real savings. Real freedom.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Placeholder */}
              <div className="aspect-video bg-teal-900 flex items-center justify-center relative">
                <div className="absolute inset-0 gradient-hero opacity-80" />
                <button
                  className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                  aria-label="Play testimonial video"
                >
                  <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-semibold text-foreground mb-1">
                  {testimonial.name}
                </p>
                <p className="text-2xl font-bold text-accent mb-3">
                  {testimonial.result}
                </p>
                <p className="text-muted-foreground text-sm italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wanderpreneur.org/webinar"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-500 hover:via-gold-400 hover:to-gold-500 text-black text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
          >
            See How You Can Be Next
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

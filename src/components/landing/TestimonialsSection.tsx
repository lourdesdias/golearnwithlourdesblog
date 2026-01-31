import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Giovanni B.",
    result: "$8,321 Saved",
    quote: "We used to spend $1,500 per night on hotels. Now we pay $300 for the same quality. This has completely changed how our family travels.",
    videoUrl: "https://storage.googleapis.com/msgsndr/jl8KxwwRlu6AL9Saacdc/media/685df8235c72d2bd8430333f.mp4",
    posterUrl: "https://storage.googleapis.com/msgsndr/jl8KxwwRlu6AL9Saacdc/media/685df8235c72d2bd8430333f.mp4#t=5",
  },
  {
    name: "Elijah",
    result: "Earns $10K+/month",
    quote: "I was skeptical at first, but within 18 months I replaced my corporate income. Now I work from anywhere and travel with my family whenever we want.",
    videoUrl: "https://storage.googleapis.com/msgsndr/jl8KxwwRlu6AL9Saacdc/media/68fc556cd9a00d039973793b.mp4",
  },
  {
    name: "53-Year Travel Expert",
    result: "Industry Veteran",
    quote: "After 53 years in the travel industry, I've never seen wholesale access like this made available to everyday families. It's revolutionary.",
    videoUrl: "https://storage.googleapis.com/msgsndr/jl8KxwwRlu6AL9Saacdc/media/68fc57bbf1ef98075802046a.mp4",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Lives Transformed: Hear From Our Thriving Community
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Real families. Real savings. Real freedom.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Video Player */}
              <div className="aspect-video bg-gradient-to-br from-cyan-800 to-cyan-900 relative">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster={testimonial.videoUrl + "#t=3"}
                >
                  <source src={testimonial.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="font-bold text-foreground mb-2">
                  {testimonial.name}
                </p>
                <p 
                  className="text-2xl font-extrabold mb-4"
                  style={{
                    color: '#c7a043',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2), 0 0 20px rgba(199,160,67,0.3)'
                  }}
                >
                  {testimonial.result}
                </p>
                <p className="text-muted-foreground text-sm italic leading-relaxed">
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
            className="inline-flex items-center gap-3 font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-white"
            style={{
              background: 'linear-gradient(135deg, #f0d976 0%, #c7a043 50%, #a68635 100%)',
              boxShadow: '0 8px 25px rgba(199, 160, 67, 0.4), inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2)',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
            aria-label="See how you can achieve similar results"
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

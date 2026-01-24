import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-destination.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury tropical destination with overwater bungalows"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Pre-headline */}
        <p className="text-sm uppercase tracking-widest text-gold-400 mb-4 animate-fade-in font-medium">
          For Busy Parents, Entrepreneurs & Faith-Driven Families
        </p>

        {/* Main headline - Two colors like the original */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up max-w-5xl mx-auto">
          <span className="text-white">Travel for 70% Less. Earn Residual Income.</span>
          <br />
          <span className="text-gold-400">Deduct Every Trip. Build Generational Wealth.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed animate-fade-in">
          Discover the faith-driven system helping families access luxury travel at wholesale rates, legally deduct family trips as business expenses, and build legacy income that passes to their children
        </p>

        {/* CTA Button - Metallic Gold */}
        <a
          href="https://wanderpreneur.org/webinar"
          className="inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-500 text-black text-lg md:text-xl px-10 md:px-12 py-4 md:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-bold mb-6"
        >
          Watch The FREE Training Now
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Trust line */}
        <p className="text-sm text-gray-300 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <span className="text-gold-400">✓</span> No credit card required
          </span>
          <span className="flex items-center gap-1">
            <span className="text-gold-400">✓</span> Instant access
          </span>
          <span className="flex items-center gap-1">
            <span className="text-gold-400">✓</span> 100% faith-aligned
          </span>
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

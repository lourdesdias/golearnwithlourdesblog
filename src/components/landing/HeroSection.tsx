import { ArrowRight, Camera } from "lucide-react";
import heroImage from "@/assets/hero-destination.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Show hero image if available, otherwise show placeholder */}
        <img
          src={heroImage}
          alt="Luxury tropical destination with overwater bungalows"
          className="w-full h-full object-cover"
          loading="eager"
        />
        
        {/* Placeholder overlay for custom family photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-cyan-900/80" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center max-w-7xl">
        {/* Pre-headline */}
        <p className="text-sm md:text-base uppercase tracking-widest mb-6 animate-fade-in font-semibold metallic-gold">
          For Busy Parents, Entrepreneurs & Faith-Driven Families
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-tight animate-slide-up max-w-5xl mx-auto">
          <span className="text-white">Travel for 70% Less. </span>
          <span className="metallic-gold">Earn Residual Income. </span>
          <br className="hidden md:block" />
          <span className="text-white">Deduct Every Trip. </span>
          <span className="metallic-gold">Build Generational Wealth.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in">
          Discover the faith-driven system helping families access luxury travel at wholesale rates, 
          legally deduct family trips as business expenses, and build legacy income that passes to their children
        </p>

        {/* Hero Image Overlay Text */}
        <div className="mb-10 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-white mb-2">
            How We Travel 4x More While Legally Deducting Every Trip
          </p>
          <p className="text-cyan-200 text-sm md:text-base">
            The Tax-Advantaged Travel System That Changed Everything
          </p>
        </div>

        {/* CTA Button - Primary Cyan */}
        <a
          href="https://wanderpreneur.org/webinar"
          className="btn-primary-cta mb-8"
          aria-label="Watch the free training webinar"
        >
          Watch The FREE Training Now
          <ArrowRight className="w-6 h-6" />
        </a>

        {/* Trust line */}
        <p className="text-sm text-gray-300 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span> No credit card required
          </span>
          <span className="text-gray-500">•</span>
          <span className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span> Instant access
          </span>
          <span className="text-gray-500">•</span>
          <span className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span> 100% faith-aligned
          </span>
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

import { ArrowRight, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient placeholder */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      {/* Floating family icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Users className="w-96 h-96 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Pre-headline */}
        <p className="text-sm uppercase tracking-widest text-teal-200 mb-4 animate-fade-in">
          For Busy Parents, Entrepreneurs & Faith-Driven Families
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up max-w-5xl mx-auto">
          Travel for 70% Less. Earn Residual Income. Deduct Every Trip. Build Generational Wealth.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in">
          Discover the faith-driven system helping families access luxury travel at wholesale rates, legally deduct family trips as business expenses, and build legacy income that passes to their children
        </p>

        {/* Image overlay text */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-10 border border-white/10">
          <p className="text-2xl md:text-3xl font-bold text-white mb-2">
            How We Travel 4x More While Legally Deducting Every Trip
          </p>
          <p className="text-lg text-teal-100">
            The Tax-Advantaged Travel System That Changed Everything
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="https://wanderpreneur.org/webinar"
          className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-primary-foreground text-lg md:text-xl px-10 md:px-12 py-4 md:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-semibold mb-6"
        >
          Watch The FREE Training Now
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Trust line */}
        <p className="text-sm text-teal-200 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <span className="text-teal-300">✓</span> No credit card required
          </span>
          <span className="flex items-center gap-1">
            <span className="text-teal-300">✓</span> Instant access
          </span>
          <span className="flex items-center gap-1">
            <span className="text-teal-300">✓</span> 100% faith-aligned
          </span>
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

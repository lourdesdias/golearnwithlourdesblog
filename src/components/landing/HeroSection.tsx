import { ArrowRight, Plane, Globe, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with teal-to-black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-600 via-teal-800 to-black">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-teal-300 blur-3xl" />
          <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-gold-500 blur-3xl" />
        </div>
      </div>

      {/* Floating travel icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-6xl mx-auto">
          <Plane className="absolute top-1/4 left-10 w-16 h-16 text-gold-400/30 rotate-45" />
          <Globe className="absolute bottom-1/3 right-10 w-20 h-20 text-teal-300/30" />
          <Users className="absolute top-1/3 right-1/4 w-24 h-24 text-gold-400/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Pre-headline */}
        <p className="text-sm uppercase tracking-widest text-gold-400 mb-4 animate-fade-in font-medium">
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
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-10 border border-gold-400/30">
          <p className="text-2xl md:text-3xl font-bold text-gold-400 mb-2">
            How We Travel 4x More While Legally Deducting Every Trip
          </p>
          <p className="text-lg text-teal-100">
            The Tax-Advantaged Travel System That Changed Everything
          </p>
        </div>

        {/* CTA Button - Metallic Gold */}
        <a
          href="https://wanderpreneur.org/webinar"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-500 hover:via-gold-400 hover:to-gold-500 text-black text-lg md:text-xl px-10 md:px-12 py-4 md:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-bold mb-6"
        >
          Watch The FREE Training Now
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Trust line */}
        <p className="text-sm text-teal-200 flex flex-wrap items-center justify-center gap-4">
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

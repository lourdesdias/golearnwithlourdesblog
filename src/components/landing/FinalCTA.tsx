import { ArrowRight, Check, Clock, Lock } from "lucide-react";

const webinarContent = [
  {
    icon: "📋",
    title: "System Overview",
    content: "Complete breakdown of the Freedom Funding Blueprint",
  },
  {
    icon: "🌍",
    title: "Featured Destinations",
    content: "Real examples of 40-90% savings on luxury properties",
  },
  {
    icon: "✈️",
    title: "First Incentive Trip",
    content: "How to earn free travel within your first 90 days",
  },
  {
    icon: "💬",
    title: "Real Success Stories",
    content: "Families just like yours who've transformed their lives",
  },
];

const bonuses = [
  {
    emoji: "📖",
    title: "First Dollar Earned Blueprint",
    description: "Step-by-step guide to your first commission",
    value: "$497",
  },
  {
    emoji: "📝",
    title: "Tax Deduction Checklist",
    description: "Every deduction you may be missing",
    value: "$197",
  },
  {
    emoji: "🧮",
    title: "Legacy Income Calculator",
    description: "Project your 5-year income potential",
    value: "$97",
  },
  {
    emoji: "👥",
    title: "Private Community Access",
    description: "Join thousands of faith-driven entrepreneurs",
    value: "$2,997",
  },
  {
    emoji: "🚀",
    title: "Quick-Start Implementation Guide",
    description: "Launch your business in the first week",
    value: "$997",
  },
  {
    emoji: "📞",
    title: "Personal Onboarding Call",
    description: "One-on-one strategy session to customize your path",
    value: "$997",
  },
];

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 gradient-dark-cyan text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-8 text-white">
            Your FREE Webinar Training Is Waiting
          </h2>
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about the Freedom Funding Blueprint — in one comprehensive, no-fluff presentation.
          </p>
        </div>

        {/* Content Boxes */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {webinarContent.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur border border-gold-400/30 rounded-xl p-8 flex items-start gap-4"
            >
              <Check className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold metallic-gold mb-2 text-lg">{item.title}</h3>
                <p className="text-cyan-100 text-sm leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Box */}
        <div className="bg-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl text-foreground mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              🎁 Your FREE Bonus Package
            </h3>
            <p className="text-muted-foreground">
              Yours to keep just for watching the training...
            </p>
          </div>

          {/* Bonus Items */}
          <div className="space-y-4 mb-10">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gradient-to-r from-white to-cyan-50/30 border-2 border-gray-200 hover:border-cyan-400 rounded-xl p-6 gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {bonus.emoji}
                  </span>
                  <div>
                    <p className="font-bold text-foreground text-lg md:text-xl group-hover:text-cyan-700 transition-colors">
                      {bonus.title}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-14 sm:ml-0 flex-shrink-0">
                  <span className="text-gray-400 text-base font-semibold relative">
                    <span className="relative">
                      {bonus.value}
                      <span className="absolute inset-0 border-t-2 border-red-400 top-1/2"></span>
                    </span>
                  </span>
                  <span 
                    className="inline-block bg-gradient-to-r from-amber-100 to-amber-200 px-4 py-2 rounded-lg shadow-md font-black text-xl md:text-2xl"
                    style={{
                      color: '#c7a043',
                      textShadow: '0 2px 4px rgba(0,0,0,0.15)'
                    }}
                  >
                    FREE
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t-4 border-gold-400 pt-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 text-center sm:text-left">
              <div>
                <p className="text-xl text-muted-foreground font-bold mb-2">TOTAL VALUE:</p>
                <p 
                  className="text-5xl md:text-6xl font-black"
                  style={{
                    background: 'linear-gradient(to bottom, #f0d976, #c7a043)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 4px 8px rgba(199,160,67,0.6))'
                  }}
                >
                  $5,812
                </p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-6 px-10 rounded-2xl shadow-2xl">
                <p className="text-lg font-semibold mb-2 opacity-90">YOUR INVESTMENT TODAY:</p>
                <p 
                  className="text-5xl md:text-6xl font-black tracking-tight"
                  style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                >
                  $0
                </p>
              </div>
            </div>
          </div>

          {/* Claim Box */}
          <div className="bg-cyan-50 p-6 rounded-xl text-center border-2 border-cyan-200">
            <p className="text-foreground font-medium leading-relaxed">
              Click the button below to claim your bonuses and watch the free training now.
            </p>
          </div>
        </div>

        {/* CTA Button - Primary Cyan */}
        <div className="text-center mb-10">
          <a
            href="https://wanderpreneur.org/webinar"
            className="btn-primary-cta"
            aria-label="Watch the free webinar and claim bonuses"
          >
            Watch The FREE Webinar Now
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>

        {/* Urgency Box */}
        <div className="bg-destructive text-destructive-foreground p-8 md:p-10 rounded-xl max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-7 h-7" />
            <span className="text-xl font-bold">Founding Member Bonus Expires Soon</span>
          </div>
          <p className="leading-relaxed">
            The bonuses above are only available for a limited time. Plus, when you watch the full training, you'll learn about an exclusive $4,997 mentorship opportunity that's currently available at a significant discount for founding members.
          </p>
        </div>

        {/* Trust Line */}
        <div className="text-center">
          <p className="text-cyan-100 flex items-center justify-center gap-2">
            <Lock className="w-5 h-5" />
            Your information is 100% secure. We will never spam you or share your details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

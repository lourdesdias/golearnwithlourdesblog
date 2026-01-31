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
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-8 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
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
        <div 
          className="rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl text-foreground mb-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom right, #ffffff, #fffbf5)',
            border: '3px solid transparent',
            backgroundImage: 'linear-gradient(to bottom right, #ffffff, #fffbf5), linear-gradient(135deg, #f0d976, #c7a043, #a68635, #c7a043, #f0d976)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box'
          }}
        >
          {/* Subtle corner accent */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none" style={{
            background: 'radial-gradient(circle, #f0d976 0%, transparent 70%)'
          }}></div>
          
          <div className="relative z-10">
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
                  className="group relative"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-2 border-gray-200 hover:border-gold-400 rounded-xl p-6 gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(to right, #ffffff 0%, #fffbf5 100%)'
                    }}
                  >
                    {/* Subtle gold glow on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                      background: 'radial-gradient(circle at top right, rgba(240, 217, 118, 0.15) 0%, transparent 70%)'
                    }}></div>
                    
                    <div className="flex items-start gap-4 flex-1 relative z-10">
                      <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform filter group-hover:drop-shadow-lg">
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
                    <div className="flex items-center gap-4 ml-14 sm:ml-0 flex-shrink-0 relative z-10">
                      <p className="text-base md:text-lg font-semibold text-gray-400 line-through decoration-2 decoration-gray-400 mb-0">
                        {bonus.value}
                      </p>
                      <div 
                        className="inline-block px-5 py-2 rounded-xl shadow-lg transform group-hover:scale-105 transition-all"
                        style={{
                          background: 'linear-gradient(135deg, #f0d976 0%, #c7a043 50%, #a68635 100%)',
                          boxShadow: '0 4px 15px rgba(199, 160, 67, 0.4), inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.3)'
                        }}
                      >
                        <p className="font-black text-xl md:text-2xl text-white tracking-wide" style={{
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}>
                          FREE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="border-t-4 border-gold-400 pt-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 text-center sm:text-left">
              <div>
                <p className="text-xl text-muted-foreground font-bold mb-2">TOTAL VALUE:</p>
                <span 
                  className="text-5xl md:text-7xl font-black block"
                  style={{
                    background: 'linear-gradient(to bottom, #f0d976 0%, #c7a043 50%, #a68635 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px rgba(240, 217, 118, 0.8)) drop-shadow(0 4px 8px rgba(199, 160, 67, 0.6))'
                  }}
                >
                  $5,812
                </span>
              </div>
              <div 
                className="text-white py-6 px-10 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee 0%, #14b8a6 100%)',
                  boxShadow: '0 10px 40px rgba(34, 211, 238, 0.4)'
                }}
              >
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
        <div 
          className="max-w-3xl mx-auto rounded-2xl p-8 md:p-10 text-center mb-10 text-white"
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
            boxShadow: '0 10px 40px rgba(220, 38, 38, 0.4)'
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl animate-pulse">⏰</span>
            <p className="text-xl md:text-2xl font-bold">
              Founding Member Bonus Expires Soon
            </p>
          </div>
          <p className="text-base md:text-lg text-red-50 leading-relaxed">
            Bonus 6 (Personal Mentorship - $4,997 value) is only available for founding members. 
            Watch today to secure your access.
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

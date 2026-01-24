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
          <div className="space-y-5 mb-10">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gradient-to-r from-cyan-50/50 to-gold-50/50 border border-gold-200 rounded-xl p-5 gap-3"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{bonus.emoji}</span>
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      {bonus.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {bonus.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-12 sm:ml-0">
                  <span className="text-muted-foreground line-through text-lg">
                    {bonus.value}
                  </span>
                  <span className="metallic-gold-bg text-gray-900 text-sm font-bold px-4 py-2 rounded-full shadow">
                    FREE
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t-4 border-gold-400 pt-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
              <div>
                <p className="text-lg text-muted-foreground font-semibold">TOTAL VALUE:</p>
                <p className="text-4xl font-extrabold metallic-gold">$5,812</p>
              </div>
              <div>
                <p className="text-lg text-muted-foreground font-semibold">YOUR INVESTMENT TODAY:</p>
                <p className="text-4xl font-extrabold text-cyan-500">$0</p>
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

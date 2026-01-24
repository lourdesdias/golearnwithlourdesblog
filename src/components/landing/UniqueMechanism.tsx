import { Heart, Key, Users, Award, Shield, Target } from "lucide-react";

const mechanisms = [
  {
    icon: Heart,
    title: "Faith-First Positioning",
    description: "Built on biblical principles of stewardship, abundance, and generational blessing. This isn't about 'getting rich' — it's about honoring God with your finances while serving others.",
  },
  {
    icon: Key,
    title: "Proprietary Wholesale Access",
    description: "Not another discount card or cashback app. Direct access to the same wholesale rates that travel agents use — often 40-70% below retail.",
  },
  {
    icon: Users,
    title: "Legacy Income Structure",
    description: "Income that doesn't stop when you do. Build a residual stream that can be passed to your children, continuing to generate wealth for generations.",
  },
  {
    icon: Award,
    title: "Authority-Based Growth",
    description: "Position yourself as a trusted travel resource in your community. People come to YOU for advice, creating natural business opportunities.",
  },
  {
    icon: Shield,
    title: "Tax-Advantaged Business Model",
    description: "Legitimate business structure that allows you to legally deduct travel expenses, home office costs, and more — reducing your tax burden significantly.",
  },
  {
    icon: Target,
    title: "Mission-Aligned Strategy",
    description: "A portion of every membership directly supports mission work. You're not just building a business — you're funding the Great Commission.",
  },
];

const UniqueMechanism = () => {
  return (
    <section className="py-16 md:py-20 gradient-dark text-white">
      <div className="container mx-auto px-4">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How Is This Different From Every Other 'Travel Membership' You've Seen?
          </h2>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">
            Most travel programs focus on one thing: saving you money. We focus on something much bigger.
          </p>
        </div>

        {/* Mechanism Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {mechanisms.map((mechanism, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <mechanism.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">
                    {mechanism.title}
                  </h3>
                  <p className="text-teal-100 text-sm leading-relaxed">
                    {mechanism.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contrarian Truth Box */}
        <div className="bg-accent text-foreground p-6 md:p-8 rounded-xl text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            The Contrarian Truth:
          </h3>
          <p className="text-accent-foreground leading-relaxed">
            Most people think you need to choose between family time and financial success. We've discovered that the opposite is true: when you align your business with biblical principles of stewardship and service, you can have both — and bless others in the process. This isn't about scheming or hustling. It's about simple, faithful obedience that produces supernatural results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniqueMechanism;

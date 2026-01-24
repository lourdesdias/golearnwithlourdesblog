import { Check, Shield } from "lucide-react";

const pillars = [
  {
    icon: "🌍",
    title: "Travel as Stewardship",
    color: "cyan",
    items: [
      "Access wholesale pricing on 1 million+ hotels worldwide",
      "Save 40-70% compared to retail booking sites",
      "Unlock exclusive member-only rates and perks",
      "Save up to 90% with member travel points",
      "Experience luxury without the guilt of overspending",
    ],
  },
  {
    icon: "📈",
    title: "Income as Ministry",
    color: "gold",
    items: [
      "Earn commissions by sharing travel deals you love",
      "Build residual income that grows monthly",
      "Work on your own schedule, from anywhere",
      "No inventory, shipping, or customer service headaches",
      "Get paid while helping others save money",
    ],
  },
  {
    icon: "🏆",
    title: "Legacy as Obedience",
    color: "cyan",
    items: [
      "Create generational wealth that passes to your children",
      "Fund missions and ministries through your business",
      "Build a business that honors biblical principles",
      "Leave a legacy of financial wisdom and abundance",
    ],
  },
];

const PillarsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Introducing: The Freedom Funding Blueprint™
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A proven three-pillar system that transforms how families travel, earn, and build generational wealth — all rooted in faith-driven principles.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                pillar.color === "gold"
                  ? "bg-gold-50 border-2 border-gold-400"
                  : "bg-cyan-50 border-2 border-cyan-500"
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl ${
                    pillar.color === "gold"
                      ? "bg-gold-400 text-white"
                      : "bg-cyan-500 text-white"
                  }`}
                >
                  {pillar.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground text-center mb-8">
                {pillar.title}
              </h3>

              {/* Items */}
              <ul className="space-y-4">
                {pillar.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                  >
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      pillar.color === "gold" ? "text-gold-500" : "text-cyan-500"
                    }`} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proof Box */}
        <div className="border-2 border-gold-400 p-8 md:p-10 rounded-xl text-center max-w-4xl mx-auto bg-card">
          <div className="flex justify-center mb-6">
            <Shield className="w-14 h-14 text-gold-500" />
          </div>
          <blockquote className="text-lg md:text-xl text-foreground italic mb-6 leading-relaxed">
            "Together, our community has saved over $2.3 million on travel, funded 500+ mission trips, and created tax-advantaged businesses that are changing families' financial futures."
          </blockquote>
          <p className="text-muted-foreground font-semibold">
            — Freedom Funding Blueprint Community Results
          </p>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;

import { Check, Shield } from "lucide-react";

const pillars = [
  {
    icon: "🌍",
    title: "Travel as Stewardship",
    color: "teal",
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
    color: "amber",
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
    color: "teal",
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
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Introducing: The Freedom Funding Blueprint™
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven three-pillar system that transforms how families travel, earn, and build generational wealth — all rooted in faith-driven principles.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                pillar.color === "amber"
                  ? "bg-accent-light border-2 border-accent"
                  : "bg-primary-light border-2 border-primary"
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${
                    pillar.color === "amber"
                      ? "bg-accent text-white"
                      : "bg-primary text-white"
                  }`}
                >
                  {pillar.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground text-center mb-6">
                {pillar.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {pillar.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      pillar.color === "amber" ? "text-accent" : "text-primary"
                    }`} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proof Box */}
        <div className="border-2 border-accent p-6 md:p-8 rounded-xl text-center max-w-4xl mx-auto bg-card">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-accent" />
          </div>
          <blockquote className="text-lg md:text-xl text-foreground italic mb-4">
            "Together, our community has saved over $2.3 million on travel, funded 500+ mission trips, and created tax-advantaged businesses that are changing families' financial futures."
          </blockquote>
          <p className="text-muted-foreground">
            — Freedom Funding Blueprint Community Results
          </p>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;

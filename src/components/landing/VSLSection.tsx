import { Shield, Plane, Heart } from "lucide-react";

const credibilityCards = [
  {
    icon: Shield,
    title: "Tax-Advantaged Business Model",
    description: "Legally deduct travel as a business expense",
  },
  {
    icon: Plane,
    title: "4x More Travel",
    description: "Explore the world without breaking the bank",
  },
  {
    icon: Heart,
    title: "Faith-Aligned System",
    description: "Built on biblical principles of stewardship",
  },
];

const VSLSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-light">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Discover How We Explore The World
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch this short 5-minute video to see how families are transforming their travel and finances
          </p>
        </div>

        {/* Video Embed */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden bg-cyan-900">
            <iframe
              src="https://www.youtube.com/embed/MhsZ3XQ7e-c"
              title="Freedom Funding Blueprint Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Credibility Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {credibilityCards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-cyan-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VSLSection;

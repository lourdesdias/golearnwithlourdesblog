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
    <section className="py-16 md:py-20 gradient-light">
      <div className="container mx-auto px-4">
        {/* Headlines */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Discover How We Explore The World
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch this short 5-minute video to see how families are transforming their travel and finances
          </p>
        </div>

        {/* Video Embed */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden bg-teal-900">
            <iframe
              src="https://www.youtube.com/embed/MhsZ3XQ7e-c"
              title="Freedom Funding Blueprint Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Credibility Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {credibilityCards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VSLSection;

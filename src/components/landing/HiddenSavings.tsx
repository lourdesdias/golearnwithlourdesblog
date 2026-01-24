import { Plane, ShoppingCart, PartyPopper } from "lucide-react";

const savingsCategories = [
  {
    icon: Plane,
    title: "Travel & Accommodations",
    items: [
      "🏨 Hotels at 40-70% off retail",
      "✈️ Flights with exclusive member pricing",
      "🚢 Cruises at wholesale rates",
      "🚗 Car rentals at corporate discounts",
      "🗺️ All-inclusive resorts",
      "🌍 Save up to 90% using travel points",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Daily Essentials",
    items: [
      "⛽ Gas & fuel discounts",
      "🛒 Grocery savings programs",
      "💊 Prescription medication discounts",
      "📱 Cell phone plan savings",
      "🔌 Utility bill reductions",
      "🏠 Home services discounts",
    ],
  },
  {
    icon: PartyPopper,
    title: "Lifestyle & Entertainment",
    items: [
      "🎬 Movie & streaming deals",
      "🍽️ Restaurant discounts",
      "🎢 Theme park tickets",
      "🏋️ Gym memberships",
      "🛍️ Retail shopping cashback",
      "🎭 Concert & event tickets",
    ],
  },
];

const HiddenSavings = () => {
  return (
    <section className="py-16 md:py-24 gradient-light">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            The Hidden Savings Most Travel Systems Don't Tell You About
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This isn't just about hotels. Access wholesale pricing on your ENTIRE lifestyle.
          </p>
        </div>

        {/* Savings Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {savingsCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-cyan-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground text-center mb-8">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-muted-foreground text-sm md:text-base leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proof Box */}
        <div className="bg-gold-50 border-2 border-gold-400 p-8 md:p-10 rounded-xl text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-foreground">
            💰 <span className="metallic-gold">"$200-$500/month in daily expense savings"</span>
          </p>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            — Average member savings beyond travel
          </p>
        </div>
      </div>
    </section>
  );
};

export default HiddenSavings;

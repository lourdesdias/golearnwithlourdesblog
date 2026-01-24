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
    <section className="py-16 md:py-20 gradient-light">
      <div className="container mx-auto px-4">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Hidden Savings Most Travel Systems Don't Tell You About
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't just about hotels. Access wholesale pricing on your ENTIRE lifestyle.
          </p>
        </div>

        {/* Savings Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {savingsCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground text-center mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-muted-foreground text-sm md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proof Box */}
        <div className="bg-accent-light border-2 border-accent p-6 md:p-8 rounded-xl text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            💰 <span className="text-accent-foreground">"$200-$500/month in daily expense savings"</span>
          </p>
          <p className="text-muted-foreground mt-2">
            — Average member savings beyond travel
          </p>
        </div>
      </div>
    </section>
  );
};

export default HiddenSavings;

import pinkyImage from "@/assets/testimonials/pinky-travel.png";
import tiffanyImage from "@/assets/testimonials/tiffany-appliance.png";
import cynthiaImage from "@/assets/testimonials/cynthia-phone.png";
import sarahImage from "@/assets/testimonials/sarah-nfl.png";
import krystalImage from "@/assets/testimonials/krystal-grocery.png";
import laurieImage from "@/assets/testimonials/laurie-lifestyle.png";
import deborahImage from "@/assets/testimonials/deborah-aaa.png";
import bunmiImage from "@/assets/testimonials/bunmi-convenience.png";

const testimonials = [
  {
    image: pinkyImage,
    name: "Pinky",
    hook: "Stop overpaying for your family's rest and restoration.",
    caption: "Saved over $900 on a single hotel stay—luxury and stewardship go hand in hand.",
    savings: "$900+"
  },
  {
    image: tiffanyImage,
    name: "Tiffany",
    hook: "Financial freedom means never stressing when an appliance breaks.",
    caption: "Found the exact same washer & dryer set for $1,140 less than big-box stores.",
    savings: "$1,140"
  },
  {
    image: cynthiaImage,
    name: "Cynthia",
    hook: "Reclaim your \"seed\" money from the big corporations.",
    caption: "Slashed our phone bill from $420 to $146/month—that's $270 back in our pocket!",
    savings: "$270/mo"
  },
  {
    image: sarahImage,
    name: "Sarah",
    hook: "Live more and create memories without the financial burden.",
    caption: "8 NFL tickets plus parking—saved $1,490 in one go. Life's best moments for less.",
    savings: "$1,490"
  },
  {
    image: krystalImage,
    name: "Krystal",
    hook: "Be a good steward of your household's most frequent expense.",
    caption: "$250 grocery credit—every dollar saved is a dollar earned for our future.",
    savings: "$250"
  },
  {
    image: laurieImage,
    name: "Laurie",
    hook: "A total lifestyle shift toward abundance.",
    caption: "Trips to Punta Cana, auto insurance, dishwashers—$2,200+ saved in months.",
    savings: "$2,200+"
  },
  {
    image: deborahImage,
    name: "Deborah",
    hook: "Small wins lead to big freedom.",
    caption: "70% off AAA—ended up completely FREE for the year. Savings are everywhere.",
    savings: "FREE"
  },
  {
    image: bunmiImage,
    name: "Bunmi",
    hook: "Convenience is the ultimate luxury for a busy family.",
    caption: "Goodyear came to our driveway for free—saved money AND time.",
    savings: "$140+"
  },
];

const SocialProofGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #0d9488 0%, #2fe0d5 50%, #0d9488 100%)',
              }}
            >
              Savings on Travel & Daily Expenses
            </span>
          </h2>
          {/* Decorative underline */}
          <div className="flex justify-center mb-4">
            <div 
              className="h-1 w-32 rounded-full"
              style={{
                background: 'linear-gradient(to right, #f0d976, #c7a043, #f0d976)'
              }}
            />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Real screenshots from real members
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #f0d976, #c7a043, #a68635, #c7a043, #f0d976)',
                padding: '3px'
              }}
            >
              <div className="bg-card rounded-xl overflow-hidden h-full">
              {/* Image */}
              <div className="aspect-square overflow-hidden relative bg-white p-2">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}'s savings testimonial`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Savings Badge */}
                <div 
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full font-bold text-white text-sm shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #f0d976 0%, #c7a043 50%, #a68635 100%)',
                    boxShadow: '0 4px 15px rgba(199, 160, 67, 0.4)'
                  }}
                >
                  {testimonial.savings}
                </div>
              </div>
              
                {/* Content */}
                <div className="p-5">
                  <p className="font-bold text-foreground mb-1">{testimonial.name}</p>
                  <p className="text-sm font-semibold text-cyan-600 mb-2">{testimonial.hook}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {testimonial.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofGrid;

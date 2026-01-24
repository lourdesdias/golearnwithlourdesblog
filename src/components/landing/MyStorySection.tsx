import { ArrowRight, Check } from "lucide-react";

const webinarPoints = [
  "Exactly how the wholesale travel system works",
  "The tax advantages that most accountants don't know",
  "How to build legacy income that outlives you",
  "Real case studies from families just like yours",
];

const bonuses = [
  "First Dollar Earned Blueprint",
  "Tax Deduction Checklist",
  "Legacy Income Calculator",
  "Private Community Access",
  "Quick-Start Implementation Guide",
  "Personal Onboarding Call",
];

const MyStorySection = () => {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Story Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12">
            {/* Image Placeholder */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full gradient-hero border-4 border-accent flex items-center justify-center shadow-xl">
                <span className="text-6xl font-bold text-white">LD</span>
              </div>
            </div>

            {/* Story Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why I Built This System
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For years, my husband worked full-time while I juggled motherhood and various side hustles trying to create extra income. We dreamed of traveling the world with our kids, but between bills, debt, and the rising cost of everything, vacations felt like a luxury we couldn't afford.
                </p>
                <p>
                  Everything changed when we discovered a travel membership that gave us access to wholesale pricing on hotels, cruises, and experiences. But what really transformed our lives wasn't just the savings — it was the business opportunity that came with it.
                </p>
                <p>
                  Within our first year, we had traveled to places we'd only seen in magazines. By year three, we'd paid off over $50,000 in debt. Today, we travel 4-6 times per year, often for free, while building an income stream that grows whether we're working or not.
                </p>
                <p>
                  But here's what matters most to me: this business is built on biblical principles of stewardship, service, and generational blessing. We're not just building wealth — we're funding missions, supporting ministries, and creating a legacy that will bless our children's children.
                </p>
                <p>
                  Now I help other faith-driven families do the same. If you're ready to stop choosing between family time and financial security, you're in the right place.
                </p>
              </div>
            </div>
          </div>

          {/* Transition Box */}
          <div className="bg-card border-2 border-primary p-6 md:p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-center">
              Ready to See the Complete System?
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="font-semibold text-foreground mb-3">
                  In the webinar, you'll discover:
                </p>
                <ul className="space-y-2">
                  {webinarPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-3">
                  Plus these exclusive bonuses:
                </p>
                <ul className="space-y-2">
                  {bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent">🎁</span>
                      <span>{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wanderpreneur.org/webinar"
                className="inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-500 text-black text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
              >
                Watch The FREE Webinar Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStorySection;

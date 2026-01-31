import { ArrowRight, Check } from "lucide-react";
import profilePhoto from "@/assets/profile-lourdes.png";

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
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Story Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12">
            {/* Image Placeholder */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Lourdes - Founder" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Why I Built This System
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
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
          <div className="bg-card border-2 border-cyan-500 p-8 md:p-10 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
              Ready to See the Complete System?
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-bold text-foreground mb-4">
                  In the webinar, you'll discover:
                </p>
                <ul className="space-y-3">
                  {webinarPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-bold text-foreground mb-4">
                  Plus these exclusive bonuses:
                </p>
                <ul className="space-y-3">
                  {bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <span className="text-gold-500">🎁</span>
                      <span>{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wanderpreneur.org/webinar"
                className="btn-secondary-cta"
                aria-label="Watch the free webinar training"
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

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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why I Built This System
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  For years, my husband worked full-time while I juggled motherhood and our family budget. We dreamed of traveling the world with our kids, but between bills and the rising cost of everything, luxury vacations felt completely out of reach. We were that family choosing between one "big trip" every few years or staying home.
                </p>
                <p>
                  As a homeschooling family, I watched our kids learn from textbooks and screens while I knew there was a bigger classroom waiting for them — the world itself. But "worldschooling" felt like something only wealthy families could afford.
                </p>
                <p>
                  Everything changed when I discovered a wholesale travel system that wasn't just about saving money on hotels. This was different. It gave us access to luxury resorts, cruises, and experiences at 40-70% off retail — but more importantly, it showed me how to turn our family's travel into a tax-advantaged home-based business.
                </p>
                <p className="font-semibold text-foreground">
                  Suddenly, the math completely shifted.
                </p>
                <p>
                  Within our first year, we traveled to places we'd only dreamed about. Our kids stopped learning about ancient civilizations from books — they walked through them. They didn't just read about different cultures — they lived among them. Geography became real. History came alive. Language learning happened naturally.
                </p>
                <p>
                  But here's what changed everything for our family: I discovered that every trip we took could be legally deducted as a business expense. My husband still works his full-time job, but with this home-based travel business, we transformed from paying thousands in taxes to getting money back. Those tax savings alone funded multiple trips.
                </p>
                <p>
                  Today, we're living what we call our "freedom lifestyle." We travel 3-4 times per year — not as a luxury, but as our children's education and our family's business strategy. Our kids are getting a world-class education that no classroom could ever provide. And we're building residual income that grows whether we're exploring a new country or at home.
                </p>
                <p className="font-semibold text-foreground">
                  But here's what matters most to me:
                </p>
                <p>
                  This business is built on biblical principles of stewardship, service, and generational blessing. We're not just building wealth — we're funding missions, supporting ministries, and teaching our children that faith, family, and financial freedom can coexist. We're creating a legacy that will bless our children's children (Proverbs 13:22).
                </p>
                <p>
                  I started sharing this system with other parents — especially homeschooling families who, like us, wanted to give their kids experiential education without breaking the bank. I showed them the same wholesale access, the same tax advantages, the same freedom lifestyle we'd discovered.
                </p>
                <p className="font-semibold text-foreground">
                  Now I help faith-driven families do the same.
                </p>
                <p>
                  Whether you're a homeschooling parent who dreams of worldschooling, a busy professional who wants to deduct your family vacations, or an entrepreneur looking to maximize your tax benefits — this system works. You don't need to be a travel expert. You just need to be teachable and willing to think differently about travel, taxes, and building wealth.
                </p>
                <p>
                  If you're ready to stop choosing between family experiences and financial security, you're in the right place.
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

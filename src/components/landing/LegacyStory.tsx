import { Trophy, Users, TrendingUp, Heart } from "lucide-react";
import guyTaylorImage from "@/assets/guy-taylor.jpeg";

const benefits = [
  {
    icon: Users,
    title: "Family Unity",
    description: "Travels together, learns together, grows together",
  },
  {
    icon: TrendingUp,
    title: "Growing Income",
    description: "Monthly income that increases over time",
  },
  {
    icon: Heart,
    title: "Ministry Impact",
    description: "Funding missions and blessing others",
  },
];

const LegacyStory = () => {
  return (
    <section className="py-16 md:py-24 gradient-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Featured Box */}
          <div className="bg-card border-2 border-gold-400 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="gradient-hero p-10 md:p-12 text-white text-center">
              <div className="flex justify-center mb-6">
                <Trophy className="w-14 h-14" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                "My Income Didn't Die With Me — It's Still Blessing My Grandchildren Today"
              </h2>
              <p className="text-cyan-100">Guy's Legacy Story</p>
            </div>

            {/* Body */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
                {/* Guy Taylor Image */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-gold-400 shadow-lg">
                    <img 
                      src={guyTaylorImage} 
                      alt="Guy Taylor Legacy Story"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Story Text */}
                <div className="flex-1 space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Guy was a retired pastor who joined our travel membership in his 70s. He wasn't looking to "get rich" — he just wanted to travel more affordably with his wife during retirement.
                  </p>
                  <p>
                    What he discovered changed everything. Within two years, he had built a small but growing residual income by simply sharing the travel deals with his church community. People trusted his recommendation.
                  </p>
                  <p>
                    When Guy passed away peacefully at 82, something remarkable happened: his income didn't stop. Because of how the business is structured, his monthly checks continue to be paid to his family — and the income has actually GROWN since his passing.
                  </p>
                </div>
              </div>

              {/* Gold Callout */}
              <div className="bg-gold-50 border-2 border-gold-400 p-8 rounded-xl mb-10">
                <p className="text-foreground font-bold text-center text-lg leading-relaxed">
                  💰 A monthly income stream that <span className="metallic-gold">CONTINUES TO GROW</span> even after the founder has passed — now blessing his children and grandchildren every single month.
                </p>
              </div>

              {/* Benefit Columns */}
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-cyan-50 p-8 rounded-xl text-center hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <benefit.icon className="w-10 h-10 text-cyan-600" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="gradient-hero p-8 text-white text-center">
              <p className="text-xl font-bold mb-3">
                This Isn't 'Passive Income' — It's Generational Obedience.
              </p>
              <p className="text-cyan-100 italic">
                "A good person leaves an inheritance for their children's children" — Proverbs 13:22
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyStory;

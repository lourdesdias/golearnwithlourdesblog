import { X } from "lucide-react";

const problems = [
  {
    title: "The Family Sacrifice",
    items: [
      "Cancel another family vacation because 'it's not in the budget'",
      "Watch your kids grow up seeing postcards instead of making memories",
      "Feel guilty every time you dream about that trip to Europe",
      "Wonder if you'll ever take that 'once-in-a-lifetime' trip",
    ],
  },
  {
    title: "The Tax Bleed",
    items: [
      "Pay full price for every vacation while others get tax breaks",
      "Watch money flow out with no strategy to recapture it",
      "Miss legitimate deductions because no one showed you how",
      "Feel like the system is rigged against working families",
    ],
  },
  {
    title: "The Paycheck-to-Paycheck Professional",
    items: [
      "Work harder each year but never get ahead financially",
      "Live for the weekend while dreading Monday",
      "Build someone else's dream while yours collects dust",
      "Wonder if this is really 'as good as it gets'",
    ],
  },
  {
    title: "The Ministry Dilemma",
    items: [
      "Want to give more but can barely cover your own bills",
      "Dream of funding missionaries but can't afford it",
      "Feel called to serve but trapped by financial constraints",
      "Watch ministry opportunities pass because of money",
    ],
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            If You've Ever Felt Trapped by These Impossible Choices...
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            You're not alone. Thousands of families face these same painful dilemmas every year.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-destructive-light border-2 border-destructive-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-destructive mb-6">
                {problem.title}
              </h3>
              <ul className="space-y-4">
                {problem.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bridge Copy */}
        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-8 md:p-10 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            What if there was a third way?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            A way to travel 40-70% less than everyone else... while legally deducting those trips as business expenses... 
            and building a residual income stream that grows whether you're working or not? What if this system was built 
            from day one on biblical principles of stewardship, abundance, and generational blessing?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

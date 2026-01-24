import { Upload } from "lucide-react";

const screenshots = Array.from({ length: 8 }, (_, i) => i + 1);

const SocialProofGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Savings on Travel & Daily Expenses
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Real screenshots from real members
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {screenshots.map((num) => (
            <div
              key={num}
              className="aspect-square bg-gradient-to-br from-cyan-50 to-gold-50 rounded-xl border-2 border-dashed border-cyan-300 hover:border-cyan-500 transition-all duration-300 flex flex-col items-center justify-center p-6 cursor-pointer hover:shadow-lg"
            >
              <Upload className="w-10 h-10 text-gold-500 mb-3" />
              <span className="text-lg font-bold text-gold-600 mb-1">UPLOAD</span>
              <span className="text-xs text-muted-foreground text-center">
                Savings testimonial #{num}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofGrid;

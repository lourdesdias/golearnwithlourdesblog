const screenshots = Array.from({ length: 8 }, (_, i) => i + 1);

const SocialProofGrid = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Savings on Travel & Daily Expenses
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real screenshots from real members
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {screenshots.map((num) => (
            <div
              key={num}
              className="aspect-square gradient-card rounded-lg border-2 border-border hover:border-primary transition-colors duration-300 flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-lg"
            >
              <span className="text-4xl mb-2">💰</span>
              <span className="text-sm text-muted-foreground text-center">
                Savings Screenshot #{num}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofGrid;

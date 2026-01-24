import { Users, DollarSign, Globe, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Families Served",
  },
  {
    icon: DollarSign,
    number: "$2.3M+",
    label: "Travel Savings",
  },
  {
    icon: Globe,
    number: "180+",
    label: "Countries",
  },
  {
    icon: Heart,
    number: "500+",
    label: "Mission Trips Funded",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-primary-light border-y-2 border-teal-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2"
            >
              <stat.icon className="w-8 h-8 text-primary" />
              <span className="text-2xl md:text-3xl font-bold text-teal-900">
                {stat.number}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

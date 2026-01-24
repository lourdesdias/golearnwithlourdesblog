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
    <section className="bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-600 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
            >
              <stat.icon className="w-12 h-12 text-amber-300" />
              <span 
                className="text-3xl md:text-4xl font-extrabold"
                style={{
                  color: '#f0d976',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(240,217,118,0.4)'
                }}
              >
                {stat.number}
              </span>
              <span className="text-sm text-cyan-100">
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

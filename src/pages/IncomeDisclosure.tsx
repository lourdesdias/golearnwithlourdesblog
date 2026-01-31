import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const IncomeDisclosure = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-950">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-cyan-300 hover:text-gold-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Income Disclosure Statement
        </h1>
        
        <p className="text-cyan-100 leading-relaxed mb-8">
          Learn with Lourdes values transparency and ethical stewardship. The following disclosure is provided to ensure a clear understanding of the referral opportunity.
        </p>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            General Earnings Information
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            The "Freedom Funding Blueprint" is a referral-based incentive program. While the opportunity to earn is real, it is not a guarantee of income. Success depends on various factors, including individual effort, networking skills, and the time dedicated to the business.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            The "3 and Free" Model
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            Active membership fees are only waived when a member maintains three (3) active direct referrals. If the number of active referrals drops below three, the member is responsible for their own membership dues.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Earnings Tiers
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            Commissions earned beyond the "3 and Free" status are based on the volume of active memberships within your community. Most members join primarily for the lifestyle savings and may not earn a commission. High-level earnings, such as those mentioned in testimonials (e.g., $10K+/month), represent the top tier of performers and are not typical.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Independent Representation
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            Members are independent contractors, not employees. You are responsible for your own taxes and business expenses in accordance with your local and national laws.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cyan-700">
          <p className="text-cyan-400 text-sm">
            © 2026 LearnWithLourdes.com — Empowering Faith-Driven Families
          </p>
        </div>
      </div>
    </main>
  );
};

export default IncomeDisclosure;

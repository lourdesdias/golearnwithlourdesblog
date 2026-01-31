import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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
          Terms of Service
        </h1>
        
        <p className="text-cyan-300 mb-8">Last Updated: January 31, 2026</p>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-cyan-100 leading-relaxed mb-6">
            By accessing learnwithlourdes.blog, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nature of Service
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            Learn with Lourdes provides a platform for information and access to a third-party lifestyle and travel membership. We are not a travel agency, nor do we book travel directly. All travel services are fulfilled by third-party providers.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            User Eligibility and Conduct
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            You must be at least 18 years of age to use this site. Users agree to use the site for lawful purposes and to act with integrity. Misrepresentation of the membership or income opportunity to others is strictly prohibited.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Intellectual Property
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            The materials contained in this website are protected by applicable copyright and trademark law. You may not modify, copy, or use our content for commercial purposes without express written consent.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Limitation of Liability
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            In no event shall Learn with Lourdes or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on this website. Savings and rates are subject to change based on market conditions and third-party availability.
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

export default TermsOfService;

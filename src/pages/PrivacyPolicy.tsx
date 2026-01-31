import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        
        <p className="text-cyan-300 mb-8">Effective Date: January 31, 2026</p>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-cyan-100 leading-relaxed mb-6">
            Learn with Lourdes ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information across our global operations.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Information We Collect
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            We collect personal information that you voluntarily provide, including your name, email address, and contact details when you register for interest or subscribe to our updates. We also collect automated data through cookies to improve site functionality and user experience.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            How We Use Your Information
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-4">Your data is used to:</p>
          <ul className="list-disc list-inside text-cyan-100 space-y-2 mb-6">
            <li>Provide and maintain our service.</li>
            <li>Notify you about changes to our platform or membership offerings.</li>
            <li>Provide customer support and gather analysis to improve our website.</li>
            <li>Send periodic newsletters or promotional materials (which you may opt out of at any time).</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Global Data Protection (GDPR & International Standards)
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            We respect your rights regardless of your location. You have the right to access, update, or delete the information we have on you. We do not sell, trade, or rent your personal identification information to others.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Data Security
          </h2>
          <p className="text-cyan-100 leading-relaxed mb-6">
            We use industry-standard encryption and security protocols to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
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

export default PrivacyPolicy;

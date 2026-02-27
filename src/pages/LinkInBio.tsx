import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Globe, Mail, ChevronDown, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from "@/assets/profile-linkinbio.png";
import logoImage from "@/assets/logo.png";
import SubscriptionModal from "@/components/landing/SubscriptionModal";

interface Offering {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  subtext: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  badgeTextColor: string;
  icon: React.ElementType;
  highlight: string;
  url: string;
  isFreebie?: boolean;
  provider?: "beehiiv" | "email-octopus";
  emailFormId?: string;
}

export default function LinkInBio() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'featured' | 'vault'>('featured');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const offerings: Offering[] = [
    {
      id: 1,
      title: "Vision Architect",
      subtitle: "Get CLARITY In 6 Days (Build Your Kingdom Blueprint)",
      description: "Stop spinning in circles. In 6 days, you'll have a CRYSTAL-CLEAR blueprint for thriving in ALL 7 F's: Faith, Family, Finance, Fitness, Freedom, Fun & Fruitfulness. Your Vision Architect Mentor keeps you accountable 24/7—anchored to God's design for your life.",
      cta: "Join Waitlist",
      subtext: "Pre-recorded + lifetime Vision Architect Mentor + lifetime updates.",
      color: "from-yellow-500 to-cyan-400",
      bgGradient: "from-yellow-600/20 to-cyan-600/20",
      borderColor: "border-yellow-500/50",
      badgeTextColor: "text-white",
      icon: Sparkles,
      highlight: "Lifetime Updates",
      url: "/vision-architect"
    },
    {
      id: 2,
      title: "Viral Engine",
      subtitle: "Replace Your $5K/Month Agency Team—Build With Kingdom Principles",
      description: "Stop bleeding money on scattered tools. 19 AI engines create a week of viral content in 10 minutes. Rainmaker turns that attention into revenue. Product Forge creates 12 digital products per keyword. Build a PROFITABLE business that honors God and reflects your Kingdom values.",
      cta: "Get Waitlist Access",
      subtext: "19 engines, 1 dashboard. Lock in founder pricing (100 spots only).",
      color: "from-cyan-500 to-yellow-500",
      bgGradient: "from-cyan-600/20 to-yellow-600/20",
      borderColor: "border-cyan-500/50",
      badgeTextColor: "text-white",
      icon: Zap,
      highlight: "Q1 2026 Launch",
      url: "/viral-engine"
    },
    {
      id: 3,
      title: "Freedom Business Blueprint",
      subtitle: "Build a God-Honoring Travel Business With Tax Advantages & Passive Income",
      description: "Create a LEGITIMATE home-based business that funds your family's travel dreams. Wholesale deals. Tax-optimized structure. Passive revenue streams. Everything you need to live the freedom lifestyle while building Kingdom wealth—and teaching your kids real-world entrepreneurship.",
      cta: "Explore Blueprint",
      subtext: "Lifetime access. Wholesale connections. Tax strategies included.",
      color: "from-yellow-400 to-cyan-500",
      bgGradient: "from-yellow-500/20 to-cyan-500/20",
      borderColor: "border-yellow-400/50",
      badgeTextColor: "text-white",
      icon: Globe,
      highlight: "Lifetime Access",
      url: "/travelfreedom"
    },
    {
      id: 4,
      title: "The Wealth Builder",
      subtitle: "Biblical Wealth Strategies for Families Building God-Honoring Businesses",
      description: "Weekly Kingdom business principles that actually WORK. How to make an extra $1k-$5k monthly aligned with God's design. Teach your kids biblical money principles (not just consumerism). Integrate faith into every business decision. Stewardship + generational wealth.",
      cta: "Subscribe",
      subtext: "Free every Monday. Unsubscribe anytime. Join Faith-Driven parents building Kingdom wealth.",
      color: "from-yellow-500 to-yellow-400",
      bgGradient: "from-yellow-600/20 to-yellow-500/20",
      borderColor: "border-yellow-500/50",
      badgeTextColor: "text-slate-900",
      icon: Mail,
      highlight: "Free • Weekly",
      url: "/newsletter"
    },
    {
      id: 5,
      title: "Marketing Agency",
      subtitle: "Websites, Funnels & Content That Convert—Built for Kingdom Businesses",
      description: "Need a website that actually sells? A funnel that converts? Social content that grows your brand? We build high-converting marketing systems for Faith-Driven entrepreneurs who refuse to compromise their values for profit.",
      cta: "Learn More",
      subtext: "Custom projects. Done-for-you marketing. Book a free strategy call.",
      color: "from-cyan-400 to-yellow-500",
      bgGradient: "from-cyan-500/20 to-yellow-500/20",
      borderColor: "border-cyan-400/50",
      badgeTextColor: "text-white",
      icon: Briefcase,
      highlight: "Done-For-You",
      url: "/agency"
    }
  ];

  const vaultOfferings: Offering[] = [
    {
      id: 101,
      title: "Pay Your Kids Legally (Canada)",
      subtitle: "The 5-Step CRA Checklist for Business Owners",
      description: "Stop leaving money on the table. Learn how to legally pay your children and lower your family tax bill using simple, CRA-compliant strategies. A must-have for Canadian entrepreneurs building Kingdom wealth.",
      cta: "Download Checklist",
      subtext: "Instant PDF download after email confirmation.",
      color: "from-yellow-500 to-cyan-400",
      bgGradient: "from-yellow-600/20 to-cyan-600/20",
      borderColor: "border-yellow-500/50",
      badgeTextColor: "text-white",
      icon: Mail,
      highlight: "Tax Guide",
      url: "/Pay_Your_Kids_Legally_Canada.pdf",
      isFreebie: true,
      provider: "email-octopus",
      emailFormId: "a6a6a84a-1409-11f1-a407-514075e5d87e"
    }
  ];

  const currentOfferings = activeTab === 'featured' ? offerings : vaultOfferings;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 overflow-hidden">
      {/* Subtle background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-100/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Logo Header */}
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex justify-center">
          <img src={logoImage} alt="Learn With Lourdes" className="h-16 w-auto" />
        </div>
      </div>

      {/* Hero Section with Profile */}
      <div className="relative pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fadeInDown">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 shadow-xl" style={{ borderColor: '#d1ad4f' }}>
            <img
              src={profileImage}
              alt="Lourdes Dias"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 5%' }}
            />
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}>
            Reclaim Time. Multiply Income.
          </h1>
          <p className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#d1ad4f' }}>
            Architect Freedom (The Kingdom Way).
          </p>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <span className="font-semibold">Lourdes</span>—Wife. Mom. Entrepreneur. Faith-Driven Business Builder. The one who said <span className="italic">"I'm not choosing between my family, my faith, and my goals."</span> <br />I build businesses that <span className="font-bold">honor God</span>, strengthen my family, and create lasting Kingdom impact. Now I'm showing YOU how to do the same.
          </p>
          <p className="text-sm text-slate-600 mt-4 font-semibold italic text-center">
            📖 "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." — Colossians 3:23
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8 animate-bounce">
          <ChevronDown className="w-6 h-6" style={{ color: '#d1ad4f' }} />
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="relative px-4 max-w-xl mx-auto mb-8">
        <div className="bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl flex border border-slate-300/50 shadow-inner">
          <button
            onClick={() => setActiveTab('featured')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 uppercase tracking-wider ${activeTab === 'featured'
              ? 'bg-white text-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            Featured
          </button>
          <button
            onClick={() => setActiveTab('vault')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 uppercase tracking-wider ${activeTab === 'vault'
              ? 'bg-white text-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            The Free Vault 💎
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-h-[400px]">
          {currentOfferings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={offering.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(offering.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
                } as React.CSSProperties}
              >
                {/* Card background glow */}
                <div
                  className={`absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-20`}
                  style={{ background: `linear-gradient(to bottom right, ${offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f'}, ${offering.id === 2 || offering.id === 4 ? '#d1ad4f' : '#13b6a4'})` }}
                ></div>

                {/* Card */}
                <div
                  className={`relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-2xl border ${!offering.isFreebie ? 'cursor-pointer' : ''}`}
                  style={{ borderColor: offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f' }}
                  onClick={() => !offering.isFreebie && window.open(offering.url, '_blank')}
                >

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-opacity-10 border mb-3`}
                        style={{
                          borderColor: offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f',
                          backgroundColor: (offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f') + '20'
                        }}
                      >
                        <Sparkles className="w-3 h-3" style={{ color: offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f' }} />
                        <span
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f' }}
                        >
                          {offering.highlight}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}>{offering.title}</h3>
                      <p
                        className="text-sm font-semibold line-clamp-2"
                        style={{ color: offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f' }}
                      >
                        {offering.subtitle}
                      </p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 text-white flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f'}, ${offering.id === 2 || offering.id === 4 ? '#16b9a7' : '#aa8937'})` }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-grow font-medium">
                    {offering.description}
                  </p>

                  {/* CTA Section */}
                  <div className="space-y-3 mt-auto">
                    {offering.isFreebie ? (
                      <SubscriptionModal
                        provider={offering.provider || "email-octopus"}
                        formId={offering.emailFormId || ""}
                        buttonText={offering.cta}
                        title={`Download ${offering.title}`}
                        description="Enter your best email below. Once confirmed, I'll send the CRA checklist directly to your inbox so you can start paying your kids legally."
                      />
                    ) : (
                      <div
                        className="group/btn relative w-full px-6 py-3 rounded-lg font-semibold text-center text-sm uppercase tracking-wider transition-all duration-500 overflow-hidden flex items-center justify-center gap-2 text-white"
                        style={{ background: `linear-gradient(135deg, ${offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f'}, ${offering.id === 2 || offering.id === 4 ? '#d1ad4f' : '#aa8937'})` }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {offering.cta}
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 bg-white"></div>
                      </div>
                    )}

                    <p className="text-xs text-slate-500 text-center">
                      {offering.subtext}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}>
          Join Thousands of Parents & Entrepreneurs Building Real Wealth
        </h2>
        <p className="text-slate-600 mb-8">While keeping what matters most—your family, your presence, your freedom.</p>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold" style={{ color: '#d1ad4f' }}>50+</p>
            <p className="text-sm text-slate-500">Beta Testers (Vision Architect)</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ color: '#13b6a4' }}>6 Days</p>
            <p className="text-sm text-slate-500">To Life-Changing Clarity</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ color: '#d1ad4f' }}>24/7</p>
            <p className="text-sm text-slate-500">Vision Architect Mentor</p>
          </div>
        </div>
      </div>

      {/* CTA Bottom Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto text-center mb-16">
        <div
          className="rounded-2xl p-8 backdrop-blur-xl border"
          style={{
            background: 'rgba(209, 173, 79, 0.05)',
            borderColor: '#d1ad4f'
          }}
        >
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}>
            Which One Speaks to You?
          </h3>
          <p className="text-slate-600 mb-6">Your next breakthrough is one click away. I'm with you every step.</p>
          <p className="text-xs text-slate-500"><span className="font-semibold">Vision Architect & Viral Engine</span> (online course programs) include 7-day money-back guarantee. <span className="font-semibold">Freedom Business Blueprint & The Wealth Builder</span> = lifetime access until you cancel.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-slate-200 py-8 px-4 text-center text-slate-500 text-sm">
        <p>Built by Lourdes Dias for parents who refuse to choose. © 2026. All rights reserved.</p>
      </footer>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&display=swap');

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}

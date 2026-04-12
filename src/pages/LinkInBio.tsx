import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Globe, Mail, ChevronDown, Briefcase, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from "@/assets/profile-linkinbio.png";
import logoImage from "@/assets/logo.png";
import SubscriptionModal from "@/components/landing/SubscriptionModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmailOctopusSubscribeForm from "@/components/landing/EmailOctopusSubscribeForm";

interface Offering {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  subtext: string;
  badge?: string;
  badgeBg?: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  badgeTextColor: string;
  icon: React.ElementType;
  highlight: string;
  url: string;
  isFreebie?: boolean;
  provider?: "beehiiv" | "email-octopus" | "safety-bridge";
  emailFormId?: string;
  offerName?: string;
  successUrl?: string;
  successButtonText?: string;
  successDescription?: string;
}

interface VaultOffering {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  subtext: string;
  badge?: string;
  badgeBg?: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  badgeTextColor: string;
  icon: React.ElementType;
  highlight: string;
  url: string;
  isFreebie?: boolean;
  provider?: "beehiiv" | "email-octopus" | "safety-bridge";
  emailFormId?: string;
  offerName?: string;
  successUrl?: string;
  successButtonText?: string;
  successDescription?: string;
}

export default function LinkInBio() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'featured' | 'vault' | 'workshops'>('featured');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed EmailOctopus global script injection to prevent auto-popup

  const offerings: Offering[] = [
    {
      id: 2,
      title: "Viral Engine",
      subtitle: "Replace Your $5K/Month Agency Team",
      description: "23+ AI engines create a week of viral content in 10 minutes. Build a PROFITABLE business that honors God.",
      cta: "Start for FREE",
      subtext: "23+ engines, 1 dashboard. Official launch April 1st!",
      color: "from-cyan-500 to-yellow-500",
      bgGradient: "from-cyan-600/20 to-yellow-600/20",
      borderColor: "border-cyan-500/50",
      badgeTextColor: "text-white",
      icon: Zap,
      highlight: "Now Live!",
      url: "https://viralengine.app"
    },
    {
      id: 5,
      title: "Marketing Agency",
      subtitle: "Websites, Funnels & Content That Convert",
      description: "High-converting marketing systems for Faith-Driven entrepreneurs. Custom projects & done-for-you marketing.",
      cta: "Learn More",
      subtext: "Book a free strategy call.",
      color: "from-cyan-400 to-yellow-500",
      bgGradient: "from-cyan-500/20 to-yellow-500/20",
      borderColor: "border-cyan-400/50",
      badgeTextColor: "text-white",
      icon: Briefcase,
      highlight: "Done-For-You",
      url: "/agency"
    },
    {
      id: 3,
      title: "Freedom Blueprint",
      subtitle: "Build a God-Honoring Travel Business",
      description: "WHOLESALE deals. Tax-optimized structure. Passive revenue. Create Kingdom wealth through travel.",
      cta: "Explore Blueprint",
      subtext: "Lifetime access. Tax strategies included.",
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
      title: "Newsletter",
      subtitle: "Weekly Biblical Wealth Strategies",
      description: "How to make $1k-$5k monthly aligned with God's design. Stewardship + generational wealth.",
      cta: "Subscribe",
      subtext: "Free every Monday. Join Faith-Driven parents.",
      color: "from-yellow-500 to-yellow-400",
      bgGradient: "from-yellow-600/20 to-yellow-500/20",
      borderColor: "border-yellow-500/50",
      badgeTextColor: "text-slate-900",
      icon: Mail,
      highlight: "Free • Weekly",
      url: "/newsletter"
    },
    {
      id: 1,
      title: "Vision Architect",
      subtitle: "Get CLARITY In 6 Days (Kingdom Blueprint)",
      description: "CRYSTAL-CLEAR blueprint for thriving in Faith, Family, Finance, Fitness, Freedom, Fun & Fruitfulness.",
      cta: "Join Waitlist",
      subtext: "Lifetime Vision Architect Mentor + updates.",
      color: "from-yellow-500 to-cyan-400",
      bgGradient: "from-yellow-600/20 to-cyan-600/20",
      borderColor: "border-yellow-500/50",
      badgeTextColor: "text-white",
      icon: Sparkles,
      highlight: "Lifetime Updates",
      url: "/vision-architect"
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
      url: "/link-in-bio",
      isFreebie: true,
      provider: "safety-bridge",
      offerName: "Pay Your Kids Checklist",
      successUrl: "/Pay_Your_Kids_Legally_Canada.pdf",
      successButtonText: "Download PDF Now",
      successDescription: "Success! Your checklist is ready. (Be sure to check your Promotions or Spam folder for the copy I sent you!) Click the button below to download it immediately."
    }
  ];

  const workshopOfferings: Offering[] = [
    {
      id: 201,
      title: "US-CAN Tax Filing Masterclass",
      subtitle: "File Your Business Taxes For $0 (Solopreneur Edition)",
      description: "Stop overpaying for tax software. Learn how to file Schedule C (US) or Form T2125 (Canada) for FREE. Master home office deductions, startup costs, and audit protection. Specifically for self-employed individuals (No Corporations).",
      cta: "Register for Masterclass",
      subtext: "Limited enrollment session. Register to save your seat.",
      color: "from-yellow-500 to-amber-400",
      bgGradient: "from-yellow-600/20 to-amber-600/20",
      borderColor: "border-yellow-500/50",
      badgeTextColor: "text-slate-900",
      icon: Gift,
      highlight: "Free Workshop",
      url: "/tax-training"
    }
  ];

  const currentOfferings = activeTab === 'featured' 
    ? offerings 
    : activeTab === 'vault' 
      ? vaultOfferings 
      : workshopOfferings;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 overflow-hidden">
      {/* Subtle background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-100/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>



      {/* Hero Section with Profile */}
      <div className="relative pt-4 pb-6 px-4 max-w-xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-4 animate-fadeInDown">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 shadow-xl ring-4 ring-yellow-400/20" style={{ borderColor: '#d1ad4f' }}>
            <img
              src={profileImage}
              alt="Lourdes Dias"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 5%' }}
            />
          </div>

          <p className="text-xl font-bold mb-0 text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>Lourdes Dias</p>
          <p className="text-sm font-semibold mb-2 opacity-90" style={{ color: '#d1ad4f' }}>@learnwithlourdes</p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}>
            Reclaim Time. Multiply Income.
          </h1>
          <p className="text-lg sm:text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#d1ad4f' }}>
            Architect Freedom (The Kingdom Way).
          </p>
          <p className="text-[11px] sm:text-sm text-slate-700 max-w-[90%] mx-auto leading-relaxed">
            Hi, I'm <span className="font-semibold">Lourdes</span>—Mom. Entrepreneur. Christian Business Builder. The one who said <span className="italic">"I'm not choosing between my kids, my faith, and my goals."</span> <br className="hidden sm:block" />I build businesses that <span className="font-bold">honor God</span>, strengthen my family, and create lasting Kingdom impact. Now I'm showing YOU how to do the same.
          </p>
          <p className="text-[9px] sm:text-xs text-slate-600 mt-3 font-semibold italic text-center max-w-[95%] mx-auto">
            📖 "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." — Colossians 3:23
          </p>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="relative px-4 max-w-xl mx-auto mb-8">
        <div className="bg-slate-200/50 backdrop-blur-md p-1 rounded-xl flex border border-slate-300/50 shadow-inner">
          <button
            onClick={() => setActiveTab('featured')}
            className={`flex-1 py-2 px-1 rounded-lg font-bold text-[9px] sm:text-xs transition-all duration-300 uppercase tracking-tight ${activeTab === 'featured'
              ? 'bg-white text-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            Featured
          </button>
          <button
            onClick={() => setActiveTab('vault')}
            className={`flex-1 py-2 px-1 rounded-lg font-bold text-[9px] sm:text-xs transition-all duration-300 uppercase tracking-tight flex items-center justify-center gap-1 sm:gap-2 ${activeTab === 'vault'
              ? 'bg-white text-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            The Free Vault 💎
          </button>
          <button
            onClick={() => setActiveTab('workshops')}
            className={`flex-1 py-2 px-1 rounded-lg font-bold text-[9px] sm:text-xs transition-all duration-300 uppercase tracking-tight flex items-center justify-center gap-1 sm:gap-2 ${activeTab === 'workshops'
              ? 'bg-white text-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            Workshops 🎓
          </button>
        </div>
      </div>

      {/* Cards List */}
      <div className="relative px-4 pb-12 max-w-xl mx-auto">
        <div className="flex flex-col gap-3">
          {currentOfferings.map((offering, index) => {
            const Icon = offering.icon;
            
            const CardContent = (
              <div
                className={`w-full relative bg-white/80 backdrop-blur-md rounded-2xl p-3.5 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-md border cursor-pointer group`}
                style={{ borderColor: offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f' }}
              >
                {/* Icon side */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${offering.id === 2 || offering.id === 4 ? '#13b6a4' : '#d1ad4f'}, ${offering.id === 2 || offering.id === 4 ? '#16b9a7' : '#aa8937'})` }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text Content */}
                <div className="flex-grow min-w-0 text-left py-0.5">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h3 className="text-base font-bold text-slate-900 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{offering.title}</h3>
                    {offering.highlight && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-slate-100 font-bold uppercase tracking-tight text-slate-500 border border-slate-200 shrink-0 whitespace-nowrap">
                        {offering.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-snug mt-1 pr-2">
                    {offering.subtitle}
                  </p>
                </div>

                {/* Action Indicator */}
                <div className="flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            );

            return (
              <div
                key={offering.id}
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.05}s both`
                } as React.CSSProperties}
              >
                {offering.isFreebie ? (
                  <SubscriptionModal 
                    provider={offering.provider}
                    formId={offering.emailFormId}
                    offerName={offering.offerName || offering.title}
                    title={offering.title}
                    description={offering.description}
                    successUrl={offering.successUrl}
                    successButtonText={offering.successButtonText}
                    successDescription={offering.successDescription}
                    variant="ghost"
                  >
                    {CardContent}
                  </SubscriptionModal>
                ) : (
                  <div onClick={() => window.open(offering.url, offering.url.startsWith('/') ? '_self' : '_blank')}>
                    {CardContent}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>



      {/* Social Proof Section - More compact */}
      <div className="relative px-4 py-8 max-w-xl mx-auto text-center">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xl font-bold" style={{ color: '#d1ad4f' }}>50+</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Beta Testers</p>
          </div>
          <div>
            <p className="text-xl font-bold" style={{ color: '#13b6a4' }}>6 Days</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">To Clarity</p>
          </div>
          <div>
            <p className="text-xl font-bold" style={{ color: '#d1ad4f' }}>24/7</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Mentor</p>
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
      <footer className="relative border-t border-slate-200 pt-10 pb-8 px-4 text-center text-slate-500 text-sm">
        <div className="flex justify-center mb-6">
          <img src={logoImage} alt="Learn With Lourdes" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity" />
        </div>
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

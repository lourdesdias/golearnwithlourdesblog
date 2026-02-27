
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Sparkles, TrendingUp, Target, BarChart, Rocket, Shield, Lock } from "lucide-react";
import BeehiivModal from "@/components/landing/BeehiivModal";
import logoImage from "@/assets/logo.png";

export default function ViralEngineLP() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const engines = [
    { name: "14-Platform Content Engine", power: "Native, zero-placeholder content for Instagram, TikTok, LinkedIn, YouTube, X, and 9 more platforms.", icon: "🎯" },
    { name: "Live Data Intelligence", power: "Real-time trends pulled directly from Google Trends, YouTube v3, and Reddit APIs—not static AI guesses.", icon: "📊" },
    { name: "Dynamic Niche Integration", power: "Weaves your Creator Identity, Authority Title, and Personal Bio into every piece of content seamlessly.", icon: "🧬" },
    { name: "5-Step Campaign Wizard", power: "A high-status workflow: Discover, Identity, Context, Refine, and Draft. Zero overwhelm, maximum strategy.", icon: "🪄" },
    { name: "AI Twin Image Studio", power: "Neural-powered 'Twin Mode'. Generate realistic lifestyles featuring your own face in high-status environments.", icon: "🖼" },
    { name: "Rainmaker Conversion Hub", power: "14 integrated funnels, email sequences, VSL scripts, and DM/Comment strategies to monetize your attention.", icon: "💰" },
    { name: "Virality X-Ray", power: "Drop any viral URL → Get the psychological blueprint (Status Signaling, Zeigarnik Effect) → Remix your version.", icon: "🔍" },
    { name: "A/B Hook Engine", power: "Generates 5 strategic hooks based on live data with a scientific 'Virality Score' and Top-Scorer badge.", icon: "🪝" },
    { name: "Millon-Dollar Product Forge", power: "Enter 1 keyword → Get 12 sell-ready digital products (eBooks, courses, templates) built in minutes.", icon: "🛠" },
    { name: "SEO Authority Writer", power: "Native-sounding blog posts designed to rank #1 in the world's most competitive search engines.", icon: "📝" },
    { name: "The Bio Architect", power: "Platform-specific bios that force profile visitors to convert into permanent followers and leads.", icon: "📋" },
    { name: "Neural Model Selection", power: "Select from the world's most advanced neural engines. Whitelabeled, high-status outputs every time.", icon: "⚙️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Logo Header */}
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex justify-center">
          <img src={logoImage} alt="Learn With Lourdes" className="h-16 w-auto" />
        </div>
      </div>

      {/* Hero */}
      <div className="relative pt-6 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4 sm:mb-6 text-xs sm:text-sm">
          <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
          <span className="text-white font-medium">19 Engines. 1 Dashboard. Q1 2026.</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white">
            Finally: The AI Built For
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-400 uppercase tracking-tighter">
            Viral Engine
          </span>
          <span className="text-white block text-2xl sm:text-3xl md:text-4xl mt-2 italic font-medium">Attention into Authority.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-4 sm:mb-6 leading-relaxed">
          The <span className="text-yellow-400 font-bold">ONLY</span> all-in-one platform built for creators who demand <span className="text-white underline decoration-cyan-400/50 underline-offset-4">LIVE Data Intelligence</span> over generic AI predictions.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium">
          Stop guessing. We pull real-time trends from <span className="text-white">Google, YouTube, and Reddit</span> to build a week of viral, high-status content in 10 minutes. <span className="text-yellow-400">Profit with total purpose.</span>
        </p>

        {/* Hero CTA */}
        <div className="flex justify-center">
          <BeehiivModal
            formId="555585ed-0d1f-4ab5-b90a-b3946e20c082"
            buttonText="Join the Waitlist Now"
            title="Viral Engine Waitlist"
          />
        </div>
      </div>

      {/* The Pain Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          You're Trapped in the Content Creation Graveyard
        </h2>
        <p className="text-center text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">And every month, you're throwing THOUSANDS at tools that don't work together.</p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-red-500/10 to-yellow-500/5 border border-red-500/30 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> The Content Trap
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex gap-2 text-red-50/90">
                <span className="text-red-400 text-xl sm:text-2xl flex-shrink-0">🔴</span>
                <span><span className="font-bold">Generic AI</span> that sounds robotic and lacks your niche identity.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-xl sm:text-2xl flex-shrink-0">🔴</span>
                <span><span className="font-bold">Static Hook Lists</span> that worked in 2023, but fail today.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-xl sm:text-2xl flex-shrink-0">🔴</span>
                <span><span className="font-bold">Disconnected Tools</span> forcing you to copy-paste all day.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-xl sm:text-2xl flex-shrink-0">🔴</span>
                <span><span className="font-bold">No Conversion Strategy</span>. Just posting for likes, not revenue.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/5 border border-cyan-500/30 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" /> The Viral Engine Standard
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex gap-2 text-cyan-50/90">
                <span className="text-cyan-400 text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span><span className="font-bold">Dynamic Niche Identity</span> woven into every script.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span><span className="font-bold">Real-Time Data Integration</span> with Trending APIs.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span><span className="font-bold">Unified 14-Platform Engine</span> from one dashboard.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span><span className="font-bold">Rainmaker Hub</span> designed for maximum ROI.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Engines */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 sm:mb-4 text-white uppercase tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          THE MILLION-DOLLAR SUITE
        </h2>
        <p className="text-center text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">Every tool has been reverse-engineered from the highest-performing digital businesses on the planet.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/40 border border-yellow-500/20 rounded-xl p-4 sm:p-6 hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {engine.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-white mb-2">{engine.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{engine.power}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Forge Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/10 border border-yellow-500/40 rounded-xl p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            🛠 THE MILLION-DOLLAR Product Forge
          </h3>
          <p className="text-slate-200 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Turn 1 Keyword Into 12 Digital Products. Our Zero-Placeholder Protocol ensures your eBooks, checklists, and video courses are ready to sell instantly. No team required.
          </p>
          <div className="bg-slate-950/40 p-4 rounded-lg border border-yellow-500/20">
            <p className="text-yellow-400 font-bold text-sm sm:text-base md:text-lg italic">
              💰 THE MATH: 1 Keyword = 12 Products × $47 = $564/customer. 100 customers = $56,400 Profit.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Writer Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-500/20 to-yellow-500/10 border border-cyan-500/40 rounded-xl p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            📝 SEO Writer
          </h3>
          <p className="text-slate-200 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Blog Posts Designed to RANK #1 in Google. Free traffic. Forever. SEO-optimized content that brings customers to you automatically.
          </p>
          <p className="text-cyan-400 font-bold text-sm sm:text-base md:text-lg">
            📈 SEO Growth: 50 Articles × 500 Visitors × 1% Conversion = 250 Customers/Month
          </p>
        </div>
      </div>

      {/* Value Stack */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          If You Built This Yourself...
        </h2>
        <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 border border-yellow-500/40 rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Replaces $3,126/month in tools</p>
          <p className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">$29-$199/mo</p>
          <p className="text-lg sm:text-2xl font-bold text-cyan-400">That's up to 99% savings</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-4xl mx-auto text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white uppercase tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
          SECURE YOUR LIFETIME FOUNDER ACCESS
        </h2>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          Built on world-class neural engines for creators who value speed and authority. Our <span className="text-white italic underline">"Unlimited Length"</span> video protocol puts you ahead of the competition.
        </p>
        <div className="flex justify-center flex-col items-center gap-6">
          <BeehiivModal
            formId="555585ed-0d1f-4ab5-b90a-b3946e20c082" // Official ID
            buttonText="Lock In Founder Pricing Now"
            title="Viral Engine Waitlist"
          />
          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Zero Credit Card Required</span>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Whitelabeled Security</span>
            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Real-Time Activation</span>
          </div>
        </div>
      </div>

      <footer className="relative border-t border-slate-800/50 py-12 px-4 text-center text-slate-500 text-xs sm:text-sm">
        <p className="max-w-md mx-auto mb-4 italic">
          Viral Engine: The Million-Dollar content machinery for creators who want profit without compromising purpose.
        </p>
        <p>© 2026 Viral Engine. All rights reserved.</p>
      </footer>


    </div>
  );
}

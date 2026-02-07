
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Sparkles, TrendingUp, Target, BarChart, Rocket, Shield, Lock } from "lucide-react";
import BeehiivModal from "@/components/landing/BeehiivModal";

export default function ViralEngineLP() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const engines = [
    { name: "Viral Campaign Generator", power: "Create ready-to-post content for 14+ platforms with psychologically-optimized hooks", icon: "🎯" },
    { name: "Trend Intelligence", power: "Reverse-engineer what's WORKING RIGHT NOW on TikTok, Instagram, LinkedIn, YouTube, X", icon: "📊" },
    { name: "Viral Analyzer", power: "Drop ANY viral post URL → Get its psychological blueprint → Create YOUR version in seconds", icon: "🔍" },
    { name: "Authority Matrix", power: "AI-generated carousel quote cards that position you as THE expert", icon: "🏛" },
    { name: "Image Studio + Twin Mode", power: "Upload one selfie → Generate pro images of YOU in any scenario", icon: "🖼" },
    { name: "Video Studio", power: "AI avatars. AI voiceovers in your voice. Unlimited video content in minutes", icon: "🎬" },
    { name: "Rainmaker", power: "Sales copy that CONVERTS. Email campaigns, sales pages, DM scripts, closing sequences", icon: "💰" },
    { name: "Product Forge", power: "Enter 1 keyword → Get 12 sell-ready digital products (eBooks, templates, courses)", icon: "🛠" },
    { name: "SEO Writer", power: "Generate blog posts designed to RANK #1 in Google (organic traffic on autopilot)", icon: "📝" },
    { name: "Bio Builder", power: "Platform-specific bios that convert profile visitors to followers", icon: "📋" },
    { name: "Content Brainstorm", power: "Unlimited content ideas based on your niche. Never face blank page again", icon: "💡" },
    { name: "Theme Calendar", power: "30-day content plan + themed days → Consistency = Growth", icon: "📆" },
    { name: "Cliffhanger Generator", power: "Story-driven content with open loops that keep viewers watching", icon: "🪝" },
    { name: "Expert Title Creator", power: "Generates positioning statements & expert titles → Premium pricing power", icon: "🏆" },
    { name: "Affiliate Tracking", power: "Built-in referral system with commission tracking", icon: "💸" },
    { name: "Ad Creative Generator", power: "Generate & test ad variations before you spend a single dollar", icon: "🎨" },
    { name: "Content Library", power: "Save, organize, search all generated content. Nothing gets lost.", icon: "📚" },
    { name: "Academy", power: "In-app education on how to use each feature like a pro", icon: "📖" },
    { name: "Settings & Model Selection", power: "Choose your AI engine (Gemini 2.0, GPT-4o, etc.). Your choice.", icon: "⚙️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero */}
      <div className="relative pt-12 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4 sm:mb-6 text-xs sm:text-sm">
          <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
          <span className="text-white font-medium">19 Engines. 1 Dashboard. Q1 2026.</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white">
            Finally: The AI Built For
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-400">
            Kingdom Creators
          </span>
          <span className="text-white block text-2xl sm:text-3xl md:text-4xl mt-2">Profit + Purpose.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-4 sm:mb-6 leading-relaxed font-semibold">
          The <span className="text-yellow-400">ONLY</span> all-in-one AI platform designed for creators who want <span className="font-bold">Kingdom impact alongside profitable business</span>.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          <span className="font-bold">No team. No chaos. No $5,000/month agencies.</span> 19 AI engines create a week of viral content in 10 minutes. <span className="text-yellow-400">Profitable revenue that aligns with your values.</span>
        </p>

        {/* Hero CTA */}
        <div className="flex justify-center">
          <BeehiivModal
            formId="00000000-0000-0000-0000-000000000000" // Placeholder ID
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
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> Right Now
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="text-red-400 text-xl sm:text-2xl flex-shrink-0">🔴</span>
                <span><span className="font-bold">5+ hours/week</span> scripting videos that get 100 views</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-xl sm:text-2xl flex-shrink-0">🔴</span>
                <span><span className="font-bold">$5,000+/month</span> bleeding across tools and VAs</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-xl sm:text-2xl flex-shrink-0">🔴</span>
                <span><span className="font-bold">2+ hours/day</span> engaging on social media</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-xl sm:text-2xl flex-shrink-0">🔴</span>
                <span><span className="font-bold">Zero system</span> to turn followers into customers</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> The Viral Engine Way
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="text-cyan-400 text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span><span className="font-bold">A WEEK of content</span> in just 10 MINUTES</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span><span className="font-bold">One dashboard</span> replaces $5k/month tools</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span><span className="font-bold">Rainmaker turns attention</span> into REVENUE</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span><span className="font-bold">Values-aligned</span> profit that honors God</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The 19 Engines */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 sm:mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          19 Powerful Engines
        </h2>
        <p className="text-center text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">Everything you need to go from content chaos to a revenue machine.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-yellow-500/30 rounded-lg p-4 sm:p-6 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{engine.icon}</span>
                <div className="flex-grow min-w-0">
                  <h3 className="font-bold text-sm sm:text-lg text-white mb-1 sm:mb-2">{engine.name}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{engine.power}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Forge Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/10 border border-yellow-500/40 rounded-xl p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            🛠 Product Forge
          </h3>
          <p className="text-slate-200 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Turn 1 Keyword Into 12 Digital Products. Enter ANY topic. Get eBooks, checklists, worksheets, video courses, email sequences, and bonus bundles—ready to sell.
          </p>
          <p className="text-yellow-400 font-bold text-sm sm:text-base md:text-lg">
            💰 The Math: 1 Keyword = 12 Products × $47 = $564/customer. 100 customers = $56,400
          </p>
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
            📈 50 Articles × 500 Visitors × 1% Conversion = 250 Customers/Month
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Try It Free
        </h2>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
          7-day free trial. No credit card required. If it doesn't save you 10+ hours/week, just cancel.
        </p>
        <div className="flex justify-center">
          <BeehiivModal
            formId="555585ed-0d1f-4ab5-b90a-b3946e20c082" // Official ID
            buttonText="Lock In Founder Pricing Now"
            title="Viral Engine Waitlist"
          />
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-4 sm:mt-6">
          Limited 100 founder spots. Lock in lifetime pricing. Q1 2026 access.
        </p>
      </div>

      <footer className="relative border-t border-slate-800/50 py-6 sm:py-8 px-4 text-center text-slate-500 text-xs sm:text-sm">
        <p>Viral Engine: AI Content + Sales + Kingdom Impact. © 2026.</p>
      </footer>


    </div>
  );
}

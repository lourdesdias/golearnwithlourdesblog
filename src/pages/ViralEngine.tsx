import React, { useState } from 'react';
import { CheckCircle2, Zap, ArrowRight, Sparkles, Lock } from 'lucide-react';

export default function ViralEngineLandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
          <Lock className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-white font-medium">19 Engines. 1 Dashboard. Zero Chaos. Q1 2026.</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white">
            Finally: The AI That Creates Content,
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-400">
            Generates Sales, AND Builds Your Brand
          </span>
          <span className="text-white"> — While You Sleep.</span>
        </h1>

        <p className="text-2xl text-slate-200 max-w-3xl mx-auto mb-6 leading-relaxed font-semibold">
          Viral Engine is the <span className="text-yellow-400">ONLY</span> all-in-one platform that combines viral content creation, professional visual design, video production, AND high-converting sales copy into a single dashboard.
        </p>

        <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          <span className="font-bold">No team. No chaos. No $5,000/month agencies.</span> Just 19 AI engines working 24/7 to turn your ideas into viral content, digital products, and passive revenue streams.
        </p>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-yellow-500/20 to-cyan-500/20 border border-yellow-500/40 rounded-2xl p-8 backdrop-blur-xl max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-cyan-400 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center justify-center gap-2"
              >
                Get Founder Access Now <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-400">⚡ Limited 100 founder spots. Lock in lifetime pricing.</p>
            </form>
          ) : (
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold">You're In!</h3>
              <p className="text-slate-400 text-sm">Check your email for founder pricing + early Q1 2026 access.</p>
            </div>
          )}
        </div>
      </div>

      {/* The Pain Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          You're Trapped in the Content Creation Graveyard
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">And every month, you're throwing THOUSANDS at tools and people who can't keep up.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-500/10 to-yellow-500/5 border border-red-500/30 rounded-xl p-8">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" /> The Reality You're Living RIGHT NOW
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-2">
                <span className="text-red-400 text-2xl">🔴</span>
                <span><span className="font-bold">5+ hours/week</span> scripting videos that get 100 views</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-2xl">🔴</span>
                <span><span className="font-bold">$5,000+/month</span> bleeding across tools and VAs</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-2xl">🔴</span>
                <span><span className="font-bold">2+ hours/day</span> engaging on social media</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-2xl">🔴</span>
                <span><span className="font-bold">Zero system</span> to turn followers into customers</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 text-2xl">🔴</span>
                <span><span className="font-bold">30+ fragmented tools</span> that don't work together</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 rounded-xl p-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> The Viral Engine Way
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-2">
                <span className="text-cyan-400 text-2xl">✅</span>
                <span><span className="font-bold">A WEEK of content</span> in just 10 MINUTES</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-2xl">✅</span>
                <span><span className="font-bold">One unified dashboard</span> replaces $5k/month tools</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-2xl">✅</span>
                <span><span className="font-bold">Rainmaker turns attention</span> into REVENUE</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-2xl">✅</span>
                <span><span className="font-bold">Product Forge creates 12</span> digital products per topic</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 text-2xl">✅</span>
                <span><span className="font-bold">SEO Writer gets</span> FREE Google traffic</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The 19 Engines */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          19 Powerful Engines. Working Together.
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">Everything a solo creator needs to go from content chaos to a revenue machine.</p>

        <div className="grid md:grid-cols-2 gap-4">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-yellow-500/30 rounded-lg p-6 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{engine.icon}</span>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg text-white mb-2">{engine.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{engine.power}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Forge Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/10 border border-yellow-500/40 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            🛠 Product Forge: Turn 1 Keyword Into 12 Digital Products
          </h3>
          <p className="text-slate-200 mb-6 text-lg leading-relaxed">
            Enter ANY topic you're expert in. Product Forge generates a complete digital product ecosystem in MINUTES: eBooks, checklists, worksheets, video courses, email sequences, and bonus bundles.
          </p>
          <p className="text-yellow-400 font-bold text-lg">
            💰 The Math: 1 Keyword = 12 Products × $47 avg price = $564 potential revenue per customer. 100 customers = $56,400 from ONE keyword session.
          </p>
        </div>
      </div>

      {/* SEO Writer Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-500/20 to-yellow-500/10 border border-cyan-500/40 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            📝 SEO Writer: Blog Posts Designed to RANK #1 in Google
          </h3>
          <p className="text-slate-200 mb-6 text-lg leading-relaxed">
            SEO Writer generates long-form blog posts specifically optimized to rank in Google search results. Free traffic. Forever.
          </p>
          <p className="text-cyan-400 font-bold text-lg">
            📈 The Equation: 50 articles × 500 avg visitors × 1% conversion = 250 new customers/month from organic search alone
          </p>
        </div>
      </div>

      {/* Value Stack */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          If You Built This Yourself (Tool by Tool)...
        </h2>
        <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 border border-yellow-500/40 rounded-2xl p-12 text-center">
          <p className="text-slate-300 mb-4 text-lg">Your All-In-One Viral Engine Price:</p>
          <p className="text-5xl font-bold text-yellow-400 mb-2">$29-$199/month</p>
          <p className="text-2xl font-bold text-white mb-4">Replaces $3,126/month in tools</p>
          <p className="text-2xl font-bold text-cyan-400">That's 97% savings on the same capabilities.</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Try It Free. See the Magic. Then Decide.
        </h2>
        <p className="text-slate-300 text-lg mb-8">
          7-day free trial. No credit card required. If Viral Engine doesn't save you 10+ hours/week, just cancel.
        </p>
        <a
          href="#"
          className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-500 to-cyan-400 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all text-lg"
        >
          Start Your Free 7-Day Trial
        </a>
        <p className="text-sm text-slate-500 mt-6">
          Limited 100 founder spots. Lock in lifetime pricing ($1 for first month, then $79-$499). Q1 2026 access.
        </p>
      </div>

      <footer className="relative border-t border-slate-800/50 py-8 px-4 text-center text-slate-500 text-sm">
        <p>Viral Engine: The only platform that creates content, generates sales, AND builds your brand. © 2026.</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&display=swap');
      `}</style>
    </div>
  );
}

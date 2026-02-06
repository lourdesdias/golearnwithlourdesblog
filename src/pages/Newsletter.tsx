import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Zap, Heart, TrendingUp } from 'lucide-react';

export default function NewsletterLP() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const issues = [
    { title: "The Hidden Tax Hack", desc: "One weird tax strategy that saves families $3k-$10k/year (legally)" },
    { title: "Build While You Sleep", desc: "Automation systems that run on their own" },
    { title: "Teach Your Kids Wealth", desc: "Money conversations that actually stick (tested with 8-18 year olds)" },
    { title: "The Exit Strategy", desc: "How to scale yourself OUT of your business (so you're not a slave to it)" },
    { title: "Family Money Meetings", desc: "Turn finances from scary to bonding time" },
    { title: "The 7 F's Audit", desc: "Where you actually stand in all 7 areas (and what to fix first)" }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Course Creator & Mom of 2",
      quote: "These aren't generic tips. Lourdes lives this stuff. I've made an extra $15k this year just from ONE strategy from her newsletter."
    },
    {
      name: "Marcus T.",
      role: "Entrepreneur",
      quote: "Finally found someone who gets that you can't choose between money and family. This newsletter makes that CLEAR."
    },
    {
      name: "Jennifer L.",
      role: "Business Owner",
      quote: "My kids now understand business in a way I never did at their age. The generational wealth mindset starts here."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
          <Mail className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-white font-medium">Builders & Parents Only</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white">
            Real Money Moves.
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-400">
            Real Families.
          </span>
        </h1>

        <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          The Wealth Builder is a weekly newsletter for parents who refuse to choose between money and family. Real business ideas. Real family strategies. Real results.
        </p>

        {/* CTA */}
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
                className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-cyan-400 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center justify-center gap-2"
              >
                Subscribe Free <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-400">No credit card. Unsubscribe anytime. Weekly on Mondays.</p>
            </form>
          ) : (
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold">Welcome to the Circle!</h3>
              <p className="text-slate-400 text-sm">Check your email for this week's issue + exclusive subscriber content.</p>
            </div>
          )}
        </div>
      </div>

      {/* What You'll Get */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Every Week, You Get
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "One Actionable Business Idea",
              desc: "A REAL strategy you can implement Monday morning. No theory. No fluff. By Friday, you'll be running it."
            },
            {
              icon: Heart,
              title: "One Family Money Lesson",
              desc: "A conversation starter with your kids. Real wealth lessons. Tested. Ready to use at dinner."
            },
            {
              icon: Zap,
              title: "One Game-Changing Insight",
              desc: "The 'aha' that makes everything click. Wisdom from 10+ years of building wealth while raising kids."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-yellow-500/30 rounded-xl p-8 hover:border-cyan-500/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-cyan-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-slate-950" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sample Topics */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Recent Newsletter Issues
        </h2>
        <p className="text-center text-slate-400 mb-12">Real issues. Real solutions. No recycled advice.</p>

        <div className="grid md:grid-cols-2 gap-4">
          {issues.map((issue, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-yellow-500/30 rounded-lg p-6 hover:border-cyan-500/30 transition-all group"
              style={{
                animation: `slideIn 0.5s ease-out ${idx * 0.05}s both`
              }}
            >
              <h3 className="font-bold text-lg group-hover:text-yellow-400 transition-colors mb-2 text-white">{issue.title}</h3>
              <p className="text-slate-400 text-sm">{issue.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why This Matters */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 border border-yellow-500/40 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Problem Most Parents Face
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-yellow-400 mb-3">The Trap</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✗ Work more, have less (and feel empty)</li>
                <li>✗ Kids think money is complicated (or they don't care)</li>
                <li>✗ No roadmap for generational wealth</li>
                <li>✗ Guilt about "choosing" between ambition and presence</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-cyan-400 mb-3">What's Possible</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Systems that work WITH family, not against it</li>
                <li>✓ Teach your kids wealth in real-time</li>
                <li>✓ A 5-10 year roadmap to generational wealth</li>
                <li>✓ BUILD YOUR EMPIRE AND HAVE YOUR FAMILY. Choose both.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          What Subscribers Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-yellow-500/30 rounded-xl p-8">
              <p className="text-slate-300 mb-6 italic text-sm">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-sm text-white">{testimonial.name}</p>
                <p className="text-xs text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof Numbers */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500/10 to-cyan-500/10 border border-yellow-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Join Parents & Builders Building Real Wealth
          </h2>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-yellow-400">Weekly</p>
              <p className="text-sm text-slate-400">Real Ideas Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-cyan-400">100%</p>
              <p className="text-sm text-slate-400">Honest & Transparent</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-400">Free</p>
              <p className="text-sm text-slate-400">Every Monday</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Ready to Build Your Wealth Legacy?
        </h2>
        <p className="text-slate-300 text-lg mb-8">Join founders and parents building intentionally. New issue every Monday.</p>
        <a
          href="#"
          className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-cyan-400 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all"
        >
          Subscribe Free Now
        </a>
        <p className="text-sm text-slate-500 mt-4">Unsubscribe anytime. No spam. Only value.</p>
      </div>

      <footer className="relative border-t border-slate-800/50 py-8 px-4 text-center text-slate-500 text-sm">
        <p>The Wealth Builder brought to you by Lourdes Dias. © 2026. All rights reserved.</p>
      </footer>

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
      `}</style>
    </div>
  );
}

import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Zap, Heart, TrendingUp } from 'lucide-react';
import BeehiivModal from '@/components/landing/BeehiivModal';
import logoImage from "@/assets/logo.png";

export default function NewsletterLP() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Note: We use the dynamic BeehiivSubscribeForm component here.
  // The formId can be updated once the user provides the specific ID for the newsletter.

  const issues = [
    { title: "Proverbs-Based Business Decisions", desc: "Ancient wisdom for modern entrepreneurship. Building on Biblical principles." },
    { title: "Generational Wealth God's Way", desc: "Create legacy wealth that honors God and serves your family's future." },
    { title: "Faith + Finance Integration", desc: "How to align your business decisions with your spiritual convictions." },
    { title: "Teach Your Kids Biblical Money Principles", desc: "Stewardship, giving, and wealth-building conversations with real impact." },
    { title: "The Kingdom Business Model", desc: "Profit AND purpose. Building a business that glorifies God." },
    { title: "Work As Worship", desc: "Seeing your entrepreneurial journey as an act of faith and service." }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Course Creator & Mom of 2",
      quote: "These aren't generic tips. Lourdes lives this stuff. I've seen a meaningful increase in my revenue just from ONE strategy from her newsletter."
    },
    {
      name: "Marcus t.",
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

      {/* Logo Header */}
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex justify-center">
          <img src={logoImage} alt="Learn With Lourdes" className="h-16 w-auto" />
        </div>
      </div>

      {/* Hero */}
      <div className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
          <Mail className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-white font-medium">Christian Builders & Parents</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white">
            Real Money Moves.
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-400">
            Real Faith. Real Families.
          </span>
        </h1>

        <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Join a community of Faith-Driven entrepreneurs architecting their life and business with AI.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <BeehiivModal
            formId="21ef0f03-f951-4638-8680-b26df65bbe16"
            buttonText="Join The Wealth Builder"
            title="Subscribe to The Wealth Builder"
          />
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
              desc: "The 'aha' that makes everything click. Wisdom from over a decade of building wealth while raising kids."
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
              } as React.CSSProperties}
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
          <p className="text-center text-slate-300 mb-8 italic text-lg">
            "God has called us to be stewards of what He's given us. That includes our talents, our resources, and our families. Building wealth in alignment with God's Kingdom isn't about greed—it's about obedience and generational blessing."
          </p>

          <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Problem Most Christian Parents Face
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-yellow-400 mb-3">The Trap</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✗ Hustle without Kingdom purpose (just spinning)</li>
                <li>✗ Kids don't see faith integrated with business</li>
                <li>✗ No Biblical framework for wealth-building</li>
                <li>✗ Guilt about pursuing profit while serving God</li>
                <li>✗ Money decisions made without spiritual alignment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-cyan-400 mb-3">God's Way Works</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Business as ministry + stewardship</li>
                <li>✓ Teach your kids Kingdom-centered wealth principles</li>
                <li>✓ Biblical roadmap to generational legacy</li>
                <li>✓ HONOR GOD AND BUILD WEALTH. Both glorify Him.</li>
                <li>✓ Decisions aligned with your faith convictions</li>
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
              <p className="text-4xl font-bold text-cyan-400">Always</p>
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
        <div className="flex justify-center">
          <BeehiivModal
            formId="21ef0f03-f951-4638-8680-b26df65bbe16"
            buttonText="Build My Wealth Legacy"
            title="Subscribe to The Wealth Builder"
          />
        </div>
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

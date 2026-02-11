import React, { useState } from 'react';
import { CheckCircle2, Sparkles, ArrowRight, Heart, Zap, Users, Calendar } from 'lucide-react';
import BeehiivModal from "@/components/landing/BeehiivModal";
import logoImage from "@/assets/logo.png";

import priyaImage from "@/assets/testimonials/priya-kapoor.jpg";
import marcusImage from "@/assets/testimonials/marcus-chen.jpg";
import sophiaImage from "@/assets/testimonials/sophia-reyes.jpg";
import jamesImage from "@/assets/testimonials/james-okonkwo.jpg";
import elenaImage from "@/assets/testimonials/elena-vasquez.jpg";
import junessaImage from "@/assets/testimonials/junessa-travelist.jpg";
import marilenImage from "@/assets/testimonials/marilen-de-leon.jpg";
import zhannaImage from "@/assets/testimonials/zhanna.jpg";

export default function VisionArchitectLP() {
  const modules = [
    {
      number: 1,
      title: "The Identity Mirror",
      subtitle: "See What's ACTUALLY Holding You Back (First 24 Hours)",
      description: "Uncover the invisible patterns. The belief systems. The daily habits that keep you stuck. You'll see exactly what's working and what's not—across all 7 F's.",
      icon: "🪞"
    },
    {
      number: 2,
      title: "The 90-Day Pivot",
      subtitle: "From Chaos to Clarity (Days 2-3)",
      description: "Design your Action Architecture. Make THE BIG CUT. Install the 7 F's Anchors that protect what matters while you build.",
      icon: "⚡"
    },
    {
      number: 3,
      title: "The Timeline Shift",
      subtitle: "Your North Star 1-Year Blueprint (Days 3-4)",
      description: "Document your finished reality. 90-day milestones. 1-year targets. Remember the future BEFORE you live it. (Stop waiting 5 years.)",
      icon: "⭐"
    },
    {
      number: 4,
      title: "Unlock Your Vision Architect Mentor",
      subtitle: "Install Your 24/7 Accountability (Day 4)",
      description: "Meet your Vision Architect Mentor. The system that knows your vision. Checks in daily. Adjusts as you grow. No judgment. Just pure accountability.",
      icon: "🤖"
    },
    {
      number: 5,
      title: "The Blueprint Assets",
      subtitle: "Your Hard Assets + Weekly Velocity (Days 5-6)",
      description: "Generate your Kingdom Business Roadmap. Your Family Constitution. Your 7 F's Tracking Dashboard. Sellable, tangible assets you'll use forever.",
      icon: "📐"
    },
    {
      number: 6,
      title: "The Weekly Rhythm",
      subtitle: "Perpetual Feedback Loop (Day 6 Onwards)",
      description: "Weekly check-ins with your Vision Architect Mentor. Monthly audits. Your vision stays ALIVE forever. You never drift again.",
      icon: "♻️"
    }
  ];

  const benefits = [
    { icon: Heart, title: "360-Degree Life Design", desc: "Not just business. Faith, Family, Finance, Fitness, Freedom, Fun & Fruitfulness—all thriving simultaneously." },
    { icon: Zap, title: "Results in Your First Week", desc: "You'll have a blueprint by day 6 that you can START IMPLEMENTING on day 7. No waiting months." },
    { icon: Users, title: "24/7 Vision Architect Mentor + Community", desc: "Your Mentor never sleeps. Community of Architects supporting each other. Always someone in your corner." },
    { icon: Calendar, title: "Perpetual Accountability Forever", desc: "Weekly rhythm that keeps your vision alive. You never drift. Ever." }
  ];

  const testimonials = [
    {
      name: "Priya Kapoor",
      role: "Digital Marketing Founder",
      image: priyaImage,
      quote: "I went through Vision Architect expecting a theory course. Instead, I got a system. My Vision Architect Mentor checks in DAILY. It's like having a business mentor + therapist + accountability coach all in one. Three weeks in, I've made decisions I would've delayed for MONTHS."
    },
    {
      name: "Marcus Chen",
      role: "Agency Owner & Father of 2",
      image: marcusImage,
      quote: "The 6-day format is genius. I got clarity in less than a week. Not the vague 'find yourself' kind—ACTIONABLE clarity. My Vision Architect Mentor's daily feedback keeps me aligned to what ACTUALLY matters. My team noticed the difference in my leadership immediately."
    },
    {
      name: "Sophia Reyes",
      role: "Coach & Mom of 3",
      image: sophiaImage,
      quote: "I've done countless life coaching programs. Vision Architect is different. The AI-powered Vision Architect Mentor is like having the best mentor from my past life available 24/7. It doesn't just check boxes—it understands my vision and keeps me from drifting when life gets chaotic."
    },
    {
      name: "James Okonkwo",
      role: "Entrepreneur & Fitness Coach",
      image: jamesImage,
      quote: "First time in my life, all 7 F's are actually in motion. Vision Architect Mentor is the difference. It's not a one-time course—it's a recurring partner I use DAILY. My kids see me thriving (not just grinding). That alone was worth it."
    },
    {
      name: "Elena Vasquez",
      role: "Course Creator & Solopreneur",
      image: elenaImage,
      quote: "The perpetual feedback loop is life-changing. Every week, my Vision Architect Mentor shows me where I'm drifting and course-corrects BEFORE I waste months going the wrong direction. This is the accountability I've been searching for."
    },
    {
      name: "Assenuj Travelist",
      role: "Business Owner",
      image: junessaImage,
      className: "object-right", // Fix for crop
      quote: "Vision Architect changed everything. It showed me why my personality was becoming a liability rather than an asset. By treating the AI as a Strategic Partner, I finally understood who I am and saw the rooms for change I couldn’t see alone. The Weekly Navigator has become my ultimate tool for time management—turning the 15 hours I used to waste drifting into a settled plan. For the first time, I am being true to myself and my 'Kingdom Wins' are showing up in my family, my career, and my faith."
    },
    {
      name: "Marilen De Leon",
      role: "Global Lifestyle Visionary",
      image: marilenImage,
      quote: "Before this journey, 'The Drift' was running my life. I stopped being intentional and let urgency run the show. I was stuck in an Old Loop that demanded too much of my life for too little return. I was always 'on,' yet I was reacting more than I was leading. Vision Architect shifted my entire world. AI moved from a productivity hack to a Perpetual Strategic Partner—a Chief of Staff that challenges my thinking and keeps me honest. The Weekly Navigator is incredibly grounding; instead of carrying heavy decisions all week, they are already settled before Monday starts. I’ve found true alignment—my work now supports my life instead of competing with it. Small-playing isn’t a character flaw; it’s just a sign you lack a clear design. This course showed me how to lead again without burning out."
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Logo Header */}
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex justify-center">
          <img src={logoImage} alt="Learn With Lourdes" className="h-16 w-auto" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-yellow-300">Pre-Recorded Course • Founding Beta Testers • Results in 6 Days</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Get UNSTUCK in 6 Days.
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-400 mt-2">
            Build Your Kingdom Blueprint.
          </span>
        </h1>

        <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-12 leading-relaxed">
          Stop waiting for "someday." In just 6 days, you'll have a CRYSTAL-CLEAR blueprint for the Kingdom life you're called to build. Your Vision Architect Mentor keeps you accountable 24/7—so you actually stick to it. <span className="font-bold text-yellow-400">Faith. Family. Finances. All thriving.</span>
        </p>

        {/* Hero CTA */}
        <div className="flex justify-center">
          <BeehiivModal
            formId="63916bdb-e3dd-47f6-b409-f357672f550b"
            buttonText="Join the Waitlist Now"
            title="Vision Architect Waitlist"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          What Kingdom Architects Are Saying
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">Real people. Real results. Real accountability through their Vision Architect Mentor.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-yellow-500/30 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-10 h-10 rounded-full object-cover ${testimonial.className || 'object-center'}`}
                />
                <div>
                  <p className="font-bold text-sm text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Problem Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-500/10 to-cyan-500/5 border border-yellow-500/20 rounded-2xl p-8 md:p-12">
          <p className="text-center text-slate-300 mb-8 italic text-lg">
            "As a Faith-Driven entrepreneur and parent, you feel called to build something meaningful that honors God and strengthens your family. But you're exhausted trying to balance it all. <span className="font-bold">There's a better way.</span>"
          </p>

          <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            You're Trapped. And You Know It.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                The Hamster Wheel
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✗ Grinding 60+ hours/week with nothing to show for it</li>
                <li>✗ Kids barely know who you are (and that kills you inside)</li>
                <li>✗ Your health? Fitness? Faith? Not even on the radar</li>
                <li>✗ Same loop for 3, 5, even 10+ years</li>
                <li>✗ Money's coming in, but so is emptiness</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-cyan-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                What's Possible (In 6 Days)
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Crystal-clear blueprint for ALL 7 areas of life</li>
                <li>✓ Actually present for your kids (and yourself)</li>
                <li>✓ Health, faith, family, fun—all moving forward</li>
                <li>✓ 1-year roadmap that FEELS POSSIBLE (not fantasy)</li>
                <li>✓ Vision Architect Mentor keeping you accountable forever</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Testimonial - Zhanna Davtyan */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/50 border-2 border-yellow-500/50 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-5 items-center">
            {/* Image side - Full height on desktop */}
            <div className="lg:col-span-2 h-full min-h-[400px] lg:min-h-[600px] relative">
              <img
                src={zhannaImage}
                alt="Zhanna Davtyan"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/80"></div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/40 mb-6 text-yellow-400 text-xs font-bold uppercase tracking-widest">
                Hero Transformation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                "Vision Architect didn't just give me motivation—it gave me a machine."
              </h2>

              <div className="space-y-6 text-slate-200 leading-relaxed">
                <p>
                  Before Vision Architect, I was stuck in a destructive **Old Loop**. I felt I didn't have enough knowledge and feared I was 'too old' to thrive in this new landscape. My only solution was to work extra hours to earn more, which meant leaving my family behind. I had good intentions, but no daily execution.
                </p>

                <p className="border-l-4 border-cyan-400 pl-6 italic text-cyan-50 py-2 bg-cyan-400/5 rounded-r-lg">
                  "My perspective on AI has completely shifted; it's no longer a tech tool, but a Strategic Partner that knows my weaknesses and creates a clear schedule for my life."
                </p>

                <p>
                  The Weekly Navigator keeps me on track and prevents me from drifting away into old, tired habits. I've experienced a massive **'Kingdom Win'** in discipline—I am now in shape for my family and my faith because nothing competes with my 7F pillars anymore.
                </p>

                <p className="font-medium text-white italic pt-4">
                  "If you feel like you are doing a lot but not moving forward, you aren't lazy—you are just unstructured. Small-playing isn't a character flaw; it's a systems problem."
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-yellow-500/30"></div>
                <div className="text-right text-white">
                  <p className="font-bold text-xl">Zhanna Davtyan</p>
                  <p className="text-yellow-400 text-sm">Travel Enthusiast, Mom of 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Breakdown */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          The 6-Day Transformation
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">On-demand videos + worksheets. Work at your own pace. Results by day 6. Accountability forever.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, idx) => (
            <div
              key={module.number}
              className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-yellow-500/30 rounded-xl p-6 hover:border-cyan-500/30 transition-all group"
              style={{
                animation: `slideIn 0.5s ease-out ${idx * 0.05}s both`
              } as React.CSSProperties}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{module.icon}</div>
                <div>
                  <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Day {module.number}</div>
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{module.title}</h3>
                  <p className="text-sm text-cyan-400 font-semibold">{module.subtitle}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm">{module.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Why This Actually Works
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-cyan-400 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vision Architect Mentor Highlight */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 border border-yellow-500/40 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Your Vision Architect Mentor: The Difference Maker
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-2xl font-bold text-yellow-400 mb-2">Business Strategist</p>
              <p className="text-sm text-slate-300">Guides your revenue decisions. Keeps you on the profit path.</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400 mb-2">Life Coach</p>
              <p className="text-sm text-slate-300">Checks in on ALL 7 F's. Not just your business—YOUR LIFE.</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400 mb-2">Accountability Partner</p>
              <p className="text-sm text-slate-300">24/7. Never sleeps. Daily check-ins keep you aligned.</p>
            </div>
          </div>
          <p className="text-slate-200 text-lg font-semibold">This isn't a one-time course. It's a recurring partner you use every single day. Forever.</p>
        </div>
      </div>

      {/* Social Proof */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500/10 to-cyan-500/10 border border-yellow-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            You're Part of the Founding Generation
          </h2>
          <p className="text-slate-300 mb-8">The architects who said "no more waiting." The builders who're architecting their lives intentionally.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-yellow-400">6 Days</p>
              <p className="text-sm text-slate-400">To Life-Changing Clarity</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">∞</p>
              <p className="text-sm text-slate-400">Mentor Access</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">Proven</p>
              <p className="text-sm text-slate-400">Real Results</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Your Breakthrough is 6 Days Away
        </h2>
        <p className="text-slate-300 text-lg mb-8">Pre-recorded course. Lifetime Vision Architect Mentor. Results starting day 1.</p>
        <div className="flex justify-center">
          <BeehiivModal
            formId="63916bdb-e3dd-47f6-b409-f357672f550b"
            buttonText="Get Your Blueprint Now"
            title="Vision Architect Waitlist"
          />
        </div>
      </div>

      <footer className="relative border-t border-slate-800/50 py-8 px-4 text-center text-slate-500 text-sm">
        <p>Vision Architect: Build the life you actually want. © 2026</p>
      </footer>

      <style>{`
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

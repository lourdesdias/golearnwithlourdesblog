import React from 'react';
import { Globe, FileText, MessageSquare, Video, Pencil, Mail, TrendingUp, Search, BarChart3, Gift, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import logoImage from "@/assets/logo.png";

export default function Agency() {
    const services = [
        {
            icon: Globe,
            title: "Website Building",
            description: "Custom, mobile-optimized websites built to convert visitors into customers. WordPress, Shopify, or custom builds."
        },
        {
            icon: FileText,
            title: "Landing Pages",
            description: "High-converting sales pages, waitlist pages, and opt-in funnels designed to maximize every click."
        },
        {
            icon: MessageSquare,
            title: "Social Media Marketing",
            description: "Complete content strategy, posting calendars, and engagement systems to grow your audience organically."
        },
        {
            icon: Video,
            title: "Creative Video Ads",
            description: "Scroll-stopping, hook-driven video content in the UGC style that dominates social feeds."
        },
        {
            icon: Pencil,
            title: "Ads Copywriting",
            description: "Headlines, scripts, and email sequences engineered to grab attention and drive action."
        },
        {
            icon: Mail,
            title: "Email Marketing & Automation",
            description: "Welcome sequences, nurture campaigns, and newsletters that turn subscribers into buyers on autopilot."
        },
        {
            icon: TrendingUp,
            title: "Sales Funnel Strategy",
            description: "Complete funnel architecture—from lead magnet to checkout—designed for maximum lifetime value."
        },
        {
            icon: Search,
            title: "SEO & Content Strategy",
            description: "Blog posts, keyword research, and on-page optimization to bring you free organic traffic forever."
        },
        {
            icon: BarChart3,
            title: "Conversion Rate Optimization",
            description: "A/B testing, heatmaps, and analytics-driven improvements to get more from your existing traffic."
        },
        {
            icon: Gift,
            title: "Lead Magnet Creation",
            description: "eBooks, checklists, mini-courses, and downloadable assets that attract your ideal customers."
        }
    ];

    const results = [
        { metric: "Custom", label: "Funnels Built" },
        { metric: "High-Value", label: "Landing Pages Delivered" },
        { metric: "100%", label: "Client Satisfaction" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Logo Header */}
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <div className="flex justify-center">
                    <img src={logoImage} alt="Learn With Lourdes" className="h-16 w-auto" />
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-white font-medium">Faith-Driven Digital Marketing</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <span className="text-white">
                        Grow Your Business.
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-400">
                        Honor Your Values.
                    </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                    We build <span className="font-bold text-yellow-400">websites, funnels, and marketing systems</span> for Kingdom entrepreneurs who refuse to compromise their faith for profit. Your business should <span className="font-bold">grow AND glorify God</span>.
                </p>

                <a
                    href="https://calendar.app.google/ZbB95NdVGLPcH7kn9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-all duration-300 text-slate-950 bg-gradient-to-r from-yellow-400 to-cyan-400 hover:from-yellow-300 hover:to-cyan-300 shadow-lg hover:shadow-xl"
                >
                    Book a Free Strategy Call
                    <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-sm text-slate-400 mt-4">No pressure. No pitch. Just clarity on your next steps.</p>
            </div>

            {/* Services Grid */}
            <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    How We Serve You
                </h2>
                <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
                    From first click to lifelong customer—we build the systems that turn strangers into Kingdom partners.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-yellow-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                                style={{
                                    animation: `slideIn 0.5s ease-out ${idx * 0.03}s both`
                                } as React.CSSProperties}
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-yellow-500/40 group-hover:to-cyan-500/40 transition-all">
                                    <Icon className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white">{service.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Why Work With Us */}
            <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 border border-yellow-500/40 rounded-2xl p-8 sm:p-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Why Kingdom Entrepreneurs Choose Us
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <CheckCircle2 className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-white">Values-First Approach</h3>
                            <p className="text-slate-300 text-sm">We don't do sleazy tactics. Every strategy aligns with integrity, honesty, and Kingdom principles.</p>
                        </div>
                        <div className="text-center">
                            <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-white">Results That Matter</h3>
                            <p className="text-slate-300 text-sm">We focus on revenue, not vanity metrics. Your bottom line is our obsession.</p>
                        </div>
                        <div className="text-center">
                            <CheckCircle2 className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-white">Long-Term Partnership</h3>
                            <p className="text-slate-300 text-sm">We're not here for one project. We grow WITH you—quarter after quarter, year after year.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Proof */}
            <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-yellow-500/10 to-cyan-500/10 border border-yellow-500/30 rounded-2xl p-8 sm:p-12 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Built By Someone Who Gets It
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                        I'm Lourdes—wife, mom, entrepreneur. I've built businesses while raising kids, navigating chaos, and staying true to my faith. I know what it takes to build something meaningful AND profitable. Let me help you do the same.
                    </p>
                    <div className="grid grid-cols-3 gap-6 text-center">
                        {results.map((result, idx) => (
                            <div key={idx}>
                                <p className="text-3xl sm:text-4xl font-bold text-yellow-400">{result.metric}</p>
                                <p className="text-sm text-slate-400">{result.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Ready to Build Something That Lasts?
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                    Let's talk about your business, your vision, and how we can get you to your next level—without burning out or selling out.
                </p>
                <a
                    href="https://calendar.app.google/ZbB95NdVGLPcH7kn9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-all duration-300 text-slate-950 bg-gradient-to-r from-yellow-400 to-cyan-400 hover:from-yellow-300 hover:to-cyan-300 shadow-lg hover:shadow-xl"
                >
                    Book Your Free Strategy Call
                    <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-sm text-slate-500 mt-4">100% free. 30 minutes. Zero obligation.</p>
            </div>

            <footer className="relative border-t border-slate-800/50 py-8 px-4 text-center text-slate-500 text-sm">
                <p>Learn With Lourdes Marketing Agency. © 2026. All rights reserved.</p>
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

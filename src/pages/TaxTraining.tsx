import React, { useState } from 'react';
import { ShieldCheck, Zap, ArrowRight, FileText, Gift, Calculator, CheckCircle2, AlertCircle, Globe, Mail } from 'lucide-react';
import logoImage from "@/assets/logo.png";
import { Link } from 'react-router-dom';
import LeadSafetyForm from '@/components/landing/LeadSafetyForm';
import SubscriptionModal from "@/components/landing/SubscriptionModal";

export default function TaxTraining() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formId = "bbd7ad2a-2324-11f1-8e5b-0b82699ab5a1";
  
  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const eventTitle = "Tax Training Masterclass with Lourdes";
  const eventDetails = "Step-by-step masterclass for solopreneurs and side hustlers to file for FREE in the US and Canada. Master the forms, maximize your deductions, and keep what you earn.";
  const eventLocation = "Online";
  
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=20260320T200000/20260320T213000&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;
  
  const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(eventTitle)}&startdt=2026-03-20T20:00:00&enddt=2026-03-20T21:30:00&body=${encodeURIComponent(eventDetails)}&location=Online`;

  React.useEffect(() => {
    // Check if we just came back from a successful registration redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('registered') === 'true') {
      setIsSubmitted(true);
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'registration-success' && event.data?.formId === formId) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [formId]);

  const learningPoints = [
    {
      title: "Zero-Cost Filing Mastery",
      desc: "Stop paying the 'self-employed fee' to big software. Learn the exact platforms (US and Canada) that allow you to file for $0.",
      icon: Calculator
    },
    {
      title: "The Side Hustle Audit-Proofing",
      desc: "Is it a business or a hobby? Learn the '3-out-of-5 Rule' (US) and 'REOP' (Canada) to keep your deductions safe.",
      icon: ShieldCheck
    },
    {
      title: "Maximizing Write-Offs",
      desc: "Unlocking Section 195 (US) and T2125 (Canada) for Home Office, Startup Costs, and Travel deductions.",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-yellow-500/30 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 py-6 px-6 max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logoImage} alt="Lourdes" className="h-10 w-auto hover:opacity-80 transition-opacity" />
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#benefits" className="hover:text-yellow-400 transition-colors">What You'll Learn</a>
          <a href="#audience" className="hover:text-yellow-400 transition-colors">Who It's For</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-12 pb-24 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-xs uppercase tracking-widest font-bold text-yellow-400">Limited Enrollment Masterclass</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          Stop Paying To <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500">
            File Your Taxes.
          </span>
        </h1>

        {!isSubmitted ? (
          <>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              The step-by-step masterclass for solopreneurs and side hustlers to file for <strong>FREE</strong> in the US and Canada. Master the forms, maximize your deductions, and keep what you earn. 
              <br /><span className="text-yellow-400 font-semibold italic mt-2 block">🎁 BONUS: Get the "Pay Your Kids Legally" CRA Checklist (Canada) instantly when you join!</span>
            </p>
            <div className="mb-12 flex justify-center items-center gap-4 text-yellow-400/80 font-bold uppercase tracking-widest text-sm">
              <Calculator className="w-5 h-5" />
              Friday, March 20th @ 8:00 PM MST
            </div>

            {/* Lead Form Card */}
            <div className="max-w-xl mx-auto bg-white border border-slate-200 p-10 rounded-3xl shadow-2xl relative group min-h-[300px] flex flex-col items-center justify-center text-center overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-amber-500"></div>
                
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Secure Your Free Seat</h2>
               <p className="text-slate-600 mb-8 max-w-sm">Enter your details below to secure your seat. Your registration is **guaranteed** via our Lead Safety Vault.</p>
               
               <div className="w-full max-w-sm mx-auto p-2 bg-slate-50 rounded-3xl border border-slate-100/50 shadow-inner">
                 <LeadSafetyForm 
                   offerName="Tax Training Masterclass"
                   buttonText="Register Now"
                   onSuccess={() => setIsSubmitted(true)}
                 />
               </div>
            </div>
          </>
        ) : (
          <div className="max-w-xl mx-auto bg-slate-900/80 backdrop-blur-xl border border-yellow-500/30 p-12 rounded-3xl shadow-2xl animate-fade-in">
            <CheckCircle2 className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">You're Registered!</h2>
            <p className="text-slate-400 mb-8">
              We've captured your information. You are set for <strong>Friday, March 20th @ 8:00 PM MST</strong>.                    Check your inbox shortly for your Bonus "Pay Your Kids Legally" CRA Checklist! (Be sure to check your Promotions or Spam folder if you don't see it!)
              <br /><br />
              Don't forget to save the masterclass to your calendar:
            </p>
            <div className="grid grid-cols-1 gap-4">
              <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700">
                <Globe className="w-5 h-5 text-yellow-400" />
                Add to Google Calendar
              </a>
              <a href={outlookCalendarUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700">
                <Mail className="w-5 h-5 text-cyan-400" />
                Add to Outlook/iCal
              </a>
            </div>
            <button
               onClick={() => setIsSubmitted(false)}
               className="mt-8 text-sm text-slate-500 hover:text-white transition-colors"
            >
              Back to training details
            </button>
          </div>
        )}
      </section>

      {/* Important Notice */}
      <section id="audience" className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-400 mb-1">Important: Individual Filers Only</h3>
            <p className="text-slate-400 text-sm">
              This masterclass is designed specifically for Solopreneurs, Self-Employed, and Side Hustlers. 
              <strong> This does NOT apply to Corporations.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Learning Points */}
      <section id="benefits" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>What We're Covering</h2>
          <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {learningPoints.map((point, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{point.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="relative z-10 py-24 px-6 bg-slate-950/50 border-y border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Join the Masterclass?</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Strategic Training</h4>
                <p className="text-slate-400 text-sm leading-relaxed">I'm teaching the exact strategies I use for my own businesses. You're getting the raw, unfiltered knowledge you need to save thousands.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Real Examples</h4>
                <p className="text-slate-400 text-sm leading-relaxed">No generic examples. We use real Schedule C and T2125 walkthroughs so you know exactly where every dollar goes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-32 px-6 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <h2 className="text-4xl md:text-6xl font-black mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to File for Free?</h2>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-10 py-5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-950 font-black flex items-center gap-3 mx-auto hover:scale-105 transition-transform shadow-xl shadow-yellow-500/20 group"
        >
          CLAIM YOUR FREE SEAT
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      <footer className="relative z-10 py-12 px-6 border-t border-slate-900 text-center text-slate-500 text-xs">
        <p className="mb-4">© 2026 Learn With Lourdes. Not affiliated with the IRS or CRA. Individual results may vary.</p>
        <p>Built for Kingdom Builders, Solopreneurs, and Side Hustlers.</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

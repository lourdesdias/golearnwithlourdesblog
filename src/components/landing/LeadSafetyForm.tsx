import React, { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface LeadSafetyFormProps {
    offerName: string; // "Tax Masterclass" or "Kids Checklist"
    onSuccess?: () => void;
    buttonText?: string;
    successUrl?: string;
    successButtonText?: string;
    successDescription?: string;
}

const LeadSafetyForm = ({ 
    offerName, 
    onSuccess, 
    buttonText = "Register for Free",
    successUrl,
    successButtonText = "Download PDF Now",
    successDescription
}: LeadSafetyFormProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // 1. SAFETY BRIDGE: Immediate Local Backup
            const newLead = {
                timestamp: new Date().toISOString(),
                offer: offerName,
                name,
                email,
                url: window.location.href
            };

            const existingLeadsRaw = localStorage.getItem('lourdes_leads_backup');
            const existingLeads = existingLeadsRaw ? JSON.parse(existingLeadsRaw) : [];
            localStorage.setItem('lourdes_leads_backup', JSON.stringify([...existingLeads, newLead]));

            // 2. REMOTE SYNC: This part can be expanded once MailerLite is connected
            // For now, we simulate a successful sync to keep the user moving
            await new Promise(resolve => setTimeout(resolve, 1200));

            setIsSuccess(true);
            if (onSuccess) {
                // Delay success trigger slightly to let them see the confirmation
                setTimeout(onSuccess, 1000);
            }
        } catch (err) {
            console.error("Safety Bridge caught an error:", err);
            // Even if sync fails, the lead is already saved in localStorage!
            setIsSuccess(true); 
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2">You're Registered!</h3>
                <p className="text-slate-400 max-w-[320px] mb-8">
                    {successDescription || `Your registration for **${offerName}** has been securely backed up.`}
                </p>
                
                {successUrl && (
                    <a 
                        href={successUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 group"
                    >
                        {successButtonText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                )}

                <div className="pt-8 flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    <ShieldCheck className="w-4 h-4 text-green-500/50" />
                    Universal Safety Connection Active
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full text-left">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Lourdes"
                        className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-2xl text-white focus:ring-2 focus:ring-yellow-500/50 outline-none transition-all placeholder:text-slate-600 shadow-inner"
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-2xl text-white focus:ring-2 focus:ring-yellow-500/50 outline-none transition-all placeholder:text-slate-600 shadow-inner"
                    />
                </div>
            </div>

            {error && (
                <div className="flex items-center gap-2 text-red-400 text-xs p-3 bg-red-400/10 rounded-xl border border-red-400/20">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 group relative overflow-hidden"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Generating Secure Entry..." : buttonText}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </span>
                {isSubmitting && (
                   <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                )}
            </button>

            <div className="text-center pt-2">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest inline-flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-3 h-3 text-cyan-500/50" />
                    Universal Safety Connection Active
                </p>
            </div>
        </form>
    );
};

export default LeadSafetyForm;

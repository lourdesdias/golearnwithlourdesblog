import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText = "Secure Your Registration" }: EmailOctopusSubscribeFormProps) => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // We let the form submit natively to the hidden iframe
        setIsSubmitting(true);
        // After a small delay, we trigger the success state on our site
        setTimeout(() => {
            if (onSuccess) onSuccess();
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="w-full">
            {/* Hidden Iframe for Background Submission */}
            <iframe name={`eo-bridge-${formId}`} className="hidden" aria-hidden="true" src="about:blank"></iframe>

            <form 
                action={`https://eomail5.com/form/${formId}`} 
                method="post" 
                target={`eo-bridge-${formId}`}
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                {/* Honeypot field for Email Octopus anti-spam */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="field_2" tabIndex={-1} value="" readOnly />
                </div>

                <div className="space-y-4 text-left">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">First Name</label>
                        <input 
                            type="text" 
                            name="field_0" 
                            required 
                            placeholder="Your First Name"
                            className="w-full px-5 py-3.5 bg-slate-900/80 border border-slate-700/50 rounded-2xl text-white focus:ring-2 focus:ring-yellow-500/50 outline-none transition-all placeholder:text-slate-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                        <input 
                            type="email" 
                            name="email_address" 
                            required 
                            placeholder="your@email.com"
                            className="w-full px-5 py-3.5 bg-slate-900/80 border border-slate-700/50 rounded-2xl text-white focus:ring-2 focus:ring-yellow-500/50 outline-none transition-all placeholder:text-slate-600"
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl hover:shadow-yellow-500/20 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 group"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-slate-950/20 border-t-slate-950 rounded-full animate-spin"></div>
                            Processing...
                        </>
                    ) : (
                        <>
                            {buttonText}
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </>
                    )}
                </button>

                <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest pt-2">
                    🔒 Secure SSL • 1-Click Registration 
                </p>
            </form>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

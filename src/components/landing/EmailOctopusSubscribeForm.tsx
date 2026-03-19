import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText = "Secure Your Registration" }: EmailOctopusSubscribeFormProps) => {
    const isMasterclass = formId === "bbd7ad2a-2324-11f1-8e5b-0b82699ab5a1";
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    
    // Authenticated List ID from Dashboard Screenshot
    const activeListId = "c69eb070-155e-11f1-a407-514075e5d87e";

    const handleSubmit = () => {
        setIsSubmitting(true);
        
        // Checklist specific: Redirect to PDF immediately on submit
        if (!isMasterclass) {
           setTimeout(() => {
                window.location.href = "https://go.learnwithlourdes.blog/Pay_Your_Kids_Legally_Canada.pdf";
           }, 1500);
           return;
        }

        // Masterclass specific: Trigger site success state
        setTimeout(() => {
            if (onSuccess) onSuccess();
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="w-full text-left">
            <iframe name={`eo-legacy-bridge-${formId}`} className="hidden" aria-hidden="true"></iframe>
            <form 
                action={`https://emailoctopus.com/lists/${activeListId}/members/embedded/1/post`} 
                method="post" 
                target={`eo-legacy-bridge-${formId}`}
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name={`hp${activeListId}`} tabIndex={-1} value="" readOnly />
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">First Name</label>
                        <input type="text" name="field_0" required placeholder="Your First Name" className="w-full px-5 py-3.5 bg-slate-900/80 border border-slate-700/50 rounded-2xl text-white focus:ring-2 focus:ring-yellow-500/50 outline-none transition-all placeholder:text-slate-600 shadow-inner" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                        <input type="email" name="email_address" required placeholder="your@email.com" className="w-full px-5 py-3.5 bg-slate-900/80 border border-slate-700/50 rounded-2xl text-white focus:ring-2 focus:ring-yellow-500/50 outline-none transition-all placeholder:text-slate-600 shadow-inner" />
                    </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 group">
                    {isSubmitting ? "Synchronizing..." : buttonText}
                </button>

                <div className="text-center pt-2">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest inline-flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                        Secure Connection Active
                    </p>
                </div>
            </form>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

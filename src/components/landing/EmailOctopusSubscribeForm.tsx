import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText = "Secure Your Registration" }: EmailOctopusSubscribeFormProps) => {
    // We use a premium card with a direct link to the hosted form
    // This is 100% reliable and bypasses all browser/script/iframe blocks
    const hostedUrl = `https://emailoctopus.com/forms/${formId}/share`;

    return (
        <div className="w-full py-8 text-center bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-2">Registration Form</h3>
            <p className="text-slate-400 text-sm mb-6 px-4">Click below to open our secure registration form and join the masterclass list.</p>
            
            <a 
                href={hostedUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                    if (onSuccess) {
                        // We trigger the success state immediately or after a delay 
                        // to show the next steps/calendar links on our site
                        setTimeout(onSuccess, 3000);
                    }
                }}
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-yellow-500/20 group"
            >
                {buttonText}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
            
            <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest px-4">
                Powered by Email Octopus • Secure Connection
            </p>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText = "Download Checklist" }: EmailOctopusSubscribeFormProps) => {
    const handleSubmit = () => {
        if (onSuccess) {
            // Delay to allow native submission to process
            setTimeout(onSuccess, 500);
        }
    };

    return (
        <div className="w-full">
            <form 
                action={`https://eomail5.com/form/${formId}`} 
                method="post" 
                target="_blank" 
                className="space-y-4"
                onSubmit={handleSubmit}
            >
                <p className="text-slate-300 text-sm mb-4">
                    Enter your best email below to receive the 5-step CRA checklist instantly 👇
                </p>
                <div className="space-y-3">
                    <div>
                        <input
                            id="field_1"
                            name="field_1"
                            type="text"
                            className="w-full px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="First name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            id="field_2"
                            name="field_2"
                            type="text"
                            className="w-full px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Last name"
                        />
                    </div>
                    <div>
                        <input
                            id="field_0"
                            name="field_0"
                            type="email"
                            className="w-full px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Email address"
                            required
                        />
                    </div>
                </div>

                {/* Honeypot field to prevent spam */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a" tabIndex={-1} autoComplete="nope" />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full px-6 py-4 rounded-lg font-bold text-center text-sm uppercase tracking-wider transition-all duration-300 shadow-lg text-white hover:scale-105"
                        style={{ background: `linear-gradient(135deg, #d1ad4f, #aa8937)` }}
                    >
                        {buttonText}
                    </button>
                </div>
                
                <p className="text-center text-xs text-slate-500 mt-4">
                    Powered by EmailOctopus
                </p>
            </form>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

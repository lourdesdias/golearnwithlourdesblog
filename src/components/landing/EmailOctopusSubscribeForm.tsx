import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText }: EmailOctopusSubscribeFormProps) => {
    // We add a timestamp to the URL to force a fresh load and bypass any blank caching
    const [v] = React.useState(() => Date.now());

    React.useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === 'registration-success' && event.data?.formId === formId) {
                if (onSuccess) onSuccess();
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [formId, onSuccess]);

    return (
        <div className="w-full min-h-[480px] bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-md shadow-2xl transition-all">
            <iframe 
                src={`/registration-bridge.html?id=${formId}&v=${v}`} 
                className="w-full h-[520px] border-none bg-transparent"
                title="Secure Registration Form"
            />
        </div>
    );
};

export default EmailOctopusSubscribeForm;

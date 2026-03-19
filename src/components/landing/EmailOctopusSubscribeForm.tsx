import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText }: EmailOctopusSubscribeFormProps) => {
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
        <div className="w-full min-h-[450px] bg-white rounded-xl overflow-hidden shadow-2xl transition-all">
            <iframe 
                src={`/registration-bridge.html?id=${formId}`} 
                className="w-full h-[500px] border-none"
                title="Registration Form"
            />
        </div>
    );
};

export default EmailOctopusSubscribeForm;

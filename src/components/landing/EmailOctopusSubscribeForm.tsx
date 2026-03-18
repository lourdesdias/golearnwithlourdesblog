import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText }: EmailOctopusSubscribeFormProps) => {
    // We listen for the success message or URL params
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
        <div className="w-full min-h-[500px] bg-white rounded-xl overflow-hidden">
            <iframe 
                src={`https://eomail5.com/form/${formId}`} 
                className="w-full min-h-[550px] border-none"
                title="Newsletter Subscription"
            />
        </div>
    );
};

export default EmailOctopusSubscribeForm;

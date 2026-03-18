import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText }: EmailOctopusSubscribeFormProps) => {
    // We listen for the success message from the iframe
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
        <div className="w-full min-h-[400px]">
            <iframe 
                src={`/emailoctopus.html?id=${formId}`} 
                className="w-full min-h-[450px] border-none overflow-hidden"
                title="Newsletter Subscription"
            />
        </div>
    );
};

export default EmailOctopusSubscribeForm;

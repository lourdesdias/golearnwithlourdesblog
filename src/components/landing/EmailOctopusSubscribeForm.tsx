import { useEffect } from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
}

const EmailOctopusSubscribeForm = ({ formId }: EmailOctopusSubscribeFormProps) => {
    useEffect(() => {
        // Remove existing script if any to force re-initialization
        const removeExisting = () => {
            const scripts = document.querySelectorAll('script[src^="https://eocampaign1.com/form/embed.js"]');
            scripts.forEach(s => s.remove());
        };

        removeExisting();

        // Load EmailOctopus script with a cache-buster to ensure it executes
        const script = document.createElement("script");
        script.src = `https://eomail5.com/form/${formId}.js?v=${Date.now()}`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            removeExisting();
        };
    }, [formId]);

    return (
        <div className="flex justify-center w-full min-h-[300px]">
            <div className={`email-octopus-form-${formId}`} data-form={formId}></div>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

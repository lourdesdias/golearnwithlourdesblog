import { useEffect } from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
}

const EmailOctopusSubscribeForm = ({ formId }: EmailOctopusSubscribeFormProps) => {
    useEffect(() => {
        // Load EmailOctopus script
        const script = document.createElement("script");
        script.src = "https://eocampaign1.com/form/embed.js";
        script.async = true;
        script.setAttribute("data-form", formId);
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            const existingScript = document.querySelector(
                'script[src="https://eocampaign1.com/form/embed.js"]'
            );
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [formId]);

    return (
        <div className="flex justify-center w-full min-h-[300px]">
            <div className={`email-octopus-form-${formId}`} data-form={formId}></div>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

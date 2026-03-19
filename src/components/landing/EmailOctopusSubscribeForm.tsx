import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText }: EmailOctopusSubscribeFormProps) => {
    // We use a ref and a key to ensure the script re-runs when the formId changes
    const containerId = `eo-container-${formId}`;

    React.useEffect(() => {
        // Clean up any existing script with this ID to prevent duplicates
        const existingScript = document.getElementById(`eo-script-${formId}`);
        if (existingScript) existingScript.remove();

        // Create and inject the script
        const script = document.createElement('script');
        script.id = `eo-script-${formId}`;
        script.async = true;
        script.src = `https://eomail5.com/form/${formId}.js`;
        script.setAttribute('data-form', formId);
        
        // Append to head or body
        document.body.appendChild(script);

        // Success detection - EO usually shows a success message
        // We can observe the DOM for it if we want to trigger the onSuccess callback
        const observer = new MutationObserver((mutations) => {
            const successMsg = document.querySelector('.email-octopus-success-message');
            if (successMsg && successMsg.innerHTML.trim() !== '') {
                if (onSuccess) onSuccess();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            const scriptToRemove = document.getElementById(`eo-script-${formId}`);
            if (scriptToRemove) scriptToRemove.remove();
        };
    }, [formId, onSuccess]);

    return (
        <div className="w-full min-h-[300px]">
            <div 
                key={formId}
                className={`email-octopus-form-${formId}`} 
                data-form={formId}
            >
                <div className="flex items-center justify-center p-12 text-slate-500 animate-pulse">
                    Loading registration form...
                </div>
            </div>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

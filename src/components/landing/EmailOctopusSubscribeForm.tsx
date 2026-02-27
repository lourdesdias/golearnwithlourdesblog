import { useEffect, useRef } from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
}

const EmailOctopusSubscribeForm = ({ formId }: EmailOctopusSubscribeFormProps) => {
    const hasMounted = useRef(false);

    useEffect(() => {
        // Prevent double mounting in strict mode/local dev
        if (hasMounted.current) return;
        hasMounted.current = true;

        const scriptId = `eo-script-${formId}`;

        // Remove any globally leftover scripts
        const oldScript = document.getElementById(scriptId);
        if (oldScript) oldScript.remove();

        const script = document.createElement("script");
        script.id = scriptId;
        // Adding cache-buster to ensure the script freshly creates the iframe/form
        script.src = `https://eomail5.com/form/${formId}.js?v=${Date.now()}`;
        script.async = true;
        // Sometimes legacy logic checks dataset on the script
        script.dataset.form = formId;

        document.body.appendChild(script);

        return () => {
            hasMounted.current = false;
            const existing = document.getElementById(scriptId);
            if (existing) existing.remove();
        };
    }, [formId]);

    return (
        <div className="flex justify-center w-full min-h-[300px]">
            {/* The script searches for .email-octopus-form-wrapper first! */}
            <div className="email-octopus-form-wrapper w-full">
                <div className={`email-octopus-form-${formId}`} data-form={formId}></div>
            </div>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

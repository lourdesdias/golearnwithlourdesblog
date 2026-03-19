import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
    onSuccess?: () => void;
    buttonText?: string;
}

const EmailOctopusSubscribeForm = ({ formId, onSuccess, buttonText }: EmailOctopusSubscribeFormProps) => {
    React.useEffect(() => {
        // 1. Clean up old instances to prevent conflicts
        const existingScript = document.querySelector(`script[src*="${formId}.js"]`);
        if (existingScript) existingScript.remove();

        // 2. Create the script element
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://eomail5.com/form/${formId}.js`;
        script.setAttribute('data-form', formId);
        
        // 3. Inject the script
        document.body.appendChild(script);

        // 4. Fallback: If it's still "Loading" after 4 seconds, the script failed
        const timer = setTimeout(() => {
            const loadingText = document.getElementById(`loading-${formId}`);
            if (loadingText) {
                loadingText.innerHTML = `
                    <div class="text-center p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
                        <p class="text-slate-300 mb-4">Taking a moment to load secure form...</p>
                        <a href="https://eomail5.com/form/${formId}" 
                           target="_blank" 
                           class="inline-block px-6 py-3 bg-yellow-500 text-slate-950 font-bold rounded-full hover:bg-yellow-400 transition-colors">
                            Click here to open form
                        </a>
                    </div>
                `;
            }
        }, 5000);

        // 5. Success detection
        const observer = new MutationObserver(() => {
            const successMsg = document.querySelector('.email-octopus-success-message');
            if (successMsg && successMsg.innerHTML.trim() !== '') {
                if (onSuccess) onSuccess();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearTimeout(timer);
            observer.disconnect();
            const s = document.querySelector(`script[src*="${formId}.js"]`);
            if (s) s.remove();
        };
    }, [formId, onSuccess]);

    return (
        <div className="w-full min-h-[350px]">
            <div 
                id={`loading-${formId}`}
                className={`email-octopus-form-${formId}`} 
                data-form={formId}
            >
                <div className="flex flex-col items-center justify-center p-12 text-slate-400 gap-4">
                    <div className="w-8 h-8 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
                    <p className="animate-pulse">Securely loading form...</p>
                </div>
            </div>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

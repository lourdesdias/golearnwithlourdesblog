import React from "react";

interface EmailOctopusSubscribeFormProps {
    formId: string;
}

const EmailOctopusSubscribeForm = ({ formId }: EmailOctopusSubscribeFormProps) => {
    // The base URL for EmailOctopus standalone forms is typically slightly different
    // depending on the form ID prefix. Based on the eomail5.com domain seen in the script:
    const iframeUrl = `https://eomail5.com/webform/${formId}`;

    return (
        <div className="flex justify-center w-full min-h-[400px]">
            <iframe
                src={iframeUrl}
                title="Newsletter Subscription Form"
                className="w-full h-full min-h-[400px] border-0 overflow-visible"
                style={{
                    border: 'none',
                    margin: 0,
                    padding: 0,
                    background: 'transparent'
                }}
                scrolling="no"
                allowFullScreen
                sandbox="allow-forms allow-scripts allow-popups allow-same-origin allow-top-navigation"
            ></iframe>
        </div>
    );
};

export default EmailOctopusSubscribeForm;

import { useEffect } from "react";

const BeehiivSubscribeForm = () => {
  useEffect(() => {
    // Load Beehiiv script
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://subscribe-forms.beehiiv.com/embed.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <iframe
        src="https://subscribe-forms.beehiiv.com/36b5b9a4-7a5a-4056-b378-4d0e1f111dbc"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
        style={{
          width: "560px",
          height: "339px",
          margin: 0,
          borderRadius: "0px",
          backgroundColor: "transparent",
          boxShadow: "none",
          maxWidth: "100%",
        }}
      />
    </div>
  );
};

export default BeehiivSubscribeForm;

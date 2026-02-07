import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        posthog: any;
    }
}

const PageViewTracker = () => {
    const location = useLocation();

    useEffect(() => {
        // 1. Map paths to readable titles
        let title = "Learn With Lourdes";
        const path = location.pathname;

        if (path === "/") {
            title = "Link In Bio | Learn With Lourdes";
        } else if (path === "/vision-architect") {
            title = "Vision Architect LP | Learn With Lourdes";
        } else if (path === "/viral-engine") {
            title = "Viral Engine LP | Learn With Lourdes";
        } else if (path === "/newsletter") {
            title = "The Wealth Builder LP | Learn With Lourdes";
        } else if (path === "/travelfreedom") {
            title = "Freedom Business Blueprint | Learn With Lourdes";
        } else if (path === "/travelwebinar") {
            title = "Travel Webinar | Learn With Lourdes";
        } else if (path === "/blog") {
            title = "Blog | Learn With Lourdes";
        } else if (path === "/agency") {
            title = "Marketing Agency | Learn With Lourdes";
        }

        // 2. Update document title
        document.title = title;

        // 3. PostHog automatically captures $pageview on history changes
        // But updating the title BEFORE the event is crucial so PostHog grabs the new title.
        // Sometimes explicit capture is safer if auto-capture happens too early.
        // We'll let auto-capture do its thing, but if the user still sees issues, we can force it here.

    }, [location]);

    return null;
};

export default PageViewTracker;

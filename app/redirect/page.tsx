import { useEffect } from "react";

export default function RedirectPage({ redirectUrl }) {
    useEffect(() => {
        if (redirectUrl) {
            // Perform the redirect
            window.location.href = redirectUrl; // For a full page reload redirect
            // Or use Next.js router for client-side redirect (comment out the line above if using this)
            // router.push(redirectUrl);
        }
    }, [redirectUrl]);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}

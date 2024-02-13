import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
    const router = useRouter();

    useEffect(() => {
        const { redirectUrl } = router.query;
        
        // Default redirect URL
        let finalRedirectUrl = 'https://folklore-cms.vercel.app';

        // Choose the redirect URL based on the provided query parameter
        if (redirectUrl === 'button1') {
            finalRedirectUrl = 'https://example.com/button1';
        } else if (redirectUrl === 'button2') {
            finalRedirectUrl = 'https://example.com/button2';
        } else if (redirectUrl === 'button3') {
            finalRedirectUrl = 'https://example.com/button3';
        } else if (redirectUrl === 'button4') {
            finalRedirectUrl = 'https://example.com/button4';
        }
        
        // Perform the redirect
        window.location.href = finalRedirectUrl; // For a full page reload redirect
        // Or use Next.js router for client-side redirect (comment out the line above if using this)
        // router.push(finalRedirectUrl);
    }, [router.query]);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}

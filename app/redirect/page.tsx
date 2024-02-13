// 'use client'; is no longer necessary as we will dynamically import this component where needed

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
    const router = useRouter();

    useEffect(() => {
        // Extract the query parameter for the redirect URL
        const { redirectUrl } = router.query;

        // Define default redirect URL
        let finalRedirectUrl = 'https://folkloreinstitute.vercel.app';

        // Check if a specific redirect URL is provided, update finalRedirectUrl accordingly
        if (redirectUrl === 'button1') {
            finalRedirectUrl = 'https://example.com/redirect1';
        } else if (redirectUrl === 'button2') {
            finalRedirectUrl = 'https://example.com/redirect2';
        } else if (redirectUrl === 'button3') {
            finalRedirectUrl = 'https://example.com/redirect3';
        } else if (redirectUrl === 'button4') {
            finalRedirectUrl = 'https://example.com/redirect4';
        }

        // Perform the redirect
        window.location.href = finalRedirectUrl;
    }, [router.query]); // Listening to changes in the query object

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}

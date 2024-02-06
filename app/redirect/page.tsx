'use client';
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function RedirectPage() {
    const router = useRouter();

    useEffect(() => {
        const tokenproofUrl = 'https://tokenproof.xyz/event/shefi-summit-denver';

        // Perform the redirect
        window.location.href = tokenproofUrl; // For a full page reload redirect
        // Or use Next.js router for client-side redirect (comment out the line above if using this)
        // router.push(tokenproofUrl);
    }, [router]);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}

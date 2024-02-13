import { useEffect } from "react";
import { useRouter } from "next/router";
import { useClient } from "next/react"; // Import useClient from next/react

interface RedirectPageProps {
  redirectUrl: string;
}

export default function RedirectPage({ redirectUrl }: RedirectPageProps) {
    const router = useRouter();
    useClient(); // Mark this component as a client-side component

    useEffect(() => {
        if (redirectUrl) {
            // Perform the redirect
            router.push(redirectUrl); // For client-side redirect
        }
    }, [redirectUrl, router]);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}

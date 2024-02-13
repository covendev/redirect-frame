import { useEffect } from "react";
import { useRouter } from "next/router";

interface RedirectPageProps {
  redirectUrl: string;
}

export default function RedirectPage({ redirectUrl }: RedirectPageProps) {
    const router = useRouter();

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

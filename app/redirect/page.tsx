import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage({ redirectUrl }) {
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

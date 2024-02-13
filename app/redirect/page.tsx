import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useClient } from 'next/client';

export default function RedirectPage() {
  const router = useRouter();
  useClient(); // Mark this component as a client-side component

  useEffect(() => {
    const { action } = router.query;

    // Perform the redirect based on the action
    switch (action) {
      case 'post_redirect_1':
        window.location.href = 'https://redirect-url-for-button-1.com';
        break;
      case 'post_redirect_2':
        window.location.href = 'https://redirect-url-for-button-2.com';
        break;
      case 'post_redirect_3':
        window.location.href = 'https://redirect-url-for-button-3.com';
        break;
      case 'post_redirect_4':
        window.location.href = 'https://redirect-url-for-button-4.com';
        break;
      default:
        // Redirect to a default URL if action is not recognized
        window.location.href = 'https://default-redirect-url.com';
        break;
    }
  }, [router]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

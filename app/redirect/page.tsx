// 'use client'; is no longer necessary as we will dynamically import this component where needed
'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const { action } = router.query;

    // Perform the redirect based on the action
    switch (action) {
      case 'Button 1':
        window.location.href = 'https://redirect-url-for-button-1.com';
        break;
      case 'Button 2':
        window.location.href = 'https://redirect-url-for-button-2.com';
        break;
      case 'Button 3':
        window.location.href = 'https://redirect-url-for-button-3.com';
        break;
      case 'Button 4':
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

'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const { action } = router.query as { action: string };

    console.log('Received action:', action);

    // Perform the redirect based on the action
    switch (action) {
      case 'Learn':
        window.location.href = 'https://folklore.institute';
        break;
      case 'RSS':
        window.location.href = 'https://entries.folklore.institute';
        break;
      case 'Telegram':
        window.location.href = 'https://t.me/folklore_0x';
        break;
      case 'Membership':
        window.location.href = 'https://zora.co/collect/oeth:0x2451761fed91d394ad6ba01215f8b46abe70fc96';
        break;
      default:
        // Handle default case
        break;
    }
  }, [router.query]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

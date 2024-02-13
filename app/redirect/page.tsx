// 'use client'; is no longer necessary as we will dynamically import this component where needed
'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter() as any;

  useEffect(() => {
    const { action } = router.query as { action: string };

    // Perform the redirect based on the action
    switch (action) {
      case 'learn_redirect':
        window.location.href = 'https://folklore.institute';
        break;
      case 'rss_redirect':
        window.location.href = 'https://entries.folklore.institute';
        break;
      case 'telegram_redirect':
        window.location.href = 'https://t.me/folklore_0x';
        break;
      case 'membership_redirect':
        window.location.href = ' https://zora.co/collect/oeth:0x2451761fed91d394ad6ba01215f8b46abe70fc96';
        break;

    }
  }, [router]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

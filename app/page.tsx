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

import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

export default function Page() {
  const handleButtonClick = (url: string) => {
    // Redirect to the specified URL
    router.push(url);
  };

  const frameMetadata = getFrameMetadata({
    buttons: [
      { label: 'Learn', action: 'https://folklore.insitute' },
      { label: 'RSS', action: 'entries.folklore.institue' },
      { label: 'Join Telegram', action: 'https://t.me/folklore_0x' },
      { label: 'Membership', action: 'https://zora.co/collect/oeth:0x2451761fed91d394ad6ba01215f8b46abe70fc96' }
    ],
    image: 'https://images.mirror-media.xyz/publication-images/yvayTwllxkEx4rX63mYhO.png',
    post_url: 'https://folklore-frame.netlify.app/api/frame',
  });

  const metadata: Metadata = {
    title: 'Redirect frame',
    description: 'LFG',
    openGraph: {
      title: 'Redirect frame',
      description: 'LFG',
      images: ['https://images.mirror-media.xyz/publication-images/yvayTwllxkEx4rX63mYhO.png'],
    },
    other: {
      ...frameMetadata,
    },
  };

  return (
    <>
      <img src={frameMetadata.image} />
      {/* Display buttons */}
      {frameMetadata.buttons.map((button, index) => (
        <button key={index} onClick={() => handleButtonClick(button.action)}>
          {button.label}
        </button>
      ))}
    </>
  );
}

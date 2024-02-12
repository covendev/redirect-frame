import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

export default function Page() {
  const frameMetadata = getFrameMetadata({
    buttons: [
      { label: 'Button 1', action: 'https://example.com/1' },
      { label: 'Button 2', action: 'https://example.com/2' },
      { label: 'Button 3', action: 'https://example.com/3' },
      { label: 'Button 4', action: 'https://example.com/4' }
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
    </>
  );
}

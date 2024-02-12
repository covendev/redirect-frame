import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Join the Lore!', action: 'post_redirect'}
  ],
  image: 'https://images.mirror-media.xyz/publication-images/public/IMG_8225.JPG',
  post_url: 'https://folklore-frame.netlify.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://images.mirror-media.xyz/publication-images/public/IMG_8225.JPG'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'/public/IMG_8225.JPG'}/>
    </>
  );
}

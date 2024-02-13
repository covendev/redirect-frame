import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    { label: 'Button 1', action: 'post_redirect' },
    { label: 'Button 2', action: 'post_redirect' },
    { label: 'Button 3', action: 'post_redirect' },
    { label: 'Button 4', action: 'post_redirect' }
  ],
  image: 'https://images.mirror-media.xyz/publication-images/yvayTwllxkEx4rX63mYhO.png',
  post_url: 'https://folklore-frame.netlify.app/api/frame',
});

export const metadata: Metadata = {
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

export default function Page() {
  return (
    <>
      <img src={'https://images.mirror-media.xyz/publication-images/yvayTwllxkEx4rX63mYhO.png'}/>
    </>
  );
}

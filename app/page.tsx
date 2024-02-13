import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    { label: 'button1', action: 'post_redirect_1' },
    { label: 'button2', action: 'post_redirect_2' },
    { label: 'button3', action: 'post_redirect_3' },
    { label: 'button4', action: 'post_redirect_4' }
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

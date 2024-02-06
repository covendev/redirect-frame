import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Click to unlock', action: 'post_redirect'}
  ],
  image: 'https://images.mirror-media.xyz/publication-images/yvayTwllxkEx4rX63mYhO.png',
  post_url: 'https://magnificent-panda-f599db.netlify.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://redirect-frame.vercel.app/video.png'],
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

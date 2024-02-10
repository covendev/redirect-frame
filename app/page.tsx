import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Join the Lore!', action: 'post_redirect'}
  ],
  image: 'https://pbs.twimg.com/media/GFlqX6EbsAA1OT4?format=jpg&name=medium',
  post_url: 'https://folklore-frame.netlify.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://pbs.twimg.com/media/GFlqX6EbsAA1OT4?format=jpg&name=medium'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'https://pbs.twimg.com/media/GFlqX6EbsAA1OT4?format=jpg&name=medium'}/>
    </>
  );
}

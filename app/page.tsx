import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    { label: 'Learn', action: 'learn_redirect' },
    { label: 'RSS', action: 'rss_redirect' },
    { label: 'Telegram', action: 'telegram_redirect' },
    { label: 'Membership', action: 'membership_redirect' }
  ],
  image: 'https://images.mirror-media.xyz/publication-images/yvayTwllxkEx4rX63mYhO.png',
  post_url: 'https://folkloreinstitute.netlify.app/api/frame',
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

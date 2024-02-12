import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Join SheFi!', action: 'post_redirect'}
  ],
  image: 'https://shefivalentines.netlify.app/public/shefivalentines.JPG.JPG',
  post_url: 'https://shefivalentines.netlify.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://shefivalentines.netlify.app/public/shefivalentines.JPG.JPG'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'/shefi.JPG'}/>
    </>
  );
}

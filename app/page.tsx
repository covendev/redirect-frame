import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Click to unlock', action: 'post_redirect'}
  ],
  image: 'https://cdn.tokenproof.xyz/assets/36be39d9-b1d8-4fc1-8278-20b77cc9ab72/event_page_banner/3c4e536e-2b0b-494a-855d-3f9407facb7b.png',
  post_url: 'https://shefi-ethdenver-tix.netlify.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://cdn.tokenproof.xyz/assets/36be39d9-b1d8-4fc1-8278-20b77cc9ab72/event_page_banner/3c4e536e-2b0b-494a-855d-3f9407facb7b.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'https://cdn.tokenproof.xyz/assets/36be39d9-b1d8-4fc1-8278-20b77cc9ab72/event_page_banner/3c4e536e-2b0b-494a-855d-3f9407facb7b.png'}/>
    </>
  );
}

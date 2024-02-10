import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Join SheFi!', action: 'post_redirect'}
  ],
  image: 'https://shefis10-registration.netlify.app/Screenshot 2024-02-10 at 6.50.49 PM.png',
  post_url: 'https://shefis10-registration.netlify.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://shefis10-registration.netlify.app/Screenshot 2024-02-10 at 6.50.49 PM.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'/Screenshot 2024-02-10 at 6.50.49 PM.png'}/>
    </>
  );
}

import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Join SheFi!', action: 'post_redirect'}
  ],
  image: 'https://pbs.twimg.com/profile_banners/1210289817487073281/1703255944/1500x500',
  post_url: 'https://shefi-s10--shefis10-registration.netlify.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://pbs.twimg.com/profile_banners/1210289817487073281/1703255944/1500x500'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'https://pbs.twimg.com/profile_banners/1210289817487073281/1703255944/1500x500'}/>
    </>
  );
}

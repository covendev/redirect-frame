
// Import necessary modules
import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from "./redirect/config";

// Define frameMetadata using getFrameMetadata function
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Learn',
      target: 'https://folklore.institute',
    },

    {
      action: 'link',
      label: 'RSS',
      target: 'https://entries.folklore.institute',
    },
    {
      action: 'link',
      label: 'Members Chat',
      target: 'https://warpcast.com/~/group/otMuwzw78EfpcBp-sKWjFw',
    },
    {
      action: 'link',
      label: 'Membership',
      target: 'https://zora.co/collect/oeth:0x2451761fed91d394ad6ba01215f8b46abe70fc96',
    },
  ],
  image: 'https://images.mirror-media.xyz/publication-images/yvayTwllxkEx4rX63mYhO.png',
  post_url: 'https://folkloreinstitute.netlify.app/api/frame',
});

// Define metadata object with type Metadata
export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://folkloreinstitute.netlify.app/api/folklore.jpeg'],
  },
  other: {
    ...frameMetadata,
  },
};

// Define Page component
export default function Page() {
  return (
    <>
      <img src={'/folklore.jpeg'}/>
    </>
  );
}

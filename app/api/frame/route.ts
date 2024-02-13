

import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Extract data from the request body to determine which redirect to perform
  const { action } = await req.body.json();

  // Determine the redirect URL based on the action
  let redirectUrl = 'https://folkloreinstitute.netlify.app/redirect'; // Default redirect URL

  switch (action) {
      case 'Learn':
        window.location.href = 'https://folklore.institute';
        break;
      case 'RSS':
        window.location.href = 'entries.folklore.institute';
        break;
      case 'Telegram':
        window.location.href = 'https://t.me/folklore_0x';
        break;
      case 'Membership':
        window.location.href = ' https://zora.co/collect/oeth:0x2451761fed91d394ad6ba01215f8b46abe70fc96';
        break;
    default:
      // Handle default case if action is not recognized
      break;
  }

  // Perform the redirect
  return NextResponse.redirect(redirectUrl, { status: 302 });
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';


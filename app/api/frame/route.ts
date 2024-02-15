import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Assuming the 'action' is extracted from the request body
  const { action } = await req.body.json();

  // Perform the redirect based on the action
  switch (action) {
    case 'Learn':
      return NextResponse.redirect('https://folklore.institute', { status: 302 });
    case 'RSS':
      return NextResponse.redirect('https://entries.folklore.institute', { status: 302 });
    case 'Telegram':
      return NextResponse.redirect('https://t.me/folklore_0x', { status: 302 });
    case 'Membership':
      return NextResponse.redirect('https://zora.co/collect/oeth:0x2451761fed91d394ad6ba01215f8b46abe70fc96', { status: 302 });
    default:
      // Handle default case
      return NextResponse.redirect('https://folkloreinstitute.netlify.app/redirect', { status: 302 });
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

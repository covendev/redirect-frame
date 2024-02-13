import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const { action } = await req.body.json();
  
  // Handle different button actions and redirect accordingly
  switch (action) {
    case 'post_redirect_1':
      return NextResponse.redirect('https://redirect-url-for-button-1.com', { status: 302 });
    case 'post_redirect_2':
      return NextResponse.redirect('https://redirect-url-for-button-2.com', { status: 302 });
    case 'post_redirect_3':
      return NextResponse.redirect('https://redirect-url-for-button-3.com', { status: 302 });
    case 'post_redirect_4':
      return NextResponse.redirect('https://redirect-url-for-button-4.com', { status: 302 });
    default:
      return NextResponse.redirect('https://default-redirect-url.com', { status: 302 });
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

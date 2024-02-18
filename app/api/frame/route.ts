// import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { FrameRequest, getFrameMessage, /* updated import */ } from "@coinbase/onchainkit";

import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from "../../redirect/config";


async function getResponse(req: NextRequest): Promise<NextResponse> {
  return NextResponse.redirect('https://folklore-frame.netlify.app/redirect', {status: 302});
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

// import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { FrameRequest, getFrameMessage, /* updated import */ } from "@coinbase/onchainkit";

import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from "../../redirect/config";


export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

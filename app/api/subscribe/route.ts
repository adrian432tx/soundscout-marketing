import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  // TODO: integrate with Resend/Mailchimp/ConvertKit. For now, log only.
  console.log("[SoundScout] New signup:", email);
  return NextResponse.json({ ok: true });
}
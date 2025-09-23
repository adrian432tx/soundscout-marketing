import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    console.log("[SoundScout] New beta signup:", email);
    console.log("[DEBUG] Environment check:", {
      hasResendKey: !!process.env.RESEND_API_KEY,
      fromEmail: process.env.FROM_EMAIL,
      toEmail: process.env.TO_EMAIL
    });

    // Send welcome email to user (temporary: send to your verified email)
    console.log("[DEBUG] Sending welcome email to:", email);
    const welcomeResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'SoundScout <noreply@soundscout-marketing.vercel.app>',
      to: 'atarintx432@gmail.com', // Temporary: using your verified email
      subject: 'Welcome to SoundScout Beta! 🎵',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00D4AA;">Welcome to SoundScout Beta! 🦇</h1>
          <p>Thanks for signing up for early access to SoundScout!</p>
          <p><strong>User Email:</strong> ${email}</p>
          <p><strong>SoundScout</strong> connects your Spotify library with YouTube videos, helping you discover:</p>
          <ul>
            <li>🎵 Official music videos</li>
            <li>🎤 Live performances</li>
            <li>📝 Lyrics videos</li>
            <li>🎧 Reaction videos</li>
            <li>🎸 Cover versions</li>
          </ul>
          <p>We'll keep you updated on our launch progress and let you know when SoundScout is available!</p>
          <p style="color: #666; font-size: 14px;">
            Best,<br>
            The SoundScout Team<br>
            <em>Where Music Meets Video</em>
          </p>
        </div>
      `
    });
    console.log("[DEBUG] Welcome email result:", welcomeResult);

    // Notify you of new signup
    console.log("[DEBUG] Sending notification email to:", 'atarintx432@gmail.com');
    const notificationResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'SoundScout <noreply@soundscout-marketing.vercel.app>',
      to: 'atarintx432@gmail.com', // Using your verified email
      subject: '🎉 New SoundScout Beta Signup!',
      html: `
        <h2>New beta signup for SoundScout!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Source:</strong> Marketing Website</p>
      `
    });
    console.log("[DEBUG] Notification email result:", notificationResult);

    return NextResponse.json({
      ok: true,
      message: 'Successfully signed up for beta access!'
    });

  } catch (error) {
    console.error('[SoundScout] Email error:', error);
    return NextResponse.json({
      error: 'Failed to process signup. Please try again.'
    }, { status: 500 });
  }
}
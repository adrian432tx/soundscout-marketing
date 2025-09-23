#!/usr/bin/env tsx
/**
 * Launch Notification Script
 *
 * This script sends launch notifications to all beta signups when the app is ready.
 *
 * Usage:
 * npm run launch-notify
 *
 * Or directly:
 * npx tsx scripts/send-launch-notification.ts
 */

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

interface BetaSignup {
  id: string;
  email: string;
  created_at: string;
  notified_at: string | null;
}

async function sendLaunchNotifications() {
  try {
    console.log('🚀 Starting launch notification process...');

    // Get all beta signups that haven't been notified yet
    const { data: signups, error } = await supabase
      .from('beta_signups')
      .select('*')
      .is('notified_at', null)
      .order('created_at', { ascending: true });

    if (error) {
      throw new Error(`Failed to fetch signups: ${error.message}`);
    }

    if (!signups || signups.length === 0) {
      console.log('✅ No new signups to notify');
      return;
    }

    console.log(`📧 Found ${signups.length} signups to notify`);

    let successCount = 0;
    let errorCount = 0;

    // Send launch notification to each signup
    for (const signup of signups as BetaSignup[]) {
      try {
        console.log(`📨 Sending launch notification to: ${signup.email}`);

        const emailResult = await resend.emails.send({
          from: process.env.FROM_EMAIL || 'SoundScout <onboarding@resend.dev>',
          to: signup.email,
          subject: '🎉 SoundScout is LIVE! Download Now',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #00D4AA; font-size: 36px; margin: 0;">🎉 SoundScout is LIVE!</h1>
                <p style="color: #666; font-size: 18px; margin: 10px 0;">The wait is over - discover videos for your music now!</p>
              </div>

              <div style="background: linear-gradient(135deg, #00D4AA 0%, #0066FF 100%); border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
                <h2 style="color: white; margin: 0 0 15px 0;">Download SoundScout Today</h2>
                <p style="color: rgba(255,255,255,0.9); margin: 0 0 25px 0;">
                  Connect your Spotify library and discover YouTube videos for all your favorite music!
                </p>

                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                  <a href="#" style="display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; border: 1px solid rgba(255,255,255,0.3);">
                    📱 Download for iOS
                  </a>
                  <a href="#" style="display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; border: 1px solid rgba(255,255,255,0.3);">
                    🤖 Download for Android
                  </a>
                </div>
              </div>

              <div style="margin: 30px 0;">
                <h3 style="color: #333; margin: 0 0 15px 0;">✨ What's New in SoundScout:</h3>
                <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
                  <li>🎵 <strong>Instant Video Discovery</strong> - Find videos for any song in seconds</li>
                  <li>📱 <strong>Seamless Spotify Integration</strong> - Connect your existing library</li>
                  <li>🎼 <strong>Playlist Video Matching</strong> - Get videos for entire playlists</li>
                  <li>🔍 <strong>Smart Recommendations</strong> - Discover new content based on your taste</li>
                  <li>⚡ <strong>Lightning Fast</strong> - Optimized for speed and performance</li>
                </ul>
              </div>

              <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 30px 0;">
                <p style="color: #666; margin: 0; font-size: 14px; text-align: center;">
                  <strong>Thank you for being an early supporter!</strong><br>
                  You signed up on ${new Date(signup.created_at).toLocaleDateString()} and helped us build something amazing.
                </p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <p style="color: #666; margin: 0;">
                  Questions? Reply to this email or reach out to us.<br>
                  <strong>The SoundScout Team</strong><br>
                  <em>Where Music Meets Video</em>
                </p>
              </div>

              <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #999; font-size: 12px; margin: 0;">
                  Don't want to receive launch updates?
                  <a href="#" style="color: #999;">Unsubscribe here</a>
                </p>
              </div>
            </div>
          `
        });

        if (emailResult.error) {
          throw new Error(emailResult.error.message);
        }

        // Mark as notified
        await supabase
          .from('beta_signups')
          .update({ notified_at: new Date().toISOString() })
          .eq('id', signup.id);

        successCount++;
        console.log(`✅ Successfully notified: ${signup.email}`);

        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (emailError) {
        errorCount++;
        console.error(`❌ Failed to notify ${signup.email}:`, emailError);
      }
    }

    console.log('\n📊 Launch Notification Summary:');
    console.log(`✅ Successfully notified: ${successCount} users`);
    console.log(`❌ Failed notifications: ${errorCount} users`);
    console.log(`📧 Total signups processed: ${signups.length}`);

    if (successCount > 0) {
      console.log('\n🎉 Launch notifications sent successfully!');
    }

  } catch (error) {
    console.error('💥 Launch notification process failed:', error);
    process.exit(1);
  }
}

// Only run if called directly
if (require.main === module) {
  sendLaunchNotifications()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { sendLaunchNotifications };
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoundScout — Discover Music Across Spotify & YouTube",
  description:
    "SoundScout connects your Spotify listening to fresh tracks and YouTube visuals. Join the beta and scout music that actually fits your vibe.",
  metadataBase: new URL("https://www.soundscout.app"),
  openGraph: {
    title: "SoundScout — Discover Music Across Spotify & YouTube",
    description:
      "Connect your streaming history to fresh tracks and videos. Join the beta.",
    url: "https://www.soundscout.app",
    siteName: "SoundScout",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "SoundScout Preview" },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
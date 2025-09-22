import { Section, H2, Muted } from "@/components/Section";
import { Zap, Search, Video, Music, Users, Mic } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Smart Video Matching",
    text: "AI-powered algorithm finds the best YouTube videos for your Spotify tracks with excellent match quality.",
  },
  {
    icon: Search,
    title: "Organized Categories",
    text: "Videos sorted by type: Official Music Videos, Lyrics Videos, Live Performances, Fan Content, and more.",
  },
  {
    icon: Video,
    title: "Multiple Options",
    text: "Get Official videos, Audio-only versions, Reaction videos, Cover versions, and Live sessions for every song.",
  },
  {
    icon: Music,
    title: "Recently Played Integration",
    text: "Automatically discover videos for your recently played Spotify tracks - seamless music-to-video discovery.",
  },
  {
    icon: Users,
    title: "Fan Content Discovery",
    text: "Explore reactions, covers, and community discussions around your favorite songs from other music lovers.",
  },
  {
    icon: Mic,
    title: "Live & Acoustic Sessions",
    text: "Find concerts, acoustic sets, and live performances to experience your favorite songs in new ways.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <div className="mx-auto max-w-4xl text-center">
        <H2>Everything You Need to Discover Music Videos</H2>
        <Muted>Connect your Spotify library and unlock a world of video content for every song</Muted>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
          >
            <div className="mb-4 inline-flex rounded-lg bg-gradient-to-r from-brand-teal to-brand-blue p-2">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
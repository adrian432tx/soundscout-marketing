import { Section, H2, Muted } from "@/components/Section";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/Screenshot_20250919_174632_SoundScout.jpeg",
    alt: "SoundScout onboarding - Connect with Spotify",
    caption: "Connect your Spotify library"
  },
  {
    src: "/screenshots/Screenshot_20250919_173612_SoundScout_clean.jpeg",
    alt: "SoundScout home screen with recently played tracks",
    caption: "Discover videos for recent tracks"
  },
  {
    src: "/screenshots/Screenshot_20250919_173838_SoundScout.jpeg",
    alt: "Smart Video Matches with AI-powered recommendations",
    caption: "AI-powered smart video matching"
  },
  {
    src: "/screenshots/Screenshot_20250919_173849_SoundScout.jpeg",
    alt: "Search Categories - organized video types",
    caption: "Organized by video type"
  },
  {
    src: "/screenshots/Screenshot_20250919_173910_SoundScout.jpeg",
    alt: "Video options - Official, Lyrics, Audio Only, Reactions, Covers",
    caption: "Multiple video options per song"
  }
];

export function Preview() {
  return (
    <Section id="preview">
      <div className="mx-auto max-w-4xl text-center">
        <H2>See SoundScout in Action</H2>
        <Muted>Real screenshots from the SoundScout beta app</Muted>
      </div>
      <div className="mt-12 space-y-8">
        {/* Top row - 3 screenshots */}
        <div className="grid gap-8 md:grid-cols-3">
          {screenshots.slice(0, 3).map((screenshot, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-transform group-hover:scale-105">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={300}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-white/70">
                {screenshot.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 screenshots centered */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:gap-16 md:mx-auto md:max-w-2xl lg:max-w-3xl">
          {screenshots.slice(3, 5).map((screenshot, i) => (
            <div key={i + 3} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-transform group-hover:scale-105">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={300}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-white/70">
                {screenshot.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
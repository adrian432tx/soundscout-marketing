import { Section } from "@/components/Section";

export function Footer() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
        <p className="text-white/60">© 2025 SoundScout. All rights reserved.</p>
        <div className="flex gap-6 text-white/70">
          <a href="https://sites.google.com/view/soundscout-privacy/home" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">TikTok</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">X</a>
        </div>
      </div>
    </Section>
  );
}
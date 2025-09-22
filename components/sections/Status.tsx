import { Section, H2 } from "@/components/Section";

export function Status() {
  return (
    <Section id="status">
      <H2>Timeline & Status</H2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/70">Android</div>
          <div className="text-lg font-semibold">Testing (14-day phase)</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/70">iOS</div>
          <div className="text-lg font-semibold">Coming soon</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/70">Web</div>
          <div className="text-lg font-semibold">After mobile release</div>
        </div>
      </div>
    </Section>
  );
}
import { Nav } from "@/components/Nav";
import { Section, H2, Muted } from "@/components/Section";
import EmailForm from "@/components/EmailForm";
import { MotionHero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Preview } from "@/components/sections/Preview";
import { Status } from "@/components/sections/Status";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <MotionHero />
      <Features />
      <Preview />
      <Section id="signup">
        <div className="mx-auto max-w-2xl text-center">
          <H2>Ready to Scout New Sounds?</H2>
          <Muted>
            Be the first to explore SoundScout before it hits all the app stores.
          </Muted>
          <div className="mt-6 flex justify-center">
            <EmailForm />
          </div>
        </div>
      </Section>
      <Status />
      <Footer />
    </>
  );
}
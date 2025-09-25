"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function MotionHero() {
  return (
    <section className="container grid min-h-[70vh] place-items-center py-16">
      <div className="text-center">
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png"
            alt="SoundScout Logo"
            width={120}
            height={120}
            className="drop-shadow-2xl"
            priority
          />
        </motion.div>
        <motion.h1
          className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Where Music Meets Video
        </motion.h1>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-lg text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Connect your Spotify library and instantly discover YouTube videos for your recently played tracks.
          Get official music videos, lyrics videos, live performances, reactions, covers, and more — all organized and ready to explore.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <a
            href="#signup"
            className="rounded-xl bg-gradient-to-r from-brand-teal to-brand-blue px-6 py-3 text-white shadow-lg hover:opacity-90 transition-opacity"
          >
            Join the Beta
          </a>
          <a
            href="#preview"
            className="rounded-xl border border-white/20 px-6 py-3 text-white/90 hover:bg-white/5 transition-colors"
          >
            Watch Demo
          </a>
        </motion.div>
        <motion.div
          className="mx-auto mt-14 h-64 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 shadow-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Placeholder preview area — drop screenshots or a video embed later */}
          <div className="grid h-full place-items-center text-white/70">
            App preview coming soon
          </div>
        </motion.div>
      </div>
    </section>
  );
}
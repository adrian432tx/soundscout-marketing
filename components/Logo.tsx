"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Logo() {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative grid place-items-center rounded-2xl p-1">
        <Image
          src="/playstore-icon.png"
          alt="SoundScout Logo"
          width={32}
          height={32}
          className="rounded-lg"
          priority
        />
      </div>
      <span className="text-xl font-semibold tracking-tight">SoundScout</span>
    </motion.div>
  );
}
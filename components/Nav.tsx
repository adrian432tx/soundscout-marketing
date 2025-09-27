"use client";
import Link from "next/link";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden gap-6 md:flex">
          <a href="#features" className="opacity-80 hover:opacity-100">Features</a>
          <a href="#preview" className="opacity-80 hover:opacity-100">Preview</a>
          <a href="#status" className="opacity-80 hover:opacity-100">Status</a>
        </nav>
        <Link
          href="#signup"
          className="rounded-xl bg-gradient-to-r from-brand-teal to-brand-blue px-4 py-2 text-white shadow-lg hover:opacity-90 transition-opacity"
        >
          Join the Waitlist
        </Link>
      </div>
    </header>
  );
}
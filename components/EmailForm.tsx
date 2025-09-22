"use client";
import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      // Replace this with your provider of choice (e.g., Resend, Mailchimp, ConvertKit)
      // For now, we post to a simple API route that logs and returns 200.
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-xl gap-2">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/60"
      />
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-brand-teal to-brand-blue px-5 py-3 text-white shadow-lg hover:opacity-90 transition-opacity"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Joining…" : "Get Early Access"}
      </button>
      {status === "success" && (
        <span className="ml-2 self-center text-sm text-emerald-300">You're in!</span>
      )}
      {status === "error" && (
        <span className="ml-2 self-center text-sm text-red-300">Try again</span>
      )}
    </form>
  );
}
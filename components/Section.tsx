import { ReactNode } from "react";

export function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="container py-20 md:py-28">
      {children}
    </section>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
      {children}
    </h2>
  );
}

export function Muted({ children }: { children: ReactNode }) {
  return <p className="text-white/70">{children}</p>;
}
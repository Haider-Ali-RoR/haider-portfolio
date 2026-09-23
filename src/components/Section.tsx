import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

/** Shared section shell: consistent spacing, max width, and heading style. */
export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-12">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-600 uppercase dark:text-brand-400">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}

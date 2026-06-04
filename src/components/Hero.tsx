import { profile } from "../data";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* subtle static background accent — no animation */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-brand-100/60 to-transparent dark:from-brand-900/20"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for new opportunities
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-brand-600 dark:text-brand-400">
            {profile.title}
          </p>
          <p className="mt-1 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            {profile.subtitle}
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:mx-0 dark:text-slate-400">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <MailIcon width={18} height={18} />
              Contact me
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <DownloadIcon width={18} height={18} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 text-slate-500 md:justify-start dark:text-slate-400">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-brand-600 dark:hover:text-brand-400">
              <GitHubIcon width={22} height={22} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-brand-600 dark:hover:text-brand-400">
              <LinkedInIcon width={22} height={22} />
            </a>
            <a
              href={profile.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              <MapPinIcon width={18} height={18} />
              {profile.location}
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-500/30 to-brand-300/10 blur-xl"
            />
            <img
              src={profile.photo}
              alt={profile.name}
              onError={(e) => {
                // Fallback to a generated avatar if /profile.jpg is missing.
                e.currentTarget.src =
                  "https://api.dicebear.com/9.x/initials/svg?seed=Haider%20Ali&backgroundColor=1965ef";
              }}
              className="relative h-44 w-44 rounded-full border-4 border-white object-cover shadow-xl sm:h-56 sm:w-56 dark:border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

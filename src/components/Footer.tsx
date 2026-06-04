import { profile } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {profile.name}. Built with React, TypeScript & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-brand-600 dark:hover:text-brand-400">
            <GitHubIcon width={20} height={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-brand-600 dark:hover:text-brand-400">
            <LinkedInIcon width={20} height={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-brand-600 dark:hover:text-brand-400">
            <MailIcon width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

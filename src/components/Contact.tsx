import Section from "./Section";
import { profile } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

const items = [
  { icon: MailIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: PhoneIcon, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: GitHubIcon, label: "GitHub", value: "Haider-Ali-RoR", href: profile.socials.github },
  { icon: LinkedInIcon, label: "LinkedIn", value: "haider-ali", href: profile.socials.linkedin },
  { icon: MapPinIcon, label: "Location", value: profile.location, href: profile.mapUrl },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          I'm open to senior full-stack and frontend roles, contract work, and interesting
          collaborations. The fastest way to reach me is by email — I usually reply within a day.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="rounded-lg bg-brand-50 p-2.5 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                  <Icon />
                </span>
                <span>
                  <span className="block text-xs font-medium tracking-wide text-slate-400 uppercase dark:text-slate-500">
                    {label}
                  </span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {value}
                  </span>
                </span>
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-brand-400 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-brand-500 dark:hover:bg-slate-800/40"
              >
                {content}
              </a>
            ) : (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 dark:border-slate-800"
              >
                {content}
              </div>
            );
          })}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <MailIcon width={18} height={18} />
          Send me an email
        </a>
      </div>
    </Section>
  );
}

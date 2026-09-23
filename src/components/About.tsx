import Section from "./Section";
import { education, languages, profile } from "../data";

const stats = [
  { value: profile.yearsOfExperience, label: "Years of experience" },
  { value: "15+", label: "Production projects shipped" },
  { value: "2", label: "Core stacks (MERN & Rails)" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 text-base leading-relaxed text-slate-600 md:col-span-2 dark:text-slate-400">
          <p>
            I'm a senior full-stack engineer based in {profile.location}, with over{" "}
            {profile.yearsOfExperience} years shipping production SaaS platforms end to end.
            My core focus is the Node.js / MERN ecosystem — Express, NestJS, Next.js, React,
            and PostgreSQL / MongoDB — backed by a deep Ruby on Rails background.
          </p>
          <p>
            I've built multi-tenant SaaS architectures, AI-integrated products using OpenAI
            GPT-4.1 and Whisper, real-time systems with Socket.io and BullMQ, and e-commerce
            integrations spanning Shopify, Stripe, and Amazon. I care about clean
            architecture, reliable billing flows, and interfaces that feel fast.
          </p>

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-5 dark:border-slate-800 dark:bg-slate-900/40">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Education</h3>
              <a
                href={education.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-slate-600 transition-colors hover:text-brand-600 hover:underline dark:text-slate-400 dark:hover:text-brand-400"
              >
                {education.school}
              </a>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                {education.degree} · {education.period}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-5 dark:border-slate-800 dark:bg-slate-900/40">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Languages</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                {languages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-5 text-center dark:border-slate-800 dark:bg-slate-900/40"
            >
              <p className="text-3xl font-bold text-brand-600 dark:text-brand-400">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

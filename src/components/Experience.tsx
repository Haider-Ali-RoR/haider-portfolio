import Section from "./Section";
import { experiences } from "../data";
import { ExternalLinkIcon } from "./icons";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative border-l border-slate-200 dark:border-slate-800">
        {experiences.map((exp) => (
          <li key={exp.company + exp.period} className="mb-10 ml-6 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-600 dark:border-slate-950 dark:bg-brand-400" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {exp.company}
              </h3>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {exp.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
              {exp.role}
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              {exp.location}
              {exp.url && (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-brand-600 hover:underline dark:text-brand-400"
                >
                  Visit <ExternalLinkIcon width={14} height={14} />
                </a>
              )}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import Section from "./Section";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technologies I work with">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-slate-900 uppercase dark:text-white">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

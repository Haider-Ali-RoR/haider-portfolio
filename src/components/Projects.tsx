import { useState } from "react";
import Section from "./Section";
import Modal from "./Modal";
import { projects, type Project } from "../data";
import { ExternalLinkIcon } from "./icons";

export default function Projects() {
  const [archivedProject, setArchivedProject] = useState<Project | null>(null);
  // Projects with a sub-app suite start expanded; users can collapse them.
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(projects.filter((p) => p.apps).map((p) => [p.name, true]))
  );

  const toggleExpanded = (name: string) =>
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-brand-400 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-500"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>
                  {project.archived && (
                    <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-700/50 dark:bg-amber-900/20 dark:text-amber-400">
                      Archived
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                  {project.tagline}
                </p>
              </div>

              {project.archived ? (
                <button
                  type="button"
                  onClick={() => setArchivedProject(project)}
                  aria-label={`Why ${project.name} is archived`}
                  className="shrink-0 rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-brand-600 dark:hover:bg-slate-800 dark:hover:text-brand-400"
                >
                  <ExternalLinkIcon />
                </button>
              ) : (
                project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="shrink-0 rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-brand-600 dark:hover:bg-slate-800 dark:hover:text-brand-400"
                  >
                    <ExternalLinkIcon />
                  </a>
                )
              )}
            </div>

            <p className="mt-1 text-xs font-medium tracking-wide text-slate-400 uppercase dark:text-slate-500">
              {project.role}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            {project.apps && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => toggleExpanded(project.name)}
                  aria-expanded={!!expanded[project.name]}
                  className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-brand-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:border-brand-500"
                >
                  <span>
                    {expanded[project.name] ? "Hide" : "View"} {project.apps.length} apps in this
                    suite
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${expanded[project.name] ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expanded[project.name] && (
                  <ul className="mt-2 space-y-2">
                    {project.apps.map((app) => (
                      <li key={app.name}>
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-start gap-3 rounded-lg border border-slate-200 p-3 transition-colors hover:border-brand-400 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-brand-500 dark:hover:bg-slate-800/40"
                        >
                          <span className="mt-0.5 shrink-0 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                            <ExternalLinkIcon width={16} height={16} />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-slate-800 dark:text-slate-100">
                              {app.name}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                              {app.description}
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <ul className="mt-auto flex flex-wrap gap-2 pt-4">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800/70 dark:text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <Modal
        open={archivedProject !== null}
        onClose={() => setArchivedProject(null)}
        title={archivedProject ? `${archivedProject.name} is archived` : ""}
      >
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {archivedProject?.archived?.reason}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={archivedProject?.archived?.archiveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setArchivedProject(null)}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <ExternalLinkIcon width={18} height={18} />
            Open in Wayback Machine
          </a>
          <button
            type="button"
            onClick={() => setArchivedProject(null)}
            className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </Modal>
    </Section>
  );
}

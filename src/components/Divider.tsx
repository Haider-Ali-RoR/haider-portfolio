/**
 * A barely-there section break: a hairline that fades to transparent at both
 * ends, so it reads as a soft seam rather than a hard rule — present, but quiet.
 */
export default function Divider() {
  return (
    <div className="mx-auto max-w-5xl px-6" aria-hidden>
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent dark:via-slate-700/50" />
    </div>
  );
}

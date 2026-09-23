import { useMemo } from "react";

/** Small deterministic PRNG so the per-dot speckle is stable across renders. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 16:9 field on a regular grid; dot darkness varies via a smooth noise field
// to give the cloudy halftone look (dense patches + near-empty white areas).
const VIEW_W = 1600;
const VIEW_H = 900;
const GAP = 17; // grid spacing between dots

// Map the noise value to ink: below LOW → blank (white gaps), above HIGH → full.
const LOW = 0.36;
const HIGH = 0.86;
const INK = 0.32; // peak dot opacity

type Dot = { cx: number; cy: number; r: number; o: number };

/**
 * A fixed, faint halftone dot field behind the whole page: a regular grid of
 * small dots whose opacity is driven by smooth domain-warped noise, producing
 * soft cloudy patches of denser dots and near-empty white regions. Sits at
 * -z-10, well behind all text; color is theme-aware via currentColor.
 */
export default function DotField() {
  const dots = useMemo<Dot[]>(() => {
    const rand = mulberry32(20240607);
    const result: Dot[] = [];

    const cols = Math.ceil(VIEW_W / GAP);
    const rows = Math.ceil(VIEW_H / GAP);

    // Smooth, organic field in [0,1]. The cos() terms warp the domain so the
    // patches look cloud-like rather than a regular interference pattern.
    const field = (nx: number, ny: number) => {
      const a = Math.sin(nx * 6.1 + Math.cos(ny * 4.7) * 1.3);
      const b = Math.sin(ny * 5.3 + Math.cos(nx * 3.6) * 1.1);
      const c = Math.sin((nx + ny) * 3.3 + 2.0);
      const d = Math.sin((nx - ny) * 4.1 - 1.2);
      return (a + b + c + d) / 4 / 2 + 0.5; // → 0..1
    };

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const nx = col / cols;
        const ny = row / rows;

        // Normalised ink amount with a soft floor/ceiling.
        let t = (field(nx, ny) - LOW) / (HIGH - LOW);
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        if (t <= 0) continue; // leave the white gaps truly empty

        // Per-dot speckle so neighbours aren't identical; skip the faintest.
        const speckle = 0.55 + rand() * 0.45;
        const o = t * speckle * INK;
        if (o < 0.05) continue;

        result.push({
          cx: col * GAP + GAP / 2,
          cy: row * GAP + GAP / 2,
          r: 0.9 + t * 0.5, // darker patches read slightly heavier
          o,
        });
      }
    }

    return result;
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 text-slate-900 dark:text-white"
      style={{ opacity: 0.7 }}
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid slice"
        fill="currentColor"
      >
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} opacity={d.o} />
        ))}
      </svg>
    </div>
  );
}

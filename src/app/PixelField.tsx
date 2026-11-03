"use client";

import { useEffect, useRef } from "react";

const SUB = 5; // mini squares per side inside each big box
const TARGET_SIZE = 56; // big box size, same as the GitHub banner
const ROWS = 4; // rows of boxes on normal desktop screens
const DURATION = 3000; // everything locked by here (3s)
const FILL_MS = 500; // how long one box takes to fill in
const MAX_BOXES = 26; // most boxes ever shown (change this to show more/less)

// mix of lime, dark/moody and warm sunset
const PALETTE = [
  // lime
  "#a3e635", "#d9f99d", "#65a30d", "#bef264",
  // dark and moody
  "#0a0a0a", "#27272a", "#52525b", "#a1a1aa",
  // warm sunset
  "#f43f5e", "#fb923c", "#facc15", "#a78bfa", "#fda4af", "#fde68a",
];

type Cell = {
  target: string | null; // final solid color (null = stays empty)
  delay: number; // ms after start when this box begins filling
  order: number[]; // shuffled mini-square fill order
};

function rand<T>(a: T[]): T {
  return a[Math.floor(Math.random() * a.length)];
}

function shuffle(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// dense zone lands somewhere new on every load
const makeDens = () => {
  const focus = Math.random(); // where the dense zone is centered (0..1)
  const spread = 0.3 + Math.random() * 0.3; // how wide it is
  return (x: number) => {
    const fall = Math.max(0, 1 - Math.abs(x - focus) / spread);
    return 0.05 + fall * 0.8;
  };
};

const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export default function PixelField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    let cols = 0;
    let size = 0;
    let w = 0;
    let h = 0;
    let raf = 0;
    let start = 0; // timestamp of the current animation run (0 = not set yet)
    let startedAt = 0; // when the very first run began
    let lastWidth = 0;
    let cells: Cell[] = [];

    const setup = () => {
      w = parent.clientWidth;
      cols = Math.max(4, Math.round(w / TARGET_SIZE));
      size = w / cols;
      // fewer rows on short screens so the whole page fits without scrolling
      const vh = window.innerHeight;
      const rows =
        w < 600 ? (vh < 780 ? 2 : 3) : vh < 760 ? 3 : ROWS;
      h = size * rows;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.style.height = `${h}px`;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const dens = makeDens();
      cells = Array.from({ length: cols * rows }, (_, i) => {
        const col = i % cols;
        const x = col / Math.max(cols - 1, 1);
        const target =
          Math.random() < dens(x) ? rand(PALETTE) : null;
        // left to right wave + a bit of randomness, all done by DURATION
        const maxDelay = DURATION - FILL_MS;
        const delay = Math.min(
          x * maxDelay * 0.6 + Math.random() * maxDelay * 0.4,
          maxDelay,
        );
        return { target, delay, order: shuffle(SUB * SUB) };
      });
      // keep only MAX_BOXES, picked at random from the ones that got a color
      const filledIdx = cells
        .map((c, i) => (c.target ? i : -1))
        .filter((i) => i >= 0);
      shuffle(filledIdx.length)
        .slice(MAX_BOXES)
        .forEach((k) => {
          cells[filledIdx[k]].target = null;
        });
      lastWidth = w;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const m = size / SUB;
      const n = SUB * SUB;

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (!cell.target) continue;

        const r = Math.min(Math.max((t - cell.delay) / FILL_MS, 0), 1);
        if (r <= 0) continue;

        const x0 = (i % cols) * size;
        const y0 = Math.floor(i / cols) * size;
        ctx.fillStyle = cell.target;

        if (r >= 1) {
          ctx.fillRect(x0, y0, size, size);
          continue;
        }

        // little bounce while it fills
        const s = easeOutBack(r);
        ctx.save();
        ctx.translate(x0 + size / 2, y0 + size / 2);
        ctx.scale(s, s);
        ctx.translate(-(x0 + size / 2), -(y0 + size / 2));

        const filled = Math.ceil(r * n);
        for (let k = 0; k < filled; k++) {
          const idx = cell.order[k];
          ctx.fillRect(
            x0 + (idx % SUB) * m,
            y0 + Math.floor(idx / SUB) * m,
            m + 0.5,
            m + 0.5,
          );
        }
        ctx.restore();
      }
    };

    const loop = (now: number) => {
      if (!start) start = now;
      const t = now - start;
      draw(t);
      // locked after DURATION, so stop the loop
      if (t < DURATION + 100) raf = requestAnimationFrame(loop);
    };

    startedAt = performance.now();
    setup();
    if (reduce) {
      draw(1e9);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(() => {
      if (parent.clientWidth === lastWidth) return;
      cancelAnimationFrame(raf);
      setup();
      if (reduce || performance.now() - startedAt > DURATION + 100) {
        // animation already finished (or motion is off): just redraw final state
        draw(1e9);
      } else {
        // resize happened mid-animation: restart it instead of jumping to the end
        start = 0;
        raf = requestAnimationFrame(loop);
      }
    });
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="field-canvas" aria-hidden="true" />;
}
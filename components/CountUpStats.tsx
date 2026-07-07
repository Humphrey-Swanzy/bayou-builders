"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function parseStat(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: value, decimals: 0 };
  const num = parseFloat(match[1]);
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  return { target: num, suffix: match[2], decimals };
}

export default function CountUpStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const startTime = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <div
      ref={ref}
      className="mt-16 grid grid-cols-2 gap-6 rounded-2xl bg-charcoal-deep p-8 md:grid-cols-4 md:p-10"
    >
      {stats.map((stat) => {
        const { target, suffix, decimals } = parseStat(stat.value);
        const current = (target * progress).toFixed(decimals);
        return (
          <div key={stat.label}>
            <p className="text-3xl font-semibold tabular-nums text-brand md:text-4xl">
              {target === 0 ? stat.value : `${current}${suffix}`}
            </p>
            <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
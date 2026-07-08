"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services, estimator } from "@/lib/data";

function formatPrice(value: number) {
  return `$${(Math.round(value / 500) * 500).toLocaleString("en-US")}`;
}

export default function CostEstimator() {
  const [slug, setSlug] = useState(services[0].slug);
  const [sizeId, setSizeId] = useState(estimator.sizes[1].id);
  const [finishId, setFinishId] = useState(estimator.finishes[0].id);

  const service = services.find((s) => s.slug === slug)!;
  const size = estimator.sizes.find((s) => s.id === sizeId)!;
  const finish = estimator.finishes.find((f) => f.id === finishId)!;

  const targetMin = service.costRange.min * size.multiplier * finish.multiplier;
  const targetMax = service.costRange.max * size.multiplier * finish.multiplier;

  const [display, setDisplay] = useState({ min: targetMin, max: targetMax });
  const displayRef = useRef({ min: targetMin, max: targetMax });

  useEffect(() => {
    const from = { ...displayRef.current };
    if (from.min === targetMin && from.max === targetMax) return;
    const duration = 700;
    const startTime = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = {
        min: from.min + (targetMin - from.min) * eased,
        max: from.max + (targetMax - from.max) * eased,
      };
      displayRef.current = next;
      setDisplay(next);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [targetMin, targetMax]);

  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="space-y-8 lg:col-span-3">
        <div>
          <p className="text-sm font-semibold text-charcoal">
            {estimator.projectLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setSlug(s.slug)}
                aria-pressed={slug === s.slug}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  slug === s.slug
                    ? "bg-brand text-brand-text"
                    : "bg-white text-gray-600 hover:text-charcoal"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-charcoal">
            {estimator.sizeLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {estimator.sizes.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSizeId(s.id)}
                aria-pressed={sizeId === s.id}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  sizeId === s.id
                    ? "bg-brand text-brand-text"
                    : "bg-white text-gray-600 hover:text-charcoal"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">{size.hint}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-charcoal">
            {estimator.finishLabel}
          </p>
          <div className="mt-3 inline-flex rounded-full bg-white p-1">
            {estimator.finishes.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFinishId(f.id)}
                aria-pressed={finishId === f.id}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  finishId === f.id
                    ? "bg-brand text-brand-text"
                    : "text-gray-600 hover:text-charcoal"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">{finish.hint}</p>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="rounded-xl border border-gray-200 bg-white p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-dark">
            {estimator.resultLabel}
          </p>
          <p className="mt-4 text-3xl font-semibold tabular-nums text-charcoal md:text-4xl">
            {formatPrice(display.min)} &ndash; {formatPrice(display.max)}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {service.title} &middot; {size.label} &middot; {finish.label}{" "}
            finish
          </p>
          <Link
            href={estimator.cta.href}
            className="mt-8 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-brand-text transition hover:bg-brand-dark hover:text-white"
          >
            {estimator.cta.label}
          </Link>
          <p className="mt-6 text-xs leading-relaxed text-gray-500">
            {estimator.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}

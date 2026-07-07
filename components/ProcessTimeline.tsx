"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { process } from "@/lib/data";

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(() =>
    process.map(() => false)
  );

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const trigger = window.innerHeight * 0.65;
      const progress = Math.min(Math.max(trigger - rect.top, 0), rect.height);

      setLineHeight(progress);
      setVisible(
        stepRefs.current.map((el) => !!el && el.offsetTop + 24 <= progress)
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="mt-14 grid gap-14 md:grid-cols-2">
      <div ref={containerRef} className="relative ml-4 md:ml-6">
        <div className="absolute bottom-0 left-0 top-0 w-px bg-white/15" />
        <div
          className="absolute left-0 top-0 w-px bg-brand"
          style={{
            height: `${lineHeight}px`,
            boxShadow: "0 0 12px rgba(239,159,39,0.7)",
            transition: "height 0.15s linear",
          }}
        />
        {process.map((item, i) => (
          <div
            key={item.step}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className={`relative pl-10 transition-all duration-500 ease-out md:pl-14 ${
              i === process.length - 1 ? "" : "pb-14"
            } ${
              visible[i]
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-40"
            }`}
          >
            <span
              className={`absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-500 md:-left-6 md:h-12 md:w-12 ${
                visible[i]
                  ? "bg-brand text-brand-text shadow-[0_0_16px_rgba(239,159,39,0.5)]"
                  : "bg-white/10 text-gray-500"
              }`}
            >
              {item.step}
            </span>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 max-w-xl leading-relaxed text-gray-400">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="relative hidden md:block">
        <div className="sticky top-28 h-[420px]">
          <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-xl border-2 border-brand" />
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
              alt="Project team reviewing plans together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
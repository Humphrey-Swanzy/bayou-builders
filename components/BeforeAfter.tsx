"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  before: string;
  after: string;
  alt: string;
};

export default function BeforeAfter({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);

  return (
    <div className="group relative h-80 select-none overflow-hidden rounded-xl md:h-[480px]">
      <Image
        src={before}
        alt={`${alt}, before renovation`}
        fill
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <Image
          src={after}
          alt={`${alt}, after renovation`}
          fill
          className="object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute bottom-0 top-0 z-10 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-charcoal shadow-lg">
          ↔
        </span>
      </div>

      <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-md bg-charcoal/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-text">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
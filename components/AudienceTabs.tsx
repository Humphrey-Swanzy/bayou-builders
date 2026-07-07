"use client";

import { useState } from "react";
import { audiences } from "@/lib/data";

export default function AudienceTabs() {
  const [active, setActive] = useState(audiences[0].id);
  const current = audiences.find((a) => a.id === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {audiences.map((a) => (
          <button
            key={a.id}
            onClick={() => setActive(a.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === a.id
                ? "bg-brand text-brand-text"
                : "bg-white text-gray-600 hover:text-charcoal"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-charcoal">
            {current.title}
          </h3>
          <p className="mt-4 leading-relaxed text-gray-600">{current.text}</p>
        </div>
        <ul className="space-y-4">
          {current.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-lg bg-white p-4 text-sm font-medium text-charcoal"
            >
              <span className="mt-0.5 text-brand-dark">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
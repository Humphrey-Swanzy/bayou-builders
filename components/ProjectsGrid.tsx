"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";

const categories = ["All", "Kitchens", "Roofing", "Additions", "Bathrooms"] as const;

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? projects.length
              : projects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === cat
                  ? "bg-charcoal text-white"
                  : "bg-white text-gray-600 hover:text-charcoal"
              }`}
            >
              {cat}
              <span
                className={`ml-2 text-xs ${
                  active === cat ? "text-brand" : "text-gray-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="group animate-[fadeIn_0.4s_ease-out] overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-brand-dark"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-md bg-charcoal/85 px-3 py-1.5 text-xs font-semibold text-white">
                {project.category}
              </span>
              <span className="absolute right-4 top-4 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-brand-text">
                {project.year}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-charcoal">
                {project.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-brand-dark">
                {project.location} · {project.duration}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
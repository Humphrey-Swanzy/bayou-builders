"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gallery } from "@/lib/data";

const sizeClasses: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  small: "",
};

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % gallery.length);
      if (e.key === "ArrowLeft")
        setOpen((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="grid auto-rows-[190px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {gallery.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-xl text-left ${sizeClasses[item.size]}`}
            aria-label={`View ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                {item.category}
              </p>
              <p className="mt-1 text-sm font-medium text-white">{item.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[open].src}
              alt={gallery[open].alt}
              fill
              sizes="100vw"
              className="rounded-lg object-contain"
            />
            <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-between text-sm text-gray-300">
              <p>
                <span className="font-semibold text-brand">
                  {gallery[open].category}
                </span>{" "}
                · {gallery[open].alt}
              </p>
              <p className="text-gray-500">
                {open + 1} / {gallery.length}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + gallery.length) % gallery.length);
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-brand hover:text-brand md:left-8"
          >
            ←
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % gallery.length);
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-brand hover:text-brand md:right-8"
          >
            →
          </button>
          <button
            onClick={() => setOpen(null)}
            aria-label="Close gallery"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-brand hover:text-brand"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
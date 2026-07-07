"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";

const AUTOPLAY_MS = 6000;

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = testimonials[index];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i: number) => {
    setIndex((i + testimonials.length) % testimonials.length);
    setPaused(true);
  };

  return (
    <div
      className="grid gap-12 md:grid-cols-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="md:col-span-8">
        <blockquote
          key={index}
          className="animate-[fadeIn_0.5s_ease-out] text-2xl font-medium leading-snug text-charcoal md:text-4xl md:leading-snug"
        >
          {t.quote}
        </blockquote>

        <div className="mt-10 flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-brand">
            <Image
              src={t.image}
              alt={t.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-charcoal">{t.name}</p>
            <p className="text-sm text-gray-500">{t.location}</p>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-5">
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/30 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
          >
            ←
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/30 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
          >
            →
          </button>
          <div className="ml-2 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-brand-dark" : "w-2 bg-charcoal/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:col-span-4 md:block">
        <div className="flex h-full flex-col justify-center gap-6 border-l border-charcoal/10 pl-10">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => goTo(i)}
              className={`flex items-center gap-3 text-left transition ${
                i === index ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <div
                className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 ${
                  i === index ? "border-brand" : "border-transparent"
                }`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
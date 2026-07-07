import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/data";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContourLines from "@/components/ContourLines";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse completed kitchen remodels, roofing, additions, and bathroom renovations by Bayou Builders across Greater New Orleans.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=1600&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.15]"
        />
        <ContourLines stroke="#ffffff" className="opacity-[0.04]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            Our Projects
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            The work speaks. Here's a sample.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            A selection from 450+ completed projects across Greater New
            Orleans. Every one delivered on a fixed quote.
          </p>
        </div>
      </section>

      {/* Filterable grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <ProjectsGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Want yours on this page?
        </h2>
        <p className="mt-3 text-gray-400">
          Free on-site quotes across Greater New Orleans. Call {company.phone}.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-brand px-7 py-3 font-semibold text-brand-text transition hover:bg-brand-dark hover:text-white"
        >
          Get a Free Quote
        </Link>
      </section>
    </>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, company } from "@/lib/data";
import ContourLines from "@/components/ContourLines";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kitchen remodeling, roofing, home additions, and bathroom renovation across Greater New Orleans. Licensed, insured, fixed quotes.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.15]"
        />
        <ContourLines stroke="#ffffff" className="opacity-[0.04]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 md:pt-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            Our Services
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            One licensed crew for everything your home needs
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Every project gets a fixed written quote, a dedicated project lead,
            and our 2-year workmanship warranty.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {services.map((service) => (
              
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="flex items-center justify-between rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-brand hover:text-brand sm:justify-start sm:gap-2 sm:py-2.5"
              >
                {service.title} <span aria-hidden="true">↓</span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-charcoal-deep/80">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-3">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                ✓
              </span>
              Licensed & insured in Louisiana
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                ✓
              </span>
              Fixed written quotes, no surprises
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                ✓
              </span>
              2-year workmanship warranty
            </div>
          </div>
        </div>
      </section>

      {/* Services listing */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl space-y-8 px-4 py-20">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              id={service.slug}
              href={`/services/${service.slug}`}
              className={`group grid scroll-mt-24 items-center gap-8 overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-brand-dark md:grid-cols-2 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden md:h-80 md:[direction:ltr]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 md:[direction:ltr]">
                <h2 className="text-2xl font-semibold text-charcoal md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <p className="mt-6 font-semibold text-brand-dark transition group-hover:translate-x-1">
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Not sure which service you need?
        </h2>
        <p className="mt-3 text-gray-400">
          Call {company.phone} and describe the problem. We'll point you right.
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
import Link from "next/link";
import Image from "next/image";
import { services, company, stats } from "@/lib/data";
import AudienceTabs from "@/components/AudienceTabs";
import TestimonialSlider from "@/components/TestimonialSlider";
import QuoteForm from "@/components/QuoteForm";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContourLines from "@/components/ContourLines";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.14]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
              Licensed General Contractor · New Orleans
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Built right.
              <br />
              Built to last.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-400">
              Kitchens, roofing, additions, and full renovations across Greater
              New Orleans since 2009.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-brand px-6 py-3 font-semibold text-brand-text transition hover:bg-brand-dark hover:text-white"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/projects"
                className="rounded-md border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-white"
              >
                See Our Work
              </Link>
            </div>
          </div>
          <div className="relative h-80 md:h-[480px]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-brand md:translate-x-5 md:translate-y-5" />
            <div className="relative h-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
                alt="Contractor framing a house interior"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-t border-white/10 bg-charcoal-deep">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-brand">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-dark">
                What We Do
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-charcoal md:text-4xl">
                Services
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-semibold text-brand-dark hover:text-charcoal md:block"
            >
              All services →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-brand-dark"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {service.short}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-brand-dark">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Audience tabs */}
      <section className="relative overflow-hidden bg-cream pb-24">
        <ContourLines stroke="#ba7517" className="opacity-[0.045]" />
        <div className="relative mx-auto max-w-6xl px-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-dark">
            Who We Work With
          </p>
          <h2 className="mt-2 max-w-lg text-3xl font-semibold text-charcoal md:text-4xl">
            Built around how you build
          </h2>
          <div className="mt-10">
            <AudienceTabs />
          </div>
        </div>
      </section>

      {/* Process timeline, scroll-animated */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            From first call to final walkthrough
          </h2>
          <ProcessTimeline />
        </div>
      </section>

      {/* Featured project */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
                Featured Project
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                Garden District kitchen, 2026
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm font-semibold text-brand hover:text-white md:block"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <BeforeAfter
                before="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80"
                after="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
                alt="Garden District kitchen"
              />
              <p className="mt-3 text-center text-xs text-gray-500">
                Drag the handle to compare before and after
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="leading-relaxed text-gray-400">
                Full gut renovation of a 1920s shotgun kitchen. Custom
                cabinetry, quartz counters, rewired and re-plumbed, delivered
                two days ahead of schedule.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Custom cabinetry",
                  "Quartz counters",
                  "Full rewire",
                  "New plumbing",
                  "Lighting design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
                <div className="flex justify-between py-4 text-sm">
                  <dt className="text-gray-500">Location</dt>
                  <dd className="font-semibold text-white">
                    Garden District, New Orleans
                  </dd>
                </div>
                <div className="flex justify-between py-4 text-sm">
                  <dt className="text-gray-500">Duration</dt>
                  <dd className="font-semibold text-white">5 weeks</dd>
                </div>
                <div className="flex justify-between py-4 text-sm">
                  <dt className="text-gray-500">Result</dt>
                  <dd className="font-semibold text-white">
                    2 days ahead of schedule
                  </dd>
                </div>
              </dl>

              <figure className="mt-8 rounded-xl border-l-4 border-brand bg-white/5 p-5">
                <blockquote className="text-sm leading-relaxed text-gray-300">
                  "They gutted and rebuilt our kitchen in five weeks flat. The
                  quote never moved."
                </blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-brand">
                  Marie Thibodeaux, homeowner
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

     {/* Testimonials, cream editorial with bleeding quote glyph */}
      <section className="relative overflow-hidden bg-cream">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-24 select-none font-serif text-[26rem] leading-none text-brand opacity-[0.16] md:-left-16 md:text-[34rem]"
        >
          &ldquo;
        </span>
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-dark">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-charcoal md:text-4xl">
            What homeowners say
          </h2>
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Gallery, continues the cream spread */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 pb-24">
          <div className="flex items-end justify-between border-t border-charcoal/10 pt-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-dark">
                Recent Work
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-charcoal md:text-4xl">
                From our job sites
              </h2>
            </div>
            <p className="hidden text-sm text-gray-500 md:block">
              Click any photo to view
            </p>
          </div>
          <div className="mt-10">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Review invite band, stays dark */}
      <section className="bg-charcoal-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-14 text-center">
          <p className="text-sm text-gray-400">
            Worked with us? We'd love to hear how it went.
          </p>
          <a
            href={company.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand hover:text-brand"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-brand"
              aria-hidden="true"
            >
              <path d="M12 2l2.94 5.95 6.57.96-4.75 4.63 1.12 6.54L12 17l-5.88 3.08 1.12-6.54L2.5 8.91l6.56-.96L12 2z" />
            </svg>
            Leave a review
          </a>
        </div>
      </section>

      {/* Conversion: form over photographic background */}
      <section className="relative">
        <Image
          src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=1600&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/90" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
              Start Today
            </p>
            <h2 className="mt-2 text-4xl font-semibold leading-tight text-white">
              Tell us what you're building
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-gray-300">
              Free on-site consultations across Greater New Orleans. Or skip
              the form and call us at{" "}
              <a
                href={`tel:${company.phone}`}
                className="font-semibold text-brand"
              >
                {company.phone}
              </a>
              .
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="text-brand">✓</span> Response within one
                business day
              </li>
              <li className="flex gap-3">
                <span className="text-brand">✓</span> Fixed written quotes, no
                surprises
              </li>
              <li className="flex gap-3">
                <span className="text-brand">✓</span> 2-year workmanship
                warranty
              </li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
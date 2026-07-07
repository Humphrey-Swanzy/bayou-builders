import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { company, team, values } from "@/lib/data";
import ContourLines from "@/components/ContourLines";
import CountUpStats from "@/components/CountUpStats";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bayou Builders is a licensed New Orleans general contractor founded in 2009. Meet the team behind 450+ completed projects across Greater New Orleans.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=1600&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.13]"
        />
        <ContourLines stroke="#ffffff" className="opacity-[0.04]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
              About Us
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Seventeen years of building New Orleans
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-400">
              {company.tagline}. Family-run, fully licensed, and still small
              enough that the founder knows every job site by name.
            </p>
          </div>
          <div className="relative h-80 lg:h-[420px]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-brand" />
            <div className="relative h-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
                alt="The Bayou Builders crew on a job site"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story + stats */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-dark">
                Our Story
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-charcoal md:text-4xl">
                Started with a truck and a promise
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-gray-600">
              <p>
                Ray Fontenot founded Bayou Builders in 2009 with one truck, one
                crew, and a promise borrowed from his grandfather: the quote is
                the price, and the work outlives the warranty.
              </p>
              <p>
                Seventeen years later we've completed more than 450 projects
                across Greater New Orleans, from shotgun-house kitchens in the
                Bywater to full second-story additions in Metairie. The truck
                count has grown. The promise hasn't changed.
              </p>
              <p>
                We're still family-run, still answering our own phones, and
                still the crew your neighbors mention when you ask who did
                their roof.
              </p>
            </div>
          </div>

          <CountUpStats />
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.20]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
        <ContourLines stroke="#ffffff" className="opacity-[0.04]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            How We Work
          </p>
          <h2 className="mt-2 max-w-lg text-3xl font-semibold text-white md:text-4xl">
            Three promises on every job
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <div key={value.title}>
                <p className="text-4xl font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-400">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-dark">
                The Crew
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-charcoal md:text-4xl">
                The people who show up
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-square lg:aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-charcoal">{member.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-brand-dark">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 text-center sm:grid-cols-3">
          <div>
            <p className="font-semibold text-charcoal">
              Licensed LA General Contractor
            </p>
            <p className="mt-1 text-sm text-gray-500">License #12345</p>
          </div>
          <div>
            <p className="font-semibold text-charcoal">Fully Insured</p>
            <p className="mt-1 text-sm text-gray-500">
              Liability & workers' compensation
            </p>
          </div>
          <div>
            <p className="font-semibold text-charcoal">BBB Accredited</p>
            <p className="mt-1 text-sm text-gray-500">A+ rating since 2014</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Work with a crew that keeps its promises
        </h2>
        <p className="mt-3 text-gray-400">
          Free on-site quotes. Call {company.phone}.
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
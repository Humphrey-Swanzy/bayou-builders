import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, company } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in New Orleans`,
    description: service.short,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="relative bg-charcoal">
        <Image
          src={service.image}
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>{" "}
            / {service.title}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            {service.description}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-md bg-brand px-7 py-3 font-semibold text-brand-text transition hover:bg-brand-dark hover:text-white"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-semibold text-charcoal">
            What's included
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5"
              >
                <span className="mt-0.5 text-brand-dark">✓</span>
                <p className="text-sm font-medium text-charcoal">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h2 className="text-3xl font-semibold text-charcoal">
            Common questions
          </h2>
          <div className="mt-8 divide-y divide-gray-200">
            {service.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-charcoal">
                  {item.q}
                  <span className="ml-4 text-brand-dark transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-2xl font-semibold text-charcoal">
            Other services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-brand-dark"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-charcoal">
                    {s.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Ready to talk about your {service.title.toLowerCase()}?
        </h2>
        <p className="mt-3 text-gray-400">
          Free on-site quotes. Call {company.phone}.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-brand px-7 py-3 font-semibold text-brand-text transition hover:bg-brand-dark hover:text-white"
        >
          Request a Quote
        </Link>
      </section>
    </>
  );
}
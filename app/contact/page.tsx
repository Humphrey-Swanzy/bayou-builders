import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/lib/data";
import QuoteForm from "@/components/QuoteForm";
import ContourLines from "@/components/ContourLines";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact Us | Free Quotes",
  description:
    "Request a free on-site quote from Bayou Builders. Serving Greater New Orleans. Call (504) 555-0147 or send us your project details.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.15]"
        />
        <ContourLines stroke="#ffffff" className="opacity-[0.04]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-32 pt-12 md:pt-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Let's talk about your project
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-400">
              Send us the details and we'll call you within one business day,
              or skip the form entirely and call us now.
            </p>
            <div className="mt-10 space-y-4">

             <a 
                href={`tel:${company.phone}`}
                className="group flex items-center gap-4 font-semibold text-white transition hover:text-brand"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-brand transition group-hover:border-brand/50 group-hover:bg-brand/10">
                  <Icon name="phone" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-gray-500">
                    Call us
                  </span>
                  {company.phone}
                </span>
              </a>
              
              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-4 font-medium text-gray-200 transition hover:text-brand"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-brand transition group-hover:border-brand/50 group-hover:bg-brand/10">
                  <Icon name="mail" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-gray-500">
                    Email us
                  </span>
                  {company.email}
                </span>
              </a>
              <p className="group flex items-center gap-4 font-medium text-gray-200">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-brand">
                  <Icon name="map-pin" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-gray-500">
                    Visit us
                  </span>
                  {company.address}
                </span>
              </p>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Cream section */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 pb-20 lg:grid-cols-2">
          {/* Unified info card */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-0 lg:mt-20">
            <div className="relative h-56">
              <Image
                src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=1200&q=80"
                alt="New Orleans streetscape near our Magazine Street office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-md bg-charcoal/85 px-4 py-2.5">
                <p className="text-sm font-semibold text-white">
                  Serving all of Greater New Orleans
                </p>
                <p className="text-xs text-gray-400">
                  Metairie · Kenner · Gretna · Slidell
                </p>
              </div>
            </div>
            <div className="grid gap-6 p-8 text-sm sm:grid-cols-2">
              <div>
                <p className="font-semibold text-gray-500">Hours</p>
                <p className="mt-1 font-medium leading-relaxed text-charcoal">
                  Mon to Fri: 7am to 6pm
                  <br />
                  Sat: 8am to 2pm
                  <br />
                  Sun: Closed
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">Office</p>
                <p className="mt-1 font-medium leading-relaxed text-charcoal">
                  {company.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-gray-100 bg-brand/10 p-6 text-sm">
              <span className="mt-0.5 text-brand-dark">⚠</span>
              <p className="text-gray-700">
                <span className="font-semibold text-brand-dark">
                  Storm emergency?
                </span>{" "}
                We answer 24/7 for emergency tarping and storm damage across
                Greater New Orleans.
              </p>
            </div>
          </div>

          {/* Form, overlapping the hero */}
          <div className="relative z-10 -mt-36 lg:-mt-80">
            <QuoteForm />

            <div className="group mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    Find us on Magazine Street
                  </p>
                  <p className="text-xs text-gray-500">{company.address}</p>
                </div>
                
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    company.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-gray-300 px-4 py-2 text-xs font-semibold text-charcoal transition hover:border-brand-dark hover:text-brand-dark"
                >
                  Get directions ↗
                </a>
              </div>
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  company.address
                )}&output=embed`}
                title="Map showing the Bayou Builders office on Magazine Street, New Orleans"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 grayscale transition duration-500 group-hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
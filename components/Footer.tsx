import Link from "next/link";
import Image from "next/image";
import { company, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative text-gray-300">
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/95" />
      <div className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-16">
          <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 md:flex-row md:items-center">
            <div>
              <Link
                href="/"
                className="text-2xl font-semibold text-white transition hover:text-gray-300"
              >
                BAYOU<span className="text-brand">BUILDERS</span>
              </Link>
              <p className="mt-2 text-sm text-gray-400">{company.tagline}</p>
            </div>
            <a
              href={`tel:${company.phone}`}
              className="rounded-md bg-brand px-6 py-3 font-semibold text-brand-text transition hover:bg-brand-dark hover:text-white"
            >
              Call {company.phone}
            </a>
          </div>

          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Services
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-gray-400 transition hover:text-brand"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-gray-400 transition hover:text-brand">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 transition hover:text-brand">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 transition hover:text-brand">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 transition hover:text-brand">
                    Contact
                  </Link>
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Visit us
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {company.address}
              </p>
              <p className="mt-3 text-sm text-gray-400">Call us at {company.phone}</p>
              <p className="mt-3 text-sm text-gray-400">{company.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Hours
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Monday to Friday: 7am to 6pm
                <br />
                Saturday: 8am to 2pm
                <br />
                Sunday: Closed
              </p>
              <p className="mt-3 text-sm text-brand">
                24/7 emergency storm response
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-2 border-t border-white/10 py-6 text-xs text-gray-500 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} {company.name}. Licensed Louisiana
              general contractor.
            </p>
            <p>LA License #12345 · Fully insured</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
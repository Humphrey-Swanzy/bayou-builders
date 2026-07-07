import Link from "next/link";
import { company } from "@/lib/data";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-charcoal">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-5">
        <Link
          href="/"
          className="justify-self-start text-lg font-semibold tracking-wide text-white"
        >
          BAYOU<span className="text-brand">BUILDERS</span>
        </Link>
        <nav className="flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 text-[15px] font-medium text-gray-300 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="group/cta relative inline-block justify-self-end">
          <a
            href={`tel:${company.phone}`}
            className="relative z-10 inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 group-hover/cta:text-brand"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:rotate-12 group-hover/cta:scale-110"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {company.phone}
          </a>
          <svg
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            className="absolute -inset-1.5 h-[calc(100%+12px)] w-[calc(100%+12px)]"
            aria-hidden="true"
          >
            <path
              pathLength={1}
              className="marker-path"
              d="M14,30 C12,11 55,5 100,6 C150,7 190,12 188,30 C186,50 145,55 98,54 C52,53 17,49 15,32 C14,26 20,18 32,14"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>
        </span>
      </div>
    </header>
  );
}
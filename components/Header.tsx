"use client";

import { useState } from "react";
import Link from "next/link";
import { company } from "@/lib/data";
import Icon from "@/components/Icon";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:grid lg:grid-cols-3 lg:py-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-lg font-semibold tracking-wide text-white lg:justify-self-start"
        >
          BAYOU<span className="text-brand">BUILDERS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center justify-center gap-8 lg:flex">
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

        {/* Desktop phone CTA with marker circle */}
        <span className="group/cta relative hidden lg:inline-block lg:justify-self-end">
          
          <a
            href={`tel:${company.phone}`}
            className="relative z-10 inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 group-hover/cta:text-brand"
          >
            <Icon name="phone" className="h-4 w-4 transition-transform duration-300 group-hover/cta:rotate-12 group-hover/cta:scale-110" />
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

        {/* Mobile: compact call button + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          
          <a
            href={`tel:${company.phone}`}
            aria-label={`Call ${company.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-text"
          >
            <Icon name="phone" className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-white/15"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="border-t border-white/10 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3.5 text-base font-medium text-gray-200 transition hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          
          <a
            href={`tel:${company.phone}`}
            className="mt-4 block rounded-md bg-brand py-3 text-center font-semibold text-brand-text"
          >
            Call {company.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
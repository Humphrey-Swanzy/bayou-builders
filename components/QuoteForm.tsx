"use client";

import { useState } from "react";
import { services } from "@/lib/data";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-xl">
        <p className="text-4xl">✓</p>
        <h3 className="mt-4 text-2xl font-semibold text-charcoal">
          Request received
        </h3>
        <p className="mt-2 text-gray-600">
          We'll call you within one business day to schedule your free
          consultation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 shadow-xl md:p-10"
    >
      <h3 className="text-2xl font-semibold text-charcoal">
        Get your free quote
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        No obligation. We respond within one business day.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Your name"
          className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-brand-dark"
        />
        <input
          type="tel"
          required
          placeholder="Phone number"
          className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-brand-dark"
        />
      </div>
      <select
        required
        defaultValue=""
        className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-brand-dark"
      >
        <option value="" disabled>
          What do you need done?
        </option>
        {services.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.title}
          </option>
        ))}
        <option value="other">Something else</option>
      </select>
      <textarea
        rows={4}
        placeholder="Tell us about your project (optional)"
        className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-brand-dark"
      />
      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-brand py-3.5 font-semibold text-brand-text transition hover:bg-brand-dark hover:text-white"
      >
        Request my free quote
      </button>
    </form>
  );
}
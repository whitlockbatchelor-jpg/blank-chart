"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { Idea } from "@/lib/ideas";

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    New: "border-sea/40 text-sea bg-sea/5",
    "Under Review": "border-copper/40 text-copper bg-copper/5",
    "In Development": "border-rust/60 text-rust bg-rust/5",
    "Now a Keel Ridge Destination": "border-snow/30 text-snow bg-snow/5",
  };
  return (
    <span
      className={`inline-block border px-4 py-1.5 font-mono text-[10px] font-light tracking-[2px] uppercase ${
        colors[status] || "border-white/20 text-cream/50"
      }`}
    >
      {status}
    </span>
  );
}

export function IdeaPageClient({ idea }: { idea: Idea }) {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <Link
              href="/#ideas"
              className="inline-flex items-center gap-2 font-mono text-[10px] font-light tracking-[3px] uppercase text-copper/70 transition-colors hover:text-copper"
            >
              &larr; Back to Ideas
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="font-mono text-[10px] font-light tracking-[3px] uppercase text-sea">
                {idea.region}
              </span>
              <StatusBadge status={idea.status} />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="mt-6 font-display text-4xl font-normal text-snow sm:text-5xl md:text-6xl">
              {idea.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-3 font-body text-lg font-light tracking-[1px] uppercase text-copper/70">
              {idea.destination}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Pitch */}
          <FadeIn>
            <div className="border-t border-copper/20 pt-8">
              <span className="font-mono text-[10px] font-light tracking-[3px] uppercase text-gray">
                The Pitch
              </span>
              <p className="mt-4 font-display text-xl font-normal leading-relaxed text-cream/90 sm:text-2xl">
                {idea.pitch}
              </p>
            </div>
          </FadeIn>

          {/* Tags */}
          <FadeIn delay={0.1}>
            <div className="mt-12 border-t border-white/5 pt-8">
              <span className="font-mono text-[10px] font-light tracking-[3px] uppercase text-gray">
                Activities
              </span>
              <div className="mt-4 flex flex-wrap gap-3">
                {idea.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-copper/20 bg-copper/5 px-4 py-2 font-mono text-[10px] font-light tracking-[2px] uppercase text-copper/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Submitter */}
          <FadeIn delay={0.2}>
            <div className="mt-12 border-t border-white/5 pt-8">
              <span className="font-mono text-[10px] font-light tracking-[3px] uppercase text-gray">
                Submitted By
              </span>
              <p className="mt-4 font-body text-base font-light text-snow">
                {idea.submitter}
              </p>
              <p className="mt-1 font-body text-sm font-light text-cream/50">
                {idea.location}
              </p>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <div className="mt-16 text-center">
              <p className="font-display text-xl font-normal text-cream/80 sm:text-2xl">
                Inspired? Submit your own idea.
              </p>
              <Link
                href="/#submit"
                className="mt-6 inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
              >
                Submit an Idea
                <span className="text-sm">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

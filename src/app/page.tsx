"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { IdeaChat } from "@/components/IdeaChat";
import { ideas } from "@/lib/ideas";

interface IdeaFormData {
  name: string;
  location: string;
  destination: string;
  country: string;
  pitch: string;
  activities: string;
  beenThere: string;
  notes: string;
}

const activities = [
  "Kayak",
  "Sailing",
  "Trek",
  "Mountaineering",
  "Ski",
  "MTB",
  "Surf",
  "Cultural",
  "Other",
];

const beenThereOptions = [
  "Yes, I've been",
  "No, but I've researched it deeply",
  "It's a dream — I just know it's special",
];

const steps = [
  {
    number: "01",
    title: "Submit",
    description:
      "You pitch a destination — a place you've been, a route you've dreamed about, a corner of the world that deserves a proper expedition.",
  },
  {
    number: "02",
    title: "Curate",
    description:
      "We review every idea. Research the logistics, the access, the season. Talk to local guides. Figure out if this thing can actually work.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The best ideas become real Keel Ridge destinations — bespoke adventures designed from scratch, guided by locals, built for the community.",
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    New: "border-sea/40 text-sea",
    "Under Review": "border-copper/40 text-copper",
    "In Development": "border-rust/60 text-rust",
    "Now a Keel Ridge Destination": "border-snow/30 text-snow",
  };
  return (
    <span
      className={`inline-block border px-3 py-1 font-mono text-[10px] font-light tracking-[2px] uppercase ${
        colors[status] || "border-white/20 text-cream/50"
      }`}
    >
      {status}
    </span>
  );
}

export default function HomePage() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<IdeaFormData | null>(null);

  const toggleActivity = (activity: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((a) => a !== activity)
        : [...prev, activity]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("activities", selectedActivities.join(", "));

    // Capture form data for the chat
    const capturedData: IdeaFormData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      location: (form.elements.namedItem("location") as HTMLInputElement)?.value || "",
      destination: (form.elements.namedItem("destination") as HTMLInputElement)?.value || "",
      country: (form.elements.namedItem("country") as HTMLInputElement)?.value || "",
      pitch: (form.elements.namedItem("pitch") as HTMLTextAreaElement)?.value || "",
      activities: selectedActivities.join(", "),
      beenThere: (form.elements.namedItem("been_there") as HTMLSelectElement)?.value || "",
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement)?.value || "",
    };

    // Send to Formspree in the background
    fetch("https://formspree.io/f/xlgwpkqg", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    }).catch(() => {});

    setSubmittedData(capturedData);
    setFormSubmitted(true);
    setSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (formSubmitted && submittedData) {
    return (
      <>
        {/* Chat Hero */}
        <section className="relative flex min-h-[40vh] items-end overflow-hidden pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/40 to-ink" />
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <FadeIn>
              <span className="font-mono text-[10px] font-light tracking-[4px] uppercase text-copper">
                Idea Submitted
              </span>
              <h1 className="mt-4 font-display text-3xl font-normal text-snow sm:text-4xl md:text-5xl">
                Let&rsquo;s explore {submittedData.destination}, {submittedData.name.split(" ")[0]}.
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="bg-ink py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-6">
            <FadeIn>
              <IdeaChat formData={submittedData} />
            </FadeIn>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-deep to-ink" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn delay={0.2}>
            <span className="font-mono text-[10px] font-light tracking-[4px] uppercase text-copper">
              A Keel Ridge Project
            </span>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="mt-6 font-display text-4xl font-normal leading-tight text-snow sm:text-5xl md:text-6xl lg:text-7xl">
              The best trips start as someone&rsquo;s wild idea.
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="mt-6 font-body text-base font-light text-sand/70 sm:text-lg md:text-xl">
              Submit a destination. We&rsquo;ll curate it, refine it, and turn
              the best ones into real adventures.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <a
              href="#submit"
              className="mt-10 inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
            >
              Submit Your Idea
              <span className="text-sm">&rarr;</span>
            </a>
          </FadeIn>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="h-12 w-px bg-gradient-to-b from-transparent to-copper/30" />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="font-mono text-[10px] font-light tracking-[4px] uppercase text-copper">
              How It Works
            </span>
            <h2 className="mt-4 font-display text-3xl font-normal text-snow sm:text-4xl">
              From wild idea to real adventure
            </h2>
          </FadeIn>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="border-t border-copper/20 pt-8">
                  <span className="font-mono text-[11px] font-light tracking-[3px] text-copper/60">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-normal text-snow sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 font-body text-sm font-light leading-relaxed text-cream/60">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Idea Feed ── */}
      <section id="ideas" className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="font-mono text-[10px] font-light tracking-[4px] uppercase text-copper">
              The Feed
            </span>
            <h2 className="mt-4 font-display text-3xl font-normal text-snow sm:text-4xl">
              Ideas from the community
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea, i) => (
              <FadeIn key={idea.slug} delay={i * 0.1}>
                <Link
                  href={`/ideas/${idea.slug}`}
                  className="group block border border-white/5 bg-deep/50 p-6 transition-all hover:border-copper/20 hover:bg-deep"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] font-light tracking-[2px] uppercase text-sea">
                      {idea.region}
                    </span>
                    <StatusBadge status={idea.status} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-normal text-snow group-hover:text-copper transition-colors">
                    {idea.title}
                  </h3>
                  <p className="mt-2 font-body text-[11px] font-light tracking-[1px] uppercase text-copper/70">
                    {idea.destination}
                  </p>
                  <p className="mt-3 font-body text-sm font-light leading-relaxed text-cream/50 line-clamp-3">
                    {idea.pitch}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {idea.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-2.5 py-1 font-mono text-[9px] font-light tracking-[2px] uppercase text-cream/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-white/5 pt-4">
                    <span className="font-body text-xs font-light text-cream/30">
                      {idea.submitter}, {idea.location}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Submit Form ── */}
      <section id="submit" className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <span className="font-mono text-[10px] font-light tracking-[4px] uppercase text-copper">
              Submit an Idea
            </span>
            <h2 className="mt-4 font-display text-3xl font-normal text-snow sm:text-4xl">
              Chart something new
            </h2>
            <p className="mt-4 font-body text-base font-light text-cream/60">
              Know a place that deserves a proper expedition? Pitch it. The best
              ideas come from people who&rsquo;ve been there — or can&rsquo;t
              stop thinking about going.
            </p>
          </FadeIn>

          <form onSubmit={handleSubmit} className="mt-12 space-y-10">
              {/* Name */}
              <FadeIn>
                <div>
                  <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                    placeholder="Full name"
                  />
                </div>
              </FadeIn>

              {/* Location */}
              <FadeIn delay={0.05}>
                <div>
                  <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                    Where are you based?
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                    placeholder="City, Country"
                  />
                </div>
              </FadeIn>

              {/* Destination */}
              <FadeIn delay={0.1}>
                <div>
                  <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    required
                    className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                    placeholder="The place you're pitching"
                  />
                </div>
              </FadeIn>

              {/* Country / Region */}
              <FadeIn delay={0.15}>
                <div>
                  <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                    Country / Region
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                    placeholder="e.g. Arctic Norway, Central Asia, Indian Ocean"
                  />
                </div>
              </FadeIn>

              {/* Pitch */}
              <FadeIn delay={0.2}>
                <div>
                  <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                    Your Pitch
                  </label>
                  <textarea
                    name="pitch"
                    required
                    rows={5}
                    className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20 resize-none"
                    placeholder="Why this place? What makes it special? What would the trip look like?"
                  />
                </div>
              </FadeIn>

              {/* Activities */}
              <FadeIn delay={0.25}>
                <div>
                  <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                    Activities
                  </label>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {activities.map((activity) => (
                      <button
                        key={activity}
                        type="button"
                        onClick={() => toggleActivity(activity)}
                        className={`border px-4 py-2 font-body text-xs font-light transition-all ${
                          selectedActivities.includes(activity)
                            ? "border-copper bg-copper/10 text-copper"
                            : "border-white/10 text-cream/50 hover:border-white/20 hover:text-cream/70"
                        }`}
                      >
                        {activity}
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Been There */}
              <FadeIn delay={0.3}>
                <div>
                  <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                    Have you been there?
                  </label>
                  <select
                    name="been_there"
                    className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 [&>option]:bg-ink [&>option]:text-snow"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {beenThereOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </FadeIn>

              {/* Additional Notes */}
              <FadeIn delay={0.35}>
                <div>
                  <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20 resize-none"
                    placeholder="Logistics you know about, best season, local contacts, anything helpful"
                  />
                </div>
              </FadeIn>

              {/* Email */}
              <FadeIn delay={0.4}>
                <div>
                  <label className="block font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-3 w-full border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20"
                    placeholder="your@email.com"
                  />
                </div>
              </FadeIn>

              {/* Submit Button */}
              <FadeIn delay={0.45}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-4 w-full border border-copper/30 px-8 py-4 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit Idea"}
                </button>
              </FadeIn>
            </form>
        </div>
      </section>

      {/* ── Curator Quote ── */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <blockquote className="text-center">
              <p className="font-display text-xl font-normal leading-relaxed text-cream/90 sm:text-2xl md:text-3xl">
                &ldquo;Every destination we&rsquo;ve ever built started as a
                conversation — someone said &lsquo;you have to see this
                place,&rsquo; and we couldn&rsquo;t let it go. Blank Chart is
                that conversation, opened up to everyone.&rdquo;
              </p>
              <footer className="mt-8">
                <span className="font-body text-[11px] font-light tracking-[3px] uppercase text-copper">
                  &mdash; Whit Batchelor, Founder / Curator
                </span>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-display text-2xl font-normal leading-relaxed text-cream/90 sm:text-3xl md:text-4xl">
              The map has edges. Help us fill them in.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="#submit"
              className="mt-10 inline-flex items-center gap-2 border border-copper/30 px-8 py-3.5 font-body text-[11px] font-normal tracking-[3px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10"
            >
              Submit an Idea
              <span className="text-sm">&rarr;</span>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg text-snow">
              Blank <span className="text-copper">Chart</span>
            </span>
            <span className="font-body text-sm font-light text-cream/40">
              &mdash; A project by{" "}
              <a
                href="https://keelridge.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper/70 transition-colors hover:text-copper"
              >
                Keel Ridge
              </a>
            </span>
          </div>

          {/* Right */}
          <p className="font-body text-xs font-light text-cream/40 italic">
            Bespoke adventure, personally curated
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="font-body text-xs font-light text-gray/60">
            &copy; {new Date().getFullYear()} Keel Ridge&trade;. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

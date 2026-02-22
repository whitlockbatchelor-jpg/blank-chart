"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#ideas", label: "Ideas" },
  { href: "#submit", label: "Submit" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <span className="font-display text-xl tracking-wide text-snow">
            Blank <span className="text-copper">Chart</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[11px] font-light tracking-[3px] uppercase text-sand/80 transition-colors hover:text-snow"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://keelridge.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] font-light tracking-[3px] uppercase text-copper transition-colors hover:text-rust"
          >
            &larr; Keel Ridge
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-px w-6 bg-snow transition-all duration-300 ${
              isOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-snow transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-snow transition-all duration-300 ${
              isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 bg-ink/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-2xl font-light tracking-[4px] uppercase text-sand/80 transition-colors hover:text-snow"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://keelridge.co"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="font-display text-2xl font-light tracking-[4px] uppercase text-copper transition-colors hover:text-rust"
          >
            &larr; Keel Ridge
          </a>
        </div>
      </div>
    </header>
  );
}

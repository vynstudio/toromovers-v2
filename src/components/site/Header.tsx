"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/apartment-moves", label: "Apartment" },
  { href: "/home-moves", label: "Home" },
  { href: "/commercial-moves", label: "Commercial" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-rule"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-md bg-toro-red flex items-center justify-center text-white font-bold text-lg">
              T
            </div>
            <span className="font-bold text-lg tracking-tight text-charcoal">
              Toro Movers
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-graphite hover:text-charcoal hover:bg-off-white rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+16896002720"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-charcoal hover:text-toro-red transition-colors"
            >
              <Phone className="w-4 h-4" /> 689-600-2720
            </a>
            <Link
              href="/quote"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-md font-semibold text-sm text-white bg-toro-red hover:bg-toro-red-dark transition-colors"
            >
              Free quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 -mr-2 text-charcoal"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col">
          <div className="container-page flex items-center justify-between h-16">
            <span className="font-bold text-lg text-charcoal">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2 -mr-2 text-charcoal"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="container-page flex-1 flex flex-col gap-1 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 text-xl font-medium text-charcoal border-b border-rule"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="btn-primary mt-8"
            >
              Get my free quote
            </Link>
            <a
              href="tel:+16896002720"
              className="btn-outline mt-3"
            >
              <Phone className="w-4 h-4" /> 689-600-2720
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

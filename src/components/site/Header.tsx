"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { CITIES } from "@/lib/cities";

const services = [
  { href: "/apartment-moves", label: "Apartment moves" },
  { href: "/home-moves", label: "Home moves" },
  { href: "/commercial-moves", label: "Commercial moves" },
];

const serviceAreas = CITIES.map((c) => ({
  href: c.href,
  label: c.navLabel,
}));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const t = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(t)) {
        setServicesOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(t)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

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
          <Link href="/" className="flex items-center" aria-label="Toro Movers — home">
            <Image
              src="/logo-horizontal.svg"
              alt="Toro Movers"
              width={180}
              height={32}
              priority
              className="h-7 md:h-8 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-graphite hover:text-charcoal hover:bg-off-white rounded-md transition-colors"
            >
              Home
            </Link>

            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setAreasOpen(false);
                }}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-graphite hover:text-charcoal hover:bg-off-white rounded-md transition-colors"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg border border-rule shadow-elevated py-1 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-sm text-graphite hover:text-charcoal hover:bg-off-white"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div ref={areasRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setAreasOpen(!areasOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-graphite hover:text-charcoal hover:bg-off-white rounded-md transition-colors"
                aria-expanded={areasOpen}
                aria-haspopup="true"
              >
                Service Areas
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${areasOpen ? "rotate-180" : ""}`}
                />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg border border-rule shadow-elevated py-1 z-50">
                  {serviceAreas.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      onClick={() => setAreasOpen(false)}
                      className="block px-4 py-2.5 text-sm text-graphite hover:text-charcoal hover:bg-off-white"
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-graphite hover:text-charcoal hover:bg-off-white rounded-md transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/quote"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-md font-semibold text-sm text-white bg-toro-red hover:bg-toro-red-dark transition-colors"
            >
              Free estimate
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
        <div className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col overflow-y-auto">
          <div className="container-page flex items-center justify-between h-16 shrink-0">
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
          <nav className="container-page flex-1 flex flex-col gap-1 pt-4 pb-8">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-4 text-xl font-medium text-charcoal border-b border-rule"
            >
              Home
            </Link>

            <div className="py-4 border-b border-rule">
              <p className="text-xl font-medium text-charcoal mb-3">Services</p>
              <div className="flex flex-col gap-2 pl-4">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-base text-graphite"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-4 border-b border-rule">
              <p className="text-xl font-medium text-charcoal mb-3">Service Areas</p>
              <div className="flex flex-col gap-2 pl-4">
                {serviceAreas.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-base text-graphite"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="py-4 text-xl font-medium text-charcoal border-b border-rule"
            >
              About
            </Link>

            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="btn-primary mt-8"
            >
              Get my free estimate
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

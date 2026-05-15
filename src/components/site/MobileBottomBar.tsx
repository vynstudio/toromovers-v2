"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, FileText } from "lucide-react";

// Routes where the bottom action bar competes with the page's own primary CTA
// (the multi-step form's footer or the thank-you confirmation). Suppress it
// there so the page-level CTA can own the bottom of the viewport.
const HIDE_ON = new Set(["/quote", "/thank-you"]);

export function MobileBottomBar() {
  const pathname = usePathname();
  if (HIDE_ON.has(pathname)) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-charcoal text-white border-t border-charcoal-light grid grid-cols-3 shadow-elevated">
      <a
        href="tel:+16896002720"
        className="flex flex-col items-center justify-center gap-1 py-3 active:bg-charcoal-light transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span className="text-xs font-medium">Call</span>
      </a>
      <a
        href="sms:+16896002720"
        className="flex flex-col items-center justify-center gap-1 py-3 border-x border-charcoal-light active:bg-charcoal-light transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-medium">Text</span>
      </a>
      <Link
        href="/quote"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-toro-red active:bg-toro-red-dark transition-colors"
      >
        <FileText className="w-5 h-5" />
        <span className="text-xs font-medium">Free quote</span>
      </Link>
    </div>
  );
}

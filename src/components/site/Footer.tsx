import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-white/80 pt-16 pb-24 lg:pb-12 mt-16">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-isotype.svg"
                alt=""
                width={36}
                height={28}
                className="h-7 w-auto"
                aria-hidden="true"
              />
              <span className="font-bold text-lg text-white tracking-tight">Toro Movers</span>
            </div>
            <p className="text-sm leading-relaxed">
              Family-owned, fully insured movers serving Central Florida.
            </p>
          </div>

          <div>
            <h4 className="text-white/60 font-medium text-sm lowercase tracking-[0.2em] mb-4">
              services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/apartment-moves" className="hover:text-white">Apartment Moves</Link></li>
              <li><Link href="/home-moves" className="hover:text-white">Home Moves</Link></li>
              <li><Link href="/commercial-moves" className="hover:text-white">Commercial Moves</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 font-medium text-sm lowercase tracking-[0.2em] mb-4">
              service areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/movers-orlando" className="hover:text-white">Orlando movers</Link></li>
              <li><Link href="/movers-lake-mary" className="hover:text-white">Lake Mary movers</Link></li>
              <li><Link href="/movers-winter-park" className="hover:text-white">Winter Park movers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 font-medium text-sm lowercase tracking-[0.2em] mb-4">
              company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/quote" className="hover:text-white">Get a quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 font-medium text-sm lowercase tracking-[0.2em] mb-4">
              contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+16896002720" className="flex items-center gap-2 hover:text-white">
                  <Phone className="w-4 h-4" /> 689-600-2720
                </a>
              </li>
              <li>
                <a href="mailto:hello@toromovers.net" className="flex items-center gap-2 hover:text-white">
                  <Mail className="w-4 h-4" /> hello@toromovers.net
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Central Florida
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-light mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-white/60">
          <p>© {year} Toro Movers. Family-owned &amp; insured.</p>
          <p>Made with care in Central Florida.</p>
        </div>
      </div>
    </footer>
  );
}

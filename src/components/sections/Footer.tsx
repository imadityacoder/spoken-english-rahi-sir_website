"use client";

import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Star,
  ChevronUp,
  CalendarCheck,
} from "lucide-react";
import { BRAND, NAV_LINKS, COURSES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-foreground text-white/80">
      {/* CTA banner — compact */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
              Ready to stop hesitating?
            </h3>
            <p className="mt-0.5 text-small text-white/80">
              Your free trial class is one tap away. Take the first step today.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a href="#contact" className="btn btn-primary btn-sm">
              <CalendarCheck className="h-4 w-4" />
              Book Free Trial
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm border-2 border-white/30 text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-x py-10">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-dark font-heading text-base font-bold text-white">
                R
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-sm font-bold text-white">
                  Spoken English
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-light">
                  by Rahi Sir
                </span>
              </span>
            </a>
            <p className="mt-3 text-small text-white/70">
              Patna&apos;s trusted spoken English academy — transforming hesitant
              students into confident communicators, one class at a time.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-confidence text-confidence"
                  />
                ))}
              </div>
              <span className="text-xs text-white/80">
                {BRAND.rating} · {BRAND.reviewCount}+ reviews
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <SocialBtn href={BRAND.social.facebook} label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn href={BRAND.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn href={BRAND.social.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialBtn>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 lg:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-small text-white/70 transition-colors hover:text-confidence"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="mt-3 space-y-1.5">
              {COURSES.map((c) => (
                <li key={c.id}>
                  <a
                    href="#courses"
                    className="text-small text-white/70 transition-colors hover:text-confidence"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Reach Us
            </h4>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-small text-white/70">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-confidence" />
                <span>{BRAND.address.full}</span>
              </li>
              <li className="flex items-center gap-2 text-small text-white/70">
                <Phone className="h-3.5 w-3.5 shrink-0 text-confidence" />
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="transition-colors hover:text-white"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-small text-white/70">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-confidence" />
                <span>{BRAND.hours}</span>
              </li>
            </ul>
            <a
              href={BRAND.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-2.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-white/10"
            >
              <MapPin className="h-3.5 w-3.5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-4 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Spoken English by Rahi Sir. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>From Hesitation to Confidence.</span>
            <a
              href="#home"
              className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-confidence"
            >
              Back to top
              <ChevronUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-all hover:bg-confidence hover:text-white hover:border-confidence"
    >
      {children}
    </a>
  );
}

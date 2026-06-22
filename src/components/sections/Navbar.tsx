"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-card border-b border-border/60 shadow-soft"
            : "bg-transparent",
        )}
      >
        <nav className="container-x flex h-14 items-center justify-between md:h-16">
          <a href="#home" className="flex items-center gap-2" aria-label="Home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-dark text-sm font-bold text-white shadow-brand">
              R
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-xs font-bold text-foreground sm:text-sm">
                Spoken English
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-brand sm:text-[10px]">
                by Rahi Sir
              </span>
            </span>
          </a>

          {/* Desktop nav — tighter spacing */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-brand-light hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-1.5 lg:flex">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-brand transition-colors hover:bg-brand-light"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-[#25D366] transition-colors hover:bg-[#25D366]/10"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-primary btn-sm ml-1">
              <CalendarCheck className="h-4 w-4" />
              Book Free Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4.5 w-4.5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-dark font-bold text-white">
                    R
                  </span>
                  <span className="font-heading text-xs font-bold">
                    Spoken English
                    <span className="block text-[9px] font-semibold uppercase tracking-wider text-brand">
                      by Rahi Sir
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border"
                  aria-label="Close menu"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto px-2 py-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-brand-light hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="border-t border-border p-3 space-y-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Free Trial Class
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="btn btn-outline btn-sm"
                  >
                    <Phone className="h-4 w-4 text-brand" /> Call
                  </a>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

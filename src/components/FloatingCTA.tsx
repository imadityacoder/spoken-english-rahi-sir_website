"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { BRAND } from "@/lib/site";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating buttons — compact */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-5 z-40 hidden flex-col items-end gap-2 sm:flex"
          >
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              aria-label="Call now"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/40 transition-transform hover:scale-110"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              aria-label="Book free trial class"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-confidence text-white shadow-lg shadow-confidence/40 transition-transform hover:scale-110"
            >
              <CalendarCheck className="h-5 w-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom action bar — compact, safe-area aware */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 z-40 sm:hidden"
          >
            <div className="glass-card border-t border-border/60 px-2 pb-[max(0.375rem,env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-8px_24px_-12px_rgba(31,41,55,0.18)]">
              <div className="grid grid-cols-3 gap-1.5">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex flex-col items-center justify-center gap-0.5 rounded-lg bg-brand/10 px-2 py-2 text-brand"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-[10px] font-bold">Call</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-0.5 rounded-lg bg-[#25D366]/10 px-2 py-2 text-[#1a8d4e]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-[10px] font-bold">WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  className="flex flex-col items-center justify-center gap-0.5 rounded-lg bg-confidence px-2 py-2 text-white shadow-confidence"
                >
                  <CalendarCheck className="h-4 w-4" />
                  <span className="text-[10px] font-bold">Book Trial</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

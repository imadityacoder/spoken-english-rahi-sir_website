"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { FAQS, BRAND } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-surface section-y"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-section opacity-60" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Questions Answered"
            tone="brand"
            title={
              <>
                Frequently Asked{" "}
                <span className="text-gradient-brand">Questions</span>
              </>
            }
            subtitle="Everything you need to know before booking your free trial class. Still unsure? Message Rahi Sir directly on WhatsApp."
          />
        </Reveal>

        <div className="mx-auto mt-6 max-w-3xl space-y-2">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.04}>
              <FaqItem q={faq.q} a={faq.a} />
            </Reveal>
          ))}
        </div>

        {/* WhatsApp CTA — compact */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-between gap-3 rounded-xl border border-border/60 bg-white p-4 shadow-soft sm:flex-row sm:p-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-foreground sm:text-base">
                  Still have a question?
                </p>
                <p className="text-xs text-muted-foreground">
                  Chat with Rahi Sir on WhatsApp — usually replies in minutes.
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hi Rahi Sir, I have a question about the spoken English classes.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Sir
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border border-border/60 bg-white shadow-soft transition-shadow open:shadow-card-hover">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-3.5 text-left sm:p-4">
        <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
          {q}
        </h3>
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand transition-all duration-300",
            "group-open:rotate-180 group-open:bg-confidence group-open:text-white",
          )}
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </summary>
      <div className="overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="px-3.5 pb-3.5 sm:px-4 sm:pb-4"
          >
            <p className="text-small text-muted-foreground">{a}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </details>
  );
}

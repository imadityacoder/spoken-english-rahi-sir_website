"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WHY_RAHIR_SIR } from "@/lib/site";
import { getIcon } from "@/lib/icons";

export function WhyRahiSir() {
  return (
    <section
      id="why-rahi-sir"
      className="relative overflow-hidden bg-surface section-y"
    >
      <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-brand/6 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Learn With Rahi Sir"
            tone="brand"
            title={
              <>
                Not Just Coaching —{" "}
                <span className="text-gradient-brand">A Transformation</span>
              </>
            }
            subtitle="Eight pillars that turn hesitation into fluency. Each one exists because students needed it — not because it looked good on a brochure."
          />
        </Reveal>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_RAHIR_SIR.map((item, i) => {
            const Icon = getIcon(item.icon);
            const isAccent = i % 3 === 1;
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.05}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-xl border border-border/60 bg-white p-3.5 shadow-soft transition-shadow hover:shadow-card-hover"
                >
                  <div
                    className={`absolute -right-5 -top-5 h-16 w-16 rounded-full transition-transform duration-500 group-hover:scale-150 ${
                      isAccent ? "bg-confidence/8" : "bg-brand/8"
                    }`}
                  />
                  <span
                    className={`relative flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${
                      isAccent
                        ? "bg-gradient-to-br from-confidence to-confidence-dark text-white"
                        : "bg-gradient-to-br from-brand to-brand-dark text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-3 font-heading text-sm font-bold text-foreground sm:text-base">
                    {item.title}
                  </h3>
                  <p className="relative mt-1 text-small text-muted-foreground">
                    {item.text}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

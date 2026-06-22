"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PAIN_POINTS } from "@/lib/site";
import { getIcon } from "@/lib/icons";
import { Heart } from "lucide-react";

export function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-background section-y">
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="The Real Problem"
            tone="confidence"
            title={
              <>
                Why Most Students{" "}
                <span className="text-gradient-confidence">Struggle</span> to
                Speak English
              </>
            }
            subtitle="Recognise any of these? You're not alone — every student who walked into Rahi Sir's class felt the same way. Each of these has a proven solution."
          />
        </Reveal>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-xl border border-border/60 bg-white p-3.5 shadow-soft sm:p-4"
                >
                  <div className="absolute -left-2 -top-2 h-14 w-14 rounded-full bg-destructive/5 transition-transform group-hover:scale-150" />
                  <div className="relative flex items-start gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-small text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Empathy CTA — compact */}
        <Reveal delay={0.2}>
          <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-5 text-white shadow-brand sm:p-6">
            <div className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                  <Heart className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold sm:text-lg">
                    Sound familiar? You&apos;re in the right place.
                  </h3>
                  <p className="mt-1 text-small text-white/90 sm:text-body">
                    Every transformation here began with a student who felt
                    exactly this way. The first step is showing up.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="btn btn-primary w-full md:w-auto"
              >
                Take the First Step
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS, BRAND } from "@/lib/site";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + total) % total);
  };

  return (
    <section className="relative overflow-hidden bg-surface section-y">
      <div className="pointer-events-none absolute inset-0 bg-mesh-section opacity-60" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Student Voices"
            tone="confidence"
            title={
              <>
                <span className="text-gradient-confidence">5.0 Stars</span> —
                Here&apos;s Why Students Love It Here
              </>
            }
            subtitle="Real reviews from real students. Watch what they say about their journey with Rahi Sir."
          />
        </Reveal>

        {/* Google rating chip — compact */}
        <Reveal delay={0.08}>
          <div className="mx-auto mt-4 flex w-fit items-center gap-2.5 rounded-xl border border-border/60 bg-white px-4 py-2 shadow-soft">
            <span className="font-heading text-xl font-bold text-foreground">
              {BRAND.rating}
            </span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-confidence text-confidence" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              · {BRAND.reviewCount}+ Google reviews
            </span>
          </div>
        </Reveal>

        {/* Featured testimonial carousel */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-6 max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-soft sm:p-7">
              <Quote className="absolute right-4 top-4 h-9 w-9 text-brand/8" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <img
                      src={TESTIMONIALS[active].image}
                      alt={TESTIMONIALS[active].name}
                      className="h-12 w-12 shrink-0 rounded-xl object-cover ring-2 ring-brand/20 sm:h-14 sm:w-14"
                    />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                        <h4 className="font-heading text-base font-bold text-foreground">
                          {TESTIMONIALS[active].name}
                        </h4>
                        <div className="flex">
                          {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5 fill-confidence text-confidence"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs font-medium text-brand-dark">
                        {TESTIMONIALS[active].role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-body text-foreground/85">
                    &ldquo;{TESTIMONIALS[active].text}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === active
                          ? "w-6 bg-confidence"
                          : "w-1.5 bg-border hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-brand transition-colors hover:bg-brand-light"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-brand transition-colors hover:bg-brand-light"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Compact testimonial grid */}
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.05}>
              <button
                onClick={() => setActive(i)}
                className={`flex h-full w-full flex-col rounded-xl border p-3 text-left transition-all ${
                  i === active
                    ? "border-brand bg-brand-light shadow-soft"
                    : "border-border/60 bg-white hover:border-brand/40 hover:shadow-soft"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-9 w-9 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-heading text-xs font-bold text-foreground">
                      {t.name}
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
                <div className="mt-1.5 flex">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-3 w-3 fill-confidence text-confidence"
                    />
                  ))}
                </div>
                <p className="mt-1.5 line-clamp-2 text-[11px] text-muted-foreground">
                  {t.text}
                </p>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Video testimonial placeholders */}
        <Reveal delay={0.15}>
          <div className="mt-6">
            <h3 className="text-center font-heading text-lg font-bold text-foreground sm:text-xl">
              Watch Student Video Stories
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                {
                  name: "Priya's Stage Debut",
                  img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
                },
                {
                  name: "Aman's Interview Success",
                  img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
                },
                {
                  name: "Sneha's Corporate Journey",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
                },
              ].map((v, i) => (
                <motion.button
                  key={v.name}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative aspect-video overflow-hidden rounded-xl border border-border/60 shadow-soft"
                >
                  <img
                    src={v.img}
                    alt={v.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform group-hover:scale-110">
                      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white/40" />
                      <Play className="h-5 w-5 fill-confidence text-confidence" />
                    </span>
                  </span>
                  <p className="absolute bottom-2 left-2 right-2 text-left font-heading text-xs font-bold text-white">
                    {v.name}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

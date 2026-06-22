"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SUCCESS_STORIES } from "@/lib/site";

export function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="relative overflow-hidden bg-background section-y"
    >
      <div className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full bg-success/8 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Real Transformations"
            tone="brand"
            title={
              <>
                From <span className="text-gradient-brand">Shy Students</span>{" "}
                to <span className="text-gradient-confidence">Confident Speakers</span>
              </>
            }
            subtitle="Not testimonials — proof. The hesitation you feel today can be the confidence you wear tomorrow."
          />
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {SUCCESS_STORIES.map((story, i) => (
            <Reveal key={story.name} delay={(i % 2) * 0.08}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-soft transition-shadow hover:shadow-card-hover"
              >
                <div className="grid gap-0 sm:grid-cols-[2fr_3fr]">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                    <img
                      src={story.image}
                      alt={`Success story of ${story.name} after completing ${story.course}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-success px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                      <Sparkles className="h-2.5 w-2.5" />
                      Success
                    </span>
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <p className="font-heading text-sm font-bold">
                        {story.name}
                      </p>
                      <p className="text-[10px] text-white/85">{story.course}</p>
                    </div>
                  </div>

                  {/* Before/After */}
                  <div className="p-3.5 sm:p-4">
                    <span className="inline-flex items-center gap-1 rounded-md bg-confidence/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-confidence">
                      <TrendingUp className="h-3 w-3" />
                      {story.tag}
                    </span>

                    <div className="mt-2.5 space-y-2">
                      <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-2.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-destructive">
                          Before
                        </p>
                        <p className="mt-0.5 text-xs text-foreground/80">
                          {story.before}
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>

                      <div className="rounded-lg border border-success/30 bg-success/8 p-2.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-success">
                          After
                        </p>
                        <p className="mt-0.5 text-xs font-medium text-foreground">
                          {story.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

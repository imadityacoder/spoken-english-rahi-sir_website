"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TRANSFORMATION_STEPS } from "@/lib/site";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function Transformation() {
  return (
    <section
      id="transformation"
      className="relative overflow-hidden bg-surface section-y"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-section opacity-60" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="The Transformation"
            tone="brand"
            title={
              <>
                From{" "}
                <span className="text-gradient-brand">Foundation</span> to{" "}
                <span className="text-gradient-confidence">Excellence</span>
              </>
            }
            subtitle="Six structured stages. One clear path. Each step builds better concepts, confidence, practical skills, and academic results."
          />
        </Reveal>

        <div className="relative mt-8">
          {/* Vertical line — desktop center, mobile left */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand via-confidence to-brand lg:block"
          />
          <div
            aria-hidden
            className="absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-brand via-confidence to-brand lg:hidden"
          />

          <ol className="space-y-3 lg:space-y-5">
            {TRANSFORMATION_STEPS.map((step, i) => {
              const Icon = getIcon(step.icon);
              const isLeft = i % 2 === 0;
              const isAccent = i === 3 || i === 5;
              return (
                <li
                  key={step.step}
                  className="relative pl-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:pl-0"
                >
                  {/* Mobile dot */}
                  <span
                    aria-hidden
                    className="absolute left-[18px] top-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-brand ring-2 ring-white lg:hidden"
                  >
                    <Icon className="h-4 w-4 text-brand" />
                  </span>

                  {/* Desktop dot */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-1/2 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-brand ring-4 ring-white lg:flex",
                      isAccent
                        ? "bg-gradient-to-br from-confidence to-confidence-dark"
                        : "bg-gradient-to-br from-brand to-brand-dark",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <Reveal
                    delay={i * 0.04}
                    className={cn(isLeft ? "lg:col-start-1" : "lg:col-start-2")}
                  >
                    <div
                      className={cn(
                        "rounded-xl border border-border/60 bg-white p-4 shadow-soft transition-shadow hover:shadow-card-hover",
                        isLeft ? "lg:text-right" : "lg:text-left",
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-2",
                          isLeft && "lg:flex-row-reverse",
                        )}
                      >
                        <span
                          className={cn(
                            "font-heading text-2xl font-bold sm:text-3xl",
                            isAccent ? "text-confidence" : "text-brand",
                          )}
                        >
                          {step.step}
                        </span>
                        <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-small text-muted-foreground">
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-confidence to-confidence-dark p-5 text-center text-white shadow-confidence sm:p-6"
          >
            <h3 className="font-heading text-xl font-bold sm:text-2xl">
              Your turn to improve.
            </h3>
            <p className="mx-auto mt-1.5 max-w-xl text-small text-white/90 sm:text-body">
              Enquire today and find the right batch for academics, coding,
              commerce, or spoken English.
            </p>
            <a
              href="#contact"
              className="btn btn-lg mt-4 bg-white text-confidence-dark shadow-lg hover:scale-[1.02]"
            >
              Start My Enquiry
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

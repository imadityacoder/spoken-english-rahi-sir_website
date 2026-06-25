"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart3, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { COURSES, BRAND } from "@/lib/site";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-background section-y"
    >
      <div className="pointer-events-none absolute -left-24 bottom-12 h-72 w-72 rounded-full bg-confidence/6 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our Courses"
            tone="confidence"
            title={
              <>
                Programs for{" "}
                <span className="text-gradient-confidence">Academics</span>{" "}
                and Skills
              </>
            }
            subtitle="From Class 4 foundations to senior academics, commerce, coding, DCA, and spoken English - choose the program that fits your goal."
          />
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, i) => {
            const Icon = getIcon(course.icon);
            const isAccent = course.color === "confidence";
            return (
              <Reveal key={course.id} delay={(i % 3) * 0.06}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-soft transition-shadow hover:shadow-card-hover"
                >
                  {/* Top gradient strip */}
                  <div
                    className={cn(
                      "h-1 w-full",
                      isAccent
                        ? "bg-gradient-to-r from-confidence to-confidence-dark"
                        : "bg-gradient-to-r from-brand to-brand-dark",
                    )}
                  />

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110",
                          isAccent
                            ? "bg-confidence/10 text-confidence"
                            : "bg-brand-light text-brand",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span
                        className={cn(
                          "chip",
                          isAccent
                            ? "bg-confidence/10 text-confidence"
                            : "bg-brand-light text-brand-dark",
                        )}
                      >
                        {course.tagline}
                      </span>
                    </div>

                    <h3 className="mt-3 font-heading text-base font-bold text-foreground sm:text-lg">
                      {course.title}
                    </h3>
                    <p className="mt-1.5 text-small text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-foreground">
                        <Clock className="h-3 w-3 text-brand" />
                        {course.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-foreground">
                        <BarChart3 className="h-3 w-3 text-confidence" />
                        {course.level}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-1">
                      {course.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-1.5 text-xs text-muted-foreground"
                        >
                          <CheckCircle2
                            className={cn(
                              "mt-0.5 h-3 w-3 shrink-0",
                              isAccent ? "text-confidence" : "text-brand",
                            )}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi The Knowledge Hut, I'm interested in the "${course.title}" program. Please share more details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-all",
                        isAccent
                          ? "bg-confidence/10 text-confidence hover:bg-confidence hover:text-white"
                          : "bg-brand-light text-brand hover:bg-brand hover:text-white",
                      )}
                    >
                      Enquire Now
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom strip — compact */}
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-xl border border-border/60 bg-white p-4 text-center shadow-soft sm:flex-row sm:p-5 sm:text-left">
            <p className="text-small text-muted-foreground sm:text-body">
              Not sure which program fits?{" "}
              <span className="font-semibold text-foreground">
                Get a quick guidance call
              </span>{" "}
              - we&apos;ll help you choose.
            </p>
            <a href="#contact" className="btn btn-primary btn-sm w-full sm:w-auto">
              Get Guidance
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

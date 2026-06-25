"use client";

import { motion } from "framer-motion";
import {
  Star,
  Heart,
  Clock,
  Mic,
  Briefcase,
  BookOpenCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { STATS } from "@/lib/site";

const indicators: {
  icon: LucideIcon;
  title: string;
  text: string;
  color: "brand" | "confidence";
}[] = [
  {
    icon: Star,
    title: "4.9 Rating",
    text: "Highly rated by the local student community.",
    color: "confidence",
  },
  {
    icon: Heart,
    title: "Focused Environment",
    text: "Structured classrooms support disciplined learning.",
    color: "brand",
  },
  {
    icon: Clock,
    title: "Evening Timings",
    text: "Mon-Sat 3:00 PM to 8:30 PM, Sunday 3:00 PM to 7:00 PM.",
    color: "brand",
  },
  {
    icon: Mic,
    title: "Spoken English",
    text: "Dedicated modules build confidence and communication.",
    color: "confidence",
  },
  {
    icon: Briefcase,
    title: "Commerce & IT",
    text: "Commerce tutoring plus Java, Python, C++, and DCA.",
    color: "brand",
  },
];

const statIcons: Record<string, LucideIcon> = {
  Star,
  Users: Heart,
  BookOpenCheck,
  CalendarCheck: Clock,
  TrendingUp: Briefcase,
};

export function TrustIndicators() {
  return (
    <section className="relative bg-surface section-y">
      <div className="container-x">
        {/* Stats row — compact, scannable */}
        <Reveal>
          <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border/60 bg-mesh-section p-3 sm:gap-3 md:grid-cols-4 md:p-4">
            {STATS.map((stat, i) => {
              const Icon = statIcons[stat.icon] ?? Star;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex flex-col items-center text-center"
                >
                  <span className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-light text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.value % 1 === 0 ? 0 : 1}
                    />
                  </span>
                  <span className="mt-0.5 text-[11px] font-medium text-muted-foreground sm:text-xs">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </Reveal>

        {/* Indicators grid — 2 cols mobile, 3 cols desktop */}
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {indicators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full items-start gap-3 overflow-hidden rounded-xl border border-border/60 bg-white p-3.5 shadow-soft transition-shadow hover:shadow-card-hover sm:p-4"
              >
                <div
                  className={`absolute -right-4 -top-4 h-16 w-16 rounded-full ${
                    item.color === "confidence"
                      ? "bg-confidence/8"
                      : "bg-brand/8"
                  }`}
                />
                <span
                  className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    item.color === "confidence"
                      ? "bg-confidence text-white"
                      : "bg-brand text-white"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="relative min-w-0">
                  <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-small text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={0.25}>
            <div className="flex h-full flex-col justify-between rounded-xl bg-gradient-to-br from-brand to-brand-dark p-4 text-white shadow-brand">
              <div>
                <h3 className="font-heading text-sm font-bold sm:text-base">
                  Ready to begin?
                </h3>
                <p className="mt-1 text-small text-white/90">
                  Ask about the right batch for academics, commerce, IT, or spoken English.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-3 inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 text-xs font-bold text-brand-dark transition-transform hover:scale-[1.02]"
              >
                Send Enquiry
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

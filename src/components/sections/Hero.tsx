"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  MessageCircle,
  Star,
  Users,
  Clock,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { BRAND } from "@/lib/site";
import { CountUp } from "@/components/ui/count-up";

const trustStrip = [
  { icon: Star, label: "5.0 Rating" },
  { icon: Users, label: "Interactive Classes" },
  { icon: Clock, label: "Flexible Timings" },
  { icon: GraduationCap, label: "Interview Prep" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mesh-brand pt-20 pb-10 md:pt-24 md:pb-14 lg:pt-28 lg:pb-16"
    >
      {/* Subtle decorative blobs — smaller, less dominant */}
      <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-brand/10 blur-3xl md:h-72 md:w-72" />
      <div className="pointer-events-none absolute top-24 -right-16 h-64 w-64 rounded-full bg-confidence/10 blur-3xl md:h-80 md:w-80" />

      <div className="container-x relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left side — copy & CTAs */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/85 px-3 py-1 text-xs font-semibold text-brand-dark shadow-soft backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              Patna&apos;s most trusted spoken English mentor
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mt-3 text-hero font-bold"
            >
              Stop Hesitating.
              <br />
              <span className="text-gradient-hero">Start Speaking</span>
              <br />
              English Confidently.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-4 max-w-xl text-body-lg text-muted-foreground"
            >
              Master communication, grammar, fluency, public speaking and
              interview confidence under the personal guidance of{" "}
              <span className="font-semibold text-foreground">Rahi Sir</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn btn-primary btn-lg w-full sm:w-auto">
                <CalendarCheck className="h-4 w-4" />
                Book Free Trial Class
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust strip — compact, single row on desktop */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4"
            >
              {trustStrip.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-white/70 px-2.5 py-1.5 backdrop-blur"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-brand" />
                  <span className="text-xs font-semibold leading-tight text-foreground">
                    {label}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right side — image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[5/6] overflow-hidden rounded-2xl shadow-brand ring-1 ring-border/40 sm:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
                alt="Rahi Sir interacting with spoken English students in Patna"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>

            {/* Floating rating card — smaller, tighter */}
            <motion.div
              initial={{ opacity: 0, x: -12, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -left-2 top-4 rounded-xl border border-border/60 bg-white/95 p-2.5 shadow-card-hover backdrop-blur sm:-left-4 sm:p-3"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-confidence text-confidence"
                    />
                  ))}
                </div>
                <span className="font-heading text-sm font-bold text-foreground">
                  <CountUp end={5} decimals={1} duration={1.4} />
                </span>
              </div>
              <p className="mt-0.5 text-[10px] text-muted-foreground">
                <CountUp end={247} suffix="+" /> Google reviews
              </p>
            </motion.div>

            {/* Floating students card */}
            <motion.div
              initial={{ opacity: 0, x: 12, y: -12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="absolute -right-2 bottom-16 rounded-xl border border-border/60 bg-white/95 p-2.5 shadow-card-hover backdrop-blur sm:-right-4 sm:p-3"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10 text-success">
                  <Users className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">
                    <CountUp end={1200} suffix="+" />
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Students mentored
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating confidence badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-confidence/30 bg-white/95 px-3 py-1.5 shadow-card-hover backdrop-blur"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-confidence">
                <Sparkles className="h-3.5 w-3.5" />
                From Hesitation to Confidence
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Compact promise bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 rounded-xl border border-border/50 bg-white/70 px-4 py-2.5 text-center text-small text-muted-foreground backdrop-blur md:mt-10"
        >
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Hindi-medium friendly
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Daily speaking practice
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Interview &amp; personality training
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Small group batches
          </span>
        </motion.div>
      </div>
    </section>
  );
}

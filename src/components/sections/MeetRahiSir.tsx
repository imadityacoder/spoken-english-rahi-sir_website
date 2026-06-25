"use client";

import { motion } from "framer-motion";
import {
  Quote,
  GraduationCap,
  Users,
  Award,
  Heart,
  Target,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { BRAND } from "@/lib/site";

const philosophy = [
  "Strong basics make advanced learning easier.",
  "Small classes help every student get noticed.",
  "Weaker students deserve patient, dedicated attention.",
  "Confidence grows through steady practice and guidance.",
];

const credentials = [
  { icon: GraduationCap, label: "CBSE, ICSE & BSEB academic coaching", color: "brand" },
  { icon: Users, label: "Small class sizes with personal attention", color: "confidence" },
  { icon: Award, label: "4.9-star community feedback", color: "brand" },
  { icon: Target, label: "Java, Python, C++, DCA & spoken English", color: "confidence" },
];

export function MeetRahiSir() {
  return (
    <section
      id="meet-rahi-sir"
      className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark py-12 text-white md:py-16"
    >
      {/* Subtle pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-16 right-8 h-56 w-56 rounded-full bg-confidence/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-white/8 blur-3xl" />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="chip bg-white/15 text-white backdrop-blur">
              <Sparkles className="h-3 w-3" />
              Faculty & Methodology
            </span>
            <h2 className="mt-3 text-h2 font-bold">
              Knowledgeable Educators for{" "}
              <span className="text-gradient-confidence">Focused Learning</span>
            </h2>
            <p className="mt-3 text-subtitle text-white/85">
              Instruction is led by well-qualified, deeply invested educators,
              including Santosh Sir, praised by students for his teaching style
              and dedication.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-center gap-6 lg:grid-cols-[5fr_6fr] lg:gap-10">
          {/* Photo side */}
          <Reveal>
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=700&q=80"
                  alt="Teacher guiding students at The Knowledge Hut in Patna"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
              </motion.div>

              {/* Floating quote card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-3 left-1/2 w-[88%] -translate-x-1/2 rounded-xl border border-white/30 bg-white/95 p-3 shadow-2xl backdrop-blur sm:p-4"
              >
                <Quote className="h-5 w-5 text-confidence" />
                <p className="mt-1 font-heading text-xs font-semibold text-foreground sm:text-sm">
                  &ldquo;Every student learns better when the teacher understands
                  their pace.&rdquo;
                </p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  - The Knowledge Hut
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <Reveal delay={0.08}>
              <h3 className="font-heading text-xl font-bold sm:text-2xl">
                Santosh Sir & Faculty Team
              </h3>
              <p className="mt-0.5 text-small text-white/85">
                Academic, IT & Spoken English Mentors · The Knowledge Hut
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-3 space-y-2 text-small text-white/90 sm:text-body">
                <p>
                  The Knowledge Hut is built around patient teaching, clear
                  explanations, and real-time adjustment to each student&apos;s
                  needs. Classes are deliberately kept focused so learners get
                  attention instead of getting lost in the crowd.
                </p>
                <p>
                  Santosh Sir is frequently praised by students for his
                  wonderful teaching style and dedication. The team gives
                  special attention to weaker students so confidence and
                  academic performance improve together.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/10 px-3 py-2 backdrop-blur"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                        c.color === "confidence"
                          ? "bg-confidence text-white"
                          : "bg-white text-brand-dark"
                      }`}
                    >
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-medium text-white">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-4 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <h4 className="flex items-center gap-2 font-heading text-sm font-bold sm:text-base">
                  <Heart className="h-4 w-4 text-confidence" />
                  Teaching Philosophy
                </h4>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {philosophy.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-1.5 text-xs text-white/90"
                    >
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-confidence" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { v: 4.9, s: "", l: "Community Rating" },
                  { v: 3, s: "", l: "Boards Covered" },
                  { v: 5, s: "+", l: "Skill Programs" },
                ].map((stat) => (
                  <div
                    key={stat.l}
                    className="rounded-lg border border-white/15 bg-white/10 p-2 text-center backdrop-blur"
                  >
                    <p className="font-heading text-xl font-bold sm:text-2xl">
                      <CountUp
                        end={stat.v}
                        suffix={stat.s}
                        decimals={stat.v === 4.9 ? 1 : 0}
                      />
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium text-white/80">
                      {stat.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.42}>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a href="#contact" className="btn btn-primary w-full sm:w-auto">
                  Send Enquiry
                </a>
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="btn btn-outline w-full sm:w-auto border-white/40 text-white hover:bg-white/10 hover:text-white"
                >
                  Call: {BRAND.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  CalendarCheck,
  Loader2,
  CheckCircle2,
  Send,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { BRAND, COURSES } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      course: String(formData.get("course") || "").trim(),
      level: String(formData.get("level") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };
    try {
      const res = await fetch("/api/leads?XTransformPort=3000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed");
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-background via-brand-light/40 to-background section-y"
    >
      <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-confidence/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-brand/8 blur-3xl" />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Book Your Free Trial"
            tone="confidence"
            title={
              <>
                Walk In Hesitant.{" "}
                <span className="text-gradient-confidence">
                  Walk Out Confident.
                </span>
              </>
            }
            subtitle="Book your free trial class today. Experience one real session with Rahi Sir — no fees, no commitment, just one hour that could change everything."
          />
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — contact info card */}
          <Reveal>
            <div className="flex h-full flex-col gap-3">
              <div className="rounded-2xl border border-border/60 bg-white p-4 shadow-soft sm:p-5">
                <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">
                  Visit the Academy
                </h3>
                <div className="mt-3 space-y-3">
                  <ContactRow
                    icon={MapPin}
                    title="Address"
                    lines={[
                      BRAND.address.line1,
                      `${BRAND.address.line2}, ${BRAND.address.city}, ${BRAND.address.state} ${BRAND.address.pincode}`,
                    ]}
                    color="brand"
                    action={{
                      label: "Open in Maps",
                      href: BRAND.mapsLink,
                    }}
                  />
                  <ContactRow
                    icon={Phone}
                    title="Phone"
                    lines={[BRAND.phone]}
                    color="confidence"
                    action={{ label: "Call now", href: `tel:${BRAND.phoneRaw}` }}
                  />
                  <ContactRow
                    icon={Clock}
                    title="Working Hours"
                    lines={["Monday to Saturday", "8:00 AM – 8:00 PM"]}
                    color="brand"
                  />
                </div>
              </div>

              {/* Map embed — shorter */}
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-white p-1.5 shadow-soft">
                <iframe
                  title="Spoken English by Rahi Sir location map"
                  src={BRAND.mapsEmbed}
                  width="100%"
                  height="180"
                  style={{ border: 0, borderRadius: "0.875rem" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Quick actions */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="btn btn-outline btn-sm"
                >
                  <Phone className="h-4 w-4 text-brand" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — inquiry form */}
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-white p-4 shadow-soft sm:p-6">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-confidence/8" />
              <div className="relative">
                <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                  Book Free Trial Class
                </h3>
                <p className="mt-1 text-small text-muted-foreground">
                  Fill your details. Our team will call within a few hours to
                  schedule your free session.
                </p>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-5 flex flex-col items-center justify-center rounded-xl border border-success/30 bg-success/8 p-6 text-center"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-white">
                        <CheckCircle2 className="h-6 w-6" />
                      </span>
                      <h4 className="mt-3 font-heading text-base font-bold text-foreground">
                        Trial Class Booked!
                      </h4>
                      <p className="mt-1 text-small text-muted-foreground">
                        Thank you. Our team will call you shortly to confirm
                        your free trial slot.
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="mt-3 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
                      >
                        Book Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="mt-4 space-y-3"
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        <Field label="Your Name" required>
                          <input
                            type="text"
                            name="name"
                            required
                            minLength={2}
                            placeholder="e.g. Rahul Kumar"
                            className="w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
                          />
                        </Field>
                        <Field label="Phone Number" required>
                          <input
                            type="tel"
                            name="phone"
                            required
                            pattern="[0-9+\-\s]{10,15}"
                            placeholder="e.g. 90153 41661"
                            className="w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
                          />
                        </Field>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <Field label="Course Interest">
                          <select
                            name="course"
                            defaultValue=""
                            className="w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                          >
                            <option value="" disabled>
                              Select a course
                            </option>
                            {COURSES.map((c) => (
                              <option key={c.id} value={c.title}>
                                {c.title}
                              </option>
                            ))}
                            <option value="Not sure">Not sure yet</option>
                          </select>
                        </Field>
                        <Field label="Current English Level">
                          <select
                            name="level"
                            defaultValue=""
                            className="w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                          >
                            <option value="" disabled>
                              Pick your level
                            </option>
                            <option value="Beginner">
                              Beginner (just starting)
                            </option>
                            <option value="Intermediate">
                              Intermediate (some words)
                            </option>
                            <option value="Advanced">
                              Advanced (can manage)
                            </option>
                          </select>
                        </Field>
                      </div>

                      <Field label="Message (optional)">
                        <textarea
                          name="message"
                          rows={2}
                          placeholder="Anything you'd like Rahi Sir to know before your trial class?"
                          className="w-full resize-none rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </Field>

                      <AnimatePresence>
                        {status === "error" && (
                          <motion.p
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="rounded-lg bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive"
                          >
                            {error}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn btn-primary w-full"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Booking your trial...
                          </>
                        ) : (
                          <>
                            <CalendarCheck className="h-5 w-5" />
                            Book Free Trial Class
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-muted-foreground">
                        🔒 Your details are kept private. Used only to schedule
                        your trial class.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-foreground">
        {label}
        {required && <span className="text-confidence"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  title,
  lines,
  color,
  action,
}: {
  icon: React.ElementType;
  title: string;
  lines: string[];
  color: "brand" | "confidence";
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          color === "confidence"
            ? "bg-confidence/10 text-confidence"
            : "bg-brand-light text-brand"
        }`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
        {lines.map((line, i) => (
          <p
            key={i}
            className={`text-sm text-foreground ${i === 0 ? "font-medium" : ""}`}
          >
            {line}
          </p>
        ))}
        {action && (
          <a
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="mt-0.5 inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
          >
            {action.label} →
          </a>
        )}
      </div>
    </div>
  );
}

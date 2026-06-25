"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GALLERY_IMAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Classroom Sessions",
  "Academic Coaching",
  "Small Batches",
  "Skill Development",
  "Faculty Guidance",
  "Doubt Clearing",
  "IT Training",
  "Student Activities",
];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images =
    filter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(() => {
    setLightbox((prev) =>
      prev === null ? null : (prev + 1) % images.length,
    );
  }, [images.length]);
  const prevImage = useCallback(() => {
    setLightbox((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length,
    );
  }, [images.length]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-background section-y"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-brand/6 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            tone="brand"
            title={
              <>
                A Glimpse Into{" "}
                <span className="text-gradient-brand">Academy Life</span>
              </>
            }
            subtitle="Real moments from focused classrooms, academic coaching, skill development, and individual guidance."
          />
        </Reveal>

        {/* Filter pills — compact, scrollable on mobile */}
        <Reveal delay={0.08}>
          <div className="mt-5 flex flex-wrap justify-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
                  filter === cat
                    ? "bg-brand text-white shadow-brand"
                    : "border border-border bg-white text-muted-foreground hover:border-brand/40 hover:text-brand",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry grid — tighter gap */}
        <div className="mt-5 columns-1 gap-3 sm:columns-2 lg:columns-3 [&>*]:mb-3">
          {images.map((img, i) => (
            <Reveal key={img.src + i} delay={(i % 3) * 0.04}>
              <motion.button
                onClick={() => setLightbox(i)}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative block w-full overflow-hidden rounded-xl border border-border/60 shadow-soft"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-2.5 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-md bg-white/95 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-dark">
                    {img.category}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-brand">
                    <ZoomIn className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.figure
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="max-h-[80vh] w-auto rounded-xl object-contain"
              />
              <figcaption className="mt-2 text-center text-xs text-white/85">
                <span className="font-semibold text-white">
                  {images[lightbox].category}
                </span>
                {" — "}
                {images[lightbox].alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

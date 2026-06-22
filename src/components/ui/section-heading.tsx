import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "brand" | "confidence" | "mixed";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  tone = "brand",
}: SectionHeadingProps) {
  const eyebrowColor =
    tone === "confidence"
      ? "text-confidence bg-confidence/10"
      : tone === "mixed"
        ? "text-brand-dark bg-brand-light"
        : "text-brand bg-brand-light";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("chip", eyebrowColor)}>
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-h2 font-bold">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-subtitle text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

type CountUpProps = {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function CountUp({
  end,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, end, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (val) => {
        setDisplay(
          decimals > 0
            ? val.toFixed(decimals)
            : Math.round(val).toLocaleString("en-IN"),
        );
      },
    });
    return () => controls.stop();
  }, [inView, end, duration, delay, decimals, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

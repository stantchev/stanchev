"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { RevealFx, useInViewport } from "@once-ui-system/core";

export function RevealOnView({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(ref);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (inViewport) setSeen(true);
  }, [inViewport]);

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <RevealFx revealed={seen} translateY="8" speed={350} delay={delay} fillWidth>
        {children}
      </RevealFx>
    </div>
  );
}

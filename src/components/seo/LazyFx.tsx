"use client";

import { useEffect, useRef, useState } from "react";
import { Mask, MatrixFx, ParticleFx } from "@once-ui-system/core";

function useVisible(rootMargin = "80px") {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin });
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, visible };
}

export function MatrixCorner({ color, side = "left" }: { color: string; side?: "left" | "right" }) {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {visible && (
        <Mask position="absolute" top="0" left={side === "left" ? "0" : undefined} right={side === "right" ? "0" : undefined} radius={33} x={side === "left" ? 25 : 75} y={0}>
          <MatrixFx size={1.5} colors={[color as never]} flicker />
        </Mask>
      )}
    </div>
  );
}

export function ParticleGate() {
  const { ref, visible } = useVisible("0px");
  return (
    <div ref={ref} aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {visible && (
        <Mask position="absolute" top="0" left="0" x={50} y={50} radius={100}>
          <ParticleFx opacity={70} fill interactive speed={1} intensity={40} pointerEvents="none" />
        </Mask>
      )}
    </div>
  );
}

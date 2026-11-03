"use client";

import { useEffect, useState } from "react";
import { Column } from "@once-ui-system/core";

type Item = { id: string; text: string };

export function PostToc() {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    let nodes = Array.from(article.querySelectorAll<HTMLElement>("h2[id]"));
    if (nodes.length < 3) nodes = Array.from(article.querySelectorAll<HTMLElement>("h2[id], h3[id]"));

    setItems(nodes.map((n) => ({ id: n.id, text: (n.textContent || "").trim() })));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-80px 0px -65% 0px" },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  if (items.length < 2) return null;

  return (
    <Column as="nav" aria-label="Съдържание на статията" gap="4">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          style={{
            display: "block",
            padding: "6px 12px",
            fontSize: 14,
            lineHeight: 1.4,
            textDecoration: "none",
            borderLeft: `2px solid ${active === item.id ? "var(--brand-solid-strong)" : "var(--neutral-alpha-weak)"}`,
            color: active === item.id ? "var(--neutral-on-background-strong)" : "var(--neutral-on-background-weak)",
          }}
        >
          {item.text}
        </a>
      ))}
    </Column>
  );
}

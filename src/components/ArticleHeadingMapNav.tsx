"use client";
import React, { useEffect, useRef, useState } from "react";
import { Column, Row, Flex, SmartLink, Text, Tooltip } from "@once-ui-system/core";

interface Heading {
  id: string;
  text: string;
  level: number;
  top: number;
}

interface ArticleHeadingMapNavProps {
  containerSelector?: string;
}

function getHeadings(containerSelector?: string): Heading[] {
  const container = containerSelector
    ? document.querySelector(containerSelector)
    : document;
  if (!container) return [];
  const elements = Array.from(
    container.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]")
  );
  return elements.map((el) => ({
    id: el.id,
    text: el.textContent || "",
    level: Number(el.tagName.substring(1)),
    top: el.getBoundingClientRect().top + window.scrollY,
  }));
}

const SIDEBAR_HEIGHT = 400; // px, can be made a prop
const MIN_DOT_SPACING = 24; // px, minimum vertical space between dots

const ArticleHeadingMapNav: React.FC<ArticleHeadingMapNavProps> = ({ containerSelector }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Collect headings and their positions
  const updateHeadings = () => {
    const hs = getHeadings(containerSelector);
    setHeadings(hs);
  };

  // Find the active heading based on scroll
  const updateActive = () => {
    const scroll = window.scrollY;
    let current: Heading | null = null;
    for (let i = 0; i < headings.length; i++) {
      if (scroll + 160 >= headings[i].top) {
        current = headings[i];
      } else {
        break;
      }
    }
    setActiveId(current ? current.id : headings[0]?.id || null);
  };

  useEffect(() => {
    updateHeadings();
    window.addEventListener("resize", updateHeadings);
    window.addEventListener("scroll", updateActive);
    return () => {
      window.removeEventListener("resize", updateHeadings);
      window.removeEventListener("scroll", updateActive);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    updateActive();
    // eslint-disable-next-line
  }, [headings]);

  // Calculate proportional positions
  let positions: number[] = [];
  if (headings.length > 1) {
    const min = headings[0].top;
    const max = headings[headings.length - 1].top;
    const range = max - min || 1;
    positions = headings.map((h) =>
      Math.max(
        0,
        Math.min(
          SIDEBAR_HEIGHT - MIN_DOT_SPACING,
          ((h.top - min) / range) * (SIDEBAR_HEIGHT - MIN_DOT_SPACING)
        )
      )
    );
  } else if (headings.length === 1) {
    positions = [SIDEBAR_HEIGHT / 2];
  }

  return (
    <Column
      ref={sidebarRef}
      style={{
        position: "relative",
        height: SIDEBAR_HEIGHT,
        width: 220,
        minWidth: 180,
        maxWidth: 260,
        background: "var(--neutral-alpha-weak)",
        borderRadius: 16,
        padding: 16,
        boxSizing: "border-box",
        overflow: "visible",
      }}
      gap={undefined}
    >
      <Text variant="label-strong-s" marginBottom="8" style={{ letterSpacing: 1 }}>
        В тази статия
      </Text>
      <div style={{ position: "relative", height: SIDEBAR_HEIGHT - 32 }}>
        {headings.map((h, i) => (
          <Tooltip key={h.id} content={h.text} label={h.text}>
            <Flex
              style={{
                position: "absolute",
                top: positions[i],
                left: 0,
                right: 0,
                zIndex: 2,
                alignItems: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => {
                const el = document.getElementById(h.id);
                if (el) {
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 120,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <Row
                width={activeId === h.id ? 8 : 6}
                height={activeId === h.id ? 8 : 6}
                radius="full"
                background={activeId === h.id ? "brand-strong" : "neutral-alpha-medium"}
                marginRight="8"
                style={{ transition: "all 0.2s" }}
              />
              <Text
                variant={activeId === h.id ? "body-strong-s" : "body-default-s"}
                style={{
                  color: activeId === h.id ? "var(--brand-strong)" : "var(--neutral-on-background-weak)",
                  maxWidth: 160,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: 14,
                  transition: "color 0.2s",
                }}
                title={h.text}
              >
                {h.text}
              </Text>
            </Flex>
          </Tooltip>
        ))}
      </div>
    </Column>
  );
};

export default ArticleHeadingMapNav; 
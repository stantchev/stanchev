"use client";

import { Fragment, useState, type MouseEvent, type ReactNode } from "react";
import { Button, IconButton, type IconName } from "@once-ui-system/core";

type Kind = "email" | "phone";
type Base = {
  kind: Kind;
  parts: readonly string[];
  subject?: string;
};

const realValue = (kind: Kind, parts: readonly string[]) =>
  kind === "email" ? `${parts[0]}@${parts.slice(1).join(".")}` : parts.join("");

const realHref = (kind: Kind, parts: readonly string[], subject?: string) =>
  kind === "email"
    ? `mailto:${realValue(kind, parts)}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`
    : `tel:${realValue(kind, parts)}`;

function Display({ kind, parts }: Pick<Base, "kind" | "parts">) {
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {kind === "email" && i === 1 && <span>@</span>}
          {kind === "email" && i > 1 && <span>.</span>}
          {kind === "phone" && i > 0 && " "}
          <span>{p}</span>
        </Fragment>
      ))}
    </>
  );
}

function armLink(e: { currentTarget: HTMLElement }, href: string) {
  e.currentTarget.setAttribute("href", href);
}

export function ContactText({ kind, parts, subject, className }: Base & { className?: string }) {
  const href = realHref(kind, parts, subject);
  return (
    <a
      href="#kontakt"
      className={className}
      onPointerEnter={(e) => armLink(e, href)}
      onFocus={(e) => armLink(e, href)}
      onTouchStart={(e) => armLink(e, href)}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <Display kind={kind} parts={parts} />
    </a>
  );
}

export function ContactButton({ kind, parts, subject, children, icon, variant = "secondary", size = "m" }: Base & { children: ReactNode; icon?: IconName; variant?: "primary" | "secondary" | "tertiary"; size?: "s" | "m" | "l" }) {
  return (
    <Button
      variant={variant}
      size={size}
      prefixIcon={icon}
      onClick={() => {
        window.location.href = realHref(kind, parts, subject);
      }}
    >
      {children}
    </Button>
  );
}

export function ContactIconButton({ kind, parts, subject, icon, label, size = "l" }: Base & { icon: IconName; label: string; size?: "s" | "m" | "l" }) {
  return (
    <IconButton
      icon={icon}
      variant="secondary"
      size={size}
      tooltip={label}
      aria-label={label}
      onClick={() => {
        window.location.href = realHref(kind, parts, subject);
      }}
    />
  );
}

export function ContactCopyButton({ kind, parts, children = "Копирай", size = "s" }: Base & { children?: ReactNode; size?: "s" | "m" }) {
  const [done, setDone] = useState(false);
  return (
    <Button
      variant="tertiary"
      size={size}
      prefixIcon={done ? "check" : "document"}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(realValue(kind, parts));
          setDone(true);
          setTimeout(() => setDone(false), 1500);
        } catch {
        }
      }}
    >
      {done ? "Копирано" : children}
    </Button>
  );
}

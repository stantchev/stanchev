"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Fade, Flex, Line, ToggleButton, iconLibrary } from "@once-ui-system/core";
import {
  routes,
  display,
  person,
  about,
  blog,
  work,
  seoServices,
  contact,
} from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

// ✅ SVG иконата
const HandshakeIcon = ({
  width = "16",
  height = "16",
  ...props
}: {
  width?: string | number;
  height?: string | number;
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
);

// ✅ Регистрирай я в iconLibrary
iconLibrary.handshake = HandshakeIcon;

const TimeDisplay = ({
  timeZone,
  locale = "bg-BG",
}: {
  timeZone: string;
  locale?: string;
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Fade
  className={styles.headerBlur}
  show="s"
  fillWidth
  position="fixed"
  top="0"
  height="80"
  zIndex={8}
/>
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/za-men"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/za-men"
                    label={about.label}
                    selected={pathname === "/za-men"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    aria-label="За мен"
                    href="/za-men"
                    selected={pathname === "/za-men"}
                  />
                </>
              )}
              {routes["/seo-proekti"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/seo-proekti"
                    label={work.label}
                    selected={pathname.startsWith("/seo-proekti")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    aria-label="SEO проекти"
                    href="/seo-proekti"
                    selected={pathname.startsWith("/seo-proekti")}
                  />
                </>
              )}
              {routes["/seo-uslugi"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="handshake"
                    href="/seo-uslugi"
                    label={seoServices.label}
                    selected={pathname.startsWith("/seo-uslugi")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="handshake"
                    aria-label="SEO услуги"
                    href="/seo-uslugi"
                    selected={pathname.startsWith("/seo-uslugi")}
                  />
                </>
              )}
              {routes["/kontakti"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="email"
                    href="/kontakti"
                    label={contact.label}
                    selected={pathname.startsWith("/kontakti")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="email"
                    href="/kontakti"
                    aria-label="Контакти"
                    selected={pathname.startsWith("/kontakti")}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    aria-label="SEO блог"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, seoServices, contact } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser, FaThLarge, FaRegNewspaper } from "react-icons/fa";
import { MdOutlineRocketLaunch, MdOutlineMail } from "react-icons/md";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
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
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Row s={{ hide: true }}>{person.location}</Row>}
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton href="/" selected={pathname === "/"}>
                  <AiOutlineHome size={18} />
                </ToggleButton>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/za-men"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/za-men"
                      label={about.label}
                      selected={pathname === "/za-men"}
                    >
                      <FaUser size={16} />
                    </ToggleButton>
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/za-men"
                      selected={pathname === "/za-men"}
                    >
                      <FaUser size={16} />
                    </ToggleButton>
                  </Row>
                </>
              )}
              {routes["/seo-proekti"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/seo-proekti"
                      label={work.label}
                      selected={pathname.startsWith("/seo-proekti")}
                    >
                      <FaThLarge size={16} />
                    </ToggleButton>
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/seo-proekti"
                      selected={pathname.startsWith("/seo-proekti")}
                    >
                      <FaThLarge size={16} />
                    </ToggleButton>
                  </Row>
                </>
              )}
              {routes["/seo-uslugi"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/seo-uslugi"
                      label={seoServices.label}
                      selected={pathname.startsWith("/seo-uslugi")}
                    >
                      <MdOutlineRocketLaunch size={18} />
                    </ToggleButton>
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/seo-uslugi"
                      selected={pathname.startsWith("/seo-uslugi")}
                    >
                      <MdOutlineRocketLaunch size={18} />
                    </ToggleButton>
                  </Row>
                </>
              )}
              {routes["/kontakti"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/kontakti"
                      label={contact.label}
                      selected={pathname.startsWith("/kontakti")}
                    >
                      <MdOutlineMail size={18} />
                    </ToggleButton>
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/kontakti"
                      selected={pathname.startsWith("/kontakti")}
                    >
                      <MdOutlineMail size={18} />
                    </ToggleButton>
                  </Row>
                </>
              )}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/blog"
                      label={blog.label}
                      selected={pathname.startsWith("/blog")}
                    >
                      <FaRegNewspaper size={16} />
                    </ToggleButton>
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/blog"
                      selected={pathname.startsWith("/blog")}
                    >
                      <FaRegNewspaper size={16} />
                    </ToggleButton>
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};

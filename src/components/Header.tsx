"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton, Column, Text, Card, MegaMenu } from "@once-ui-system/core";
import { FaSearch, FaLink, FaShoppingCart, FaWrench, FaChartLine } from "react-icons/fa";

import { routes, display, person, about, blog, work, seoServices, contact } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser, FaThLarge, FaRegNewspaper,FaGlobe } from "react-icons/fa";
import { MdOutlineRocketLaunch, MdOutlineMail } from "react-icons/md";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "bg-BG" }) => {
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
  const [isSeoHovered, setIsSeoHovered] = useState(false);
  const [isWebHovered, setIsWebHovered] = useState(false);
  const [seoTimeoutId, setSeoTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [webTimeoutId, setWebTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleSeoMouseEnter = () => {
    if (seoTimeoutId) {
      clearTimeout(seoTimeoutId);
      setSeoTimeoutId(null);
    }
    setIsSeoHovered(true);
  };

  const handleSeoMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setIsSeoHovered(false);
    }, 300); // 300ms забавяне
    setSeoTimeoutId(timeoutId);
  };

  const handleWebMouseEnter = () => {
    if (webTimeoutId) {
      clearTimeout(webTimeoutId);
      setWebTimeoutId(null);
    }
    setIsWebHovered(true);
  };

  const handleWebMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setIsWebHovered(false);
    }, 300); // 300ms забавяне
    setWebTimeoutId(timeoutId);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (seoTimeoutId) clearTimeout(seoTimeoutId);
      if (webTimeoutId) clearTimeout(webTimeoutId);
    };
  }, [seoTimeoutId, webTimeoutId]);

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
      {/* Desktop Header - Top Menu Only */}
      <Row
        fitHeight
        className={`${styles.position} s-flex-hide`}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Row>{person.location}</Row>}
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
                    <MegaMenu
                      menuGroups={[
                        {
                          id: "seo",
                          label: seoServices.label,
                          suffixIcon: "chevronDown",
                          content: (
                            <Column gap="16" padding="8">
                              <Text variant="heading-strong-l" marginBottom="8">SEO услуги</Text>
                              <Row gap="12">
                                <Card padding="16" radius="m" border="neutral-alpha-medium">
                                  <Column gap="8">
                                    <FaSearch size={20} color="var(--brand-medium)" />
                                    <a href="/seo-uslugi/seo-optimizatsiya" style={{ textDecoration: "none" }}>
                                      <Text variant="label-strong-m">SEO Оптимизация</Text>
                                    </a>
                                    <Text variant="body-default-s" onBackground="neutral-weak">Техническо и съдържателно SEO</Text>
                                  </Column>
                                </Card>
                                <Card padding="16" radius="m" border="neutral-alpha-medium">
                                  <Column gap="8">
                                    <FaLink size={20} color="var(--accent-medium)" />
                                    <a href="/seo-uslugi/link-building" style={{ textDecoration: "none" }}>
                                      <Text variant="label-strong-m">Link Building</Text>
                                    </a>
                                    <Text variant="body-default-s" onBackground="neutral-weak">Авторитет и релевантност</Text>
                                  </Column>
                                </Card>
                                <Card padding="16" radius="m" border="neutral-alpha-medium">
                                  <Column gap="8">
                                    <FaShoppingCart size={20} color="var(--success-medium)" />
                                    <a href="/seo-uslugi/ecommerce-seo" style={{ textDecoration: "none" }}>
                                      <Text variant="label-strong-m">SEO за Магазини</Text>
                                    </a>
                                    <Text variant="body-default-s" onBackground="neutral-weak">Категории, филтри, схеми</Text>
                                  </Column>
                                </Card>
                              </Row>
                              <Row>
                                <a href="/seo-uslugi" style={{ textDecoration: "none" }}>
                                  <Text variant="body-default-s" onBackground="brand-strong">Всички SEO услуги →</Text>
                                </a>
                              </Row>
                            </Column>
                          ),
                        },
                      ]}
                    />
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
              {routes["/web"] && (
                <>
                  <Row s={{ hide: true }}>
                    <MegaMenu
                      menuGroups={[
                        {
                          id: "web",
                          label: "Уеб Услуги",
                          suffixIcon: "chevronDown",
                          content: (
                            <Column gap="16" padding="8">
                              <Text variant="heading-strong-l" marginBottom="8">Уеб услуги</Text>
                              <Row gap="12">
                                <Card padding="16" radius="m" border="neutral-alpha-medium">
                                  <Column gap="8">
                                    <FaGlobe size={20} color="var(--brand-medium)" />
                                    <a href="/web/izrabotka-sajt" style={{ textDecoration: "none" }}>
                                      <Text variant="label-strong-m">Изработка на сайт</Text>
                                    </a>
                                    <Text variant="body-default-s" onBackground="neutral-weak">Лендинги и корпоративни сайтове</Text>
                                  </Column>
                                </Card>
                                <Card padding="16" radius="m" border="neutral-alpha-medium">
                                  <Column gap="8">
                                    <FaWrench size={20} color="var(--accent-medium)" />
                                    <a href="/web/custom-plagini" style={{ textDecoration: "none" }}>
                                      <Text variant="label-strong-m">Custom плъгини</Text>
                                    </a>
                                    <Text variant="body-default-s" onBackground="neutral-weak">WordPress, интеграции</Text>
                                  </Column>
                                </Card>
                                <Card padding="16" radius="m" border="neutral-alpha-medium">
                                  <Column gap="8">
                                    <FaChartLine size={20} color="var(--success-medium)" />
                                    <a href="/web/seo-integratsiya" style={{ textDecoration: "none" }}>
                                      <Text variant="label-strong-m">SEO интеграция</Text>
                                    </a>
                                    <Text variant="body-default-s" onBackground="neutral-weak">Schema, CWV, Sitemaps</Text>
                                  </Column>
                                </Card>
                              </Row>
                              <Row>
                                <a href="/web" style={{ textDecoration: "none" }}>
                                  <Text variant="body-default-s" onBackground="brand-strong">Всички уеб услуги →</Text>
                                </a>
                              </Row>
                            </Column>
                          ),
                        },
                      ]}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/web"
                      selected={pathname.startsWith("/web")}
                    >
                      <FaGlobe size={16} />
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
        <Flex fillWidth horizontal="end" vertical="center" s={{ hide: true }}>
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

      {/* Mobile Header - Bottom Menu Only */}
      <Row
        fitHeight
        className={`${styles.position} s-flex-show`}
        position="fixed"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        bottom="0"
      >
        <Row
          background="page"
          border="neutral-alpha-weak"
          radius="m-4"
          shadow="l"
          padding="s"
          horizontal="center"
          zIndex={1}
        >
          <Row gap="s" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
            {routes["/"] && (
              <ToggleButton href="/" selected={pathname === "/"}>
                <AiOutlineHome size={18} />
              </ToggleButton>
            )}
            {routes["/za-men"] && (
              <ToggleButton
                href="/za-men"
                selected={pathname === "/za-men"}
              >
                <FaUser size={16} />
              </ToggleButton>
            )}
            {routes["/seo-uslugi"] && (
              <ToggleButton
                href="/seo-uslugi"
                selected={pathname.startsWith("/seo-uslugi")}
              >
                <MdOutlineRocketLaunch size={18} />
              </ToggleButton>
            )}
            {routes["/web"] && (
              <ToggleButton
                href="/web"
                selected={pathname.startsWith("/web")}
              >
                <FaGlobe size={16} />
              </ToggleButton>
            )}
            {routes["/blog"] && (
              <ToggleButton
                href="/blog"
                selected={pathname.startsWith("/blog")}
              >
                <FaRegNewspaper size={16} />
              </ToggleButton>
            )}
            {routes["/kontakti"] && (
              <ToggleButton
                href="/kontakti"
                selected={pathname.startsWith("/kontakti")}
              >
                <MdOutlineMail size={18} />
              </ToggleButton>
            )}
            {display.themeSwitcher && (
              <ThemeToggle />
            )}
          </Row>
        </Row>
      </Row>
    </>
  );
};

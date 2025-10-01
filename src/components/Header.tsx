import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";
import {
  about,
  blog,
  work,
  seoServices,
  contact,
} from "@/resources";
import styles from "./Header.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser, FaThLarge, FaRegNewspaper } from "react-icons/fa";
import { MdOutlineRocketLaunch, MdOutlineMail } from "react-icons/md";
import React from "react";

export const Header = () => {
  return (
    <>
      <Fade hide fillWidth position="fixed" height="80" zIndex={9} />
      <Fade fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Fade
        className={styles.headerBlur}
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
        horizontal="center"
        data-border="rounded"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
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
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {/* Homepage */}
              <ToggleButton
                href="/"
                aria-label="Начало"
                label={<AiOutlineHome size={18} />}
              />
              <Line background="neutral-alpha-medium" vert maxHeight="24" />

              {/* About */}
              <ToggleButton
                href="/za-men"
                label={
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <FaUser size={16} />
                    <span className="nav-label">{about.label}</span>
                  </span>
                }
              />

              {/* Projects */}
              <ToggleButton
                href="/seo-proekti"
                label={
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <FaThLarge size={16} />
                    <span className="nav-label">{work.label}</span>
                  </span>
                }
              />

              {/* Services */}
              <ToggleButton
                href="/seo-uslugi"
                label={
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <MdOutlineRocketLaunch size={18} />
                    <span className="nav-label">{seoServices.label}</span>
                  </span>
                }
              />

              {/* Contacts */}
              <ToggleButton
                href="/kontakti"
                label={
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <MdOutlineMail size={18} />
                    <span className="nav-label">{contact.label}</span>
                  </span>
                }
              />

              {/* Blog */}
              <ToggleButton
                href="/blog"
                label={
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <FaRegNewspaper size={16} />
                    <span className="nav-label">{blog.label}</span>
                  </span>
                }
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;

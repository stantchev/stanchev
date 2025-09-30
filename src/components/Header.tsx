import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";
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
import styles from "./Header.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser, FaThLarge, FaRegNewspaper } from "react-icons/fa";
import { MdOutlineRocketLaunch, MdOutlineMail } from "react-icons/md";
import React from "react";

export const Header = () => {
  return (
    <>
      <Fade hide fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
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
        horizontal="center"
        data-border="rounded"
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
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
              {/* Homepage button: icon only, always visible */}
              <ToggleButton 
                href="/" 
                aria-label="Начало" 
                label={<AiOutlineHome size={18} />} 
              />
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {/* About nav item */}
              <ToggleButton 
                className="s-flex-hide" 
                href="/za-men" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><FaUser size={16}/>{about.label}</span>} 
              />
              <ToggleButton 
                className="s-flex-show" 
                aria-label="За мен" 
                href="/za-men" 
                label={<FaUser size={16} />} 
              />
              {/* Projects nav item */}
              <ToggleButton 
                className="s-flex-hide" 
                href="/seo-proekti" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><FaThLarge size={16}/>{work.label}</span>} 
              />
              <ToggleButton 
                className="s-flex-show" 
                aria-label="SEO проекти" 
                href="/seo-proekti" 
                label={<FaThLarge size={16} />} 
              />
              {/* Services nav item */}
              <ToggleButton 
                className="s-flex-hide" 
                href="/seo-uslugi" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><MdOutlineRocketLaunch size={18}/>{seoServices.label}</span>} 
              />
              <ToggleButton 
                className="s-flex-show" 
                aria-label="SEO услуги" 
                href="/seo-uslugi" 
                label={<MdOutlineRocketLaunch size={18} />} 
              />
              {/* Contacts nav item */}
              <ToggleButton 
                className="s-flex-hide" 
                href="/kontakti" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><MdOutlineMail size={18}/>{contact.label}</span>} 
              />
              <ToggleButton 
                className="s-flex-show" 
                aria-label="Контакти" 
                href="/kontakti" 
                label={<MdOutlineMail size={18} />} 
              />
              {/* Blog nav item */}
              <ToggleButton 
                className="s-flex-hide" 
                href="/blog" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><FaRegNewspaper size={16}/>{blog.label}</span>} 
              />
              <ToggleButton 
                className="s-flex-show" 
                aria-label="SEO блог" 
                href="/blog" 
                label={<FaRegNewspaper size={16} />} 
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;


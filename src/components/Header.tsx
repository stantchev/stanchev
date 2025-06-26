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

export const Header = () => {
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
              {/* Static navigation links with react-icons */}
              <ToggleButton 
                href="/" 
                aria-label="Начало" 
                label={<AiOutlineHome size={18} />} 
              />
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <ToggleButton 
                className="s-flex-hide" 
                href="/za-men" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><FaUser size={16}/>{about.label}</span>} 
              />
              <ToggleButton className="s-flex-show" aria-label="За мен" href="/za-men" />
              <ToggleButton 
                className="s-flex-hide" 
                href="/seo-proekti" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><FaThLarge size={16}/>{work.label}</span>} 
              />
              <ToggleButton className="s-flex-show" aria-label="SEO проекти" href="/seo-proekti" />
              <ToggleButton 
                className="s-flex-hide" 
                href="/seo-uslugi" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><MdOutlineRocketLaunch size={18}/>{seoServices.label}</span>} 
              />
              <ToggleButton className="s-flex-show" aria-label="SEO услуги" href="/seo-uslugi" />
              <ToggleButton 
                className="s-flex-hide" 
                href="/kontakti" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><MdOutlineMail size={18}/>{contact.label}</span>} 
              />
              <ToggleButton className="s-flex-show" aria-label="Контакти" href="/kontakti" />
              <ToggleButton 
                className="s-flex-hide" 
                href="/blog" 
                label={<span style={{display:'flex',alignItems:'center',gap:6}}><FaRegNewspaper size={16}/>{blog.label}</span>} 
              />
              <ToggleButton className="s-flex-show" aria-label="SEO блог" href="/blog" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;

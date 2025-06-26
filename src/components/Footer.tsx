import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaDev } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: <FaFacebook size={20} />,
  linkedin: <FaLinkedin size={20} />,
  github: <FaGithub size={20} />,
  twitter: <FaTwitter size={20} />,
  instagram: <FaInstagram size={20} />,
  devto: <FaDev size={20} />,
  email: <MdOutlineMail size={20} />,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      paddingY="16"
      paddingX="24"
      horizontal="center"
      className={styles['footer-root']}
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Flex
        fillWidth
        horizontal="space-between"
        vertical="center"
        style={{ width: '100%' }}
      >
        <Text variant="body-default-xs" onBackground="neutral-strong" style={{ fontWeight: 400, fontSize: '0.95em', textAlign: 'left' }}>
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name} /</Text>
          <a href="/obshti-usloviya"
            className={styles.footerLink}
            style={{ 
              textDecoration: 'underline dotted', 
              color: 'var(--accent)', 
              transition: 'color 0.2s',
              cursor: 'pointer'
            }}
          >Общи условия</a>
        </Text>
        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                  className={styles.footerIcon}
                  style={{ 
                    transition: 'color 0.2s',
                    cursor: 'pointer'
                  }}
                >
                  {socialIconMap[item.icon]}
                </IconButton>
              ),
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

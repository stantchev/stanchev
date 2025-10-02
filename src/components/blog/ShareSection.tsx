"use client";

import { Row, Text, Button, useToast } from "@once-ui-system/core";
import { socialSharing } from "@/resources";

interface ShareSectionProps {
  title: string;
  url: string;
}

interface SocialPlatform {
  name: string;
  icon: string;
  label: string;
  generateUrl: (title: string, url: string) => string;
}

const socialPlatforms: Record<string, SocialPlatform> = {
  linkedin: {
    name: "linkedin",
    icon: "linkedin",
    label: "LinkedIn",
    generateUrl: (title, url) => 
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  facebook: {
    name: "facebook",
    icon: "facebook",
    label: "Facebook",
    generateUrl: (title, url) => 
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  messenger: {
    name: "messenger",
    icon: "messenger",
    label: "Messenger",
    generateUrl: (title, url) => 
      `fb-messenger://share/?link=${encodeURIComponent(url)}`,
  },
  viber: {
    name: "viber",
    icon: "viber",
    label: "Viber",
    generateUrl: (title, url) => 
      `viber://forward?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`,
  },
};

export function ShareSection({ title, url }: ShareSectionProps) {
  const { addToast } = useToast();
  // Don't render if sharing is disabled
  if (!socialSharing.display) {
    return null;
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      addToast({
        variant: "success",
        message: "Link copied to clipboard",
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      addToast({
        variant: "danger",
        message: "Failed to copy link",
      });
    }
  };

  // Get enabled platforms
  const enabledPlatforms = Object.entries(socialSharing.platforms)
    .filter(([_, enabled]) => enabled && _ !== 'copyLink')
    .map(([platformKey]) => ({ key: platformKey, ...socialPlatforms[platformKey] }))
    .filter(platform => platform.name); // Filter out platforms that don't exist in our definitions

  return (
    <Row fillWidth center gap="16" marginTop="32" marginBottom="16">
      <Text variant="label-default-m" onBackground="neutral-weak">
        Сподели статията:
      </Text>
      <Row data-border="rounded" gap="16" horizontal="center" wrap>
        {enabledPlatforms.map((platform, index) => (
          <Button key={index} variant="secondary" size="s" href={platform.generateUrl(title, url)} prefixIcon={platform.icon} />
        ))}
        
        {socialSharing.platforms.copyLink && (
          <Button
            variant="secondary"
            size="s"
            onClick={handleCopy}
            prefixIcon="openLink"
          />
        )}
      </Row>
    </Row>
  );
}

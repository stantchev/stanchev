import React, { ReactNode } from "react";
import { Icon, Flex, Text, Column } from "@once-ui-system/core";

interface FeedbackProps {
  variant?: "info" | "danger" | "warning" | "success";
  icon?: boolean;
  title?: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const variantIconMap: {
  [key in "info" | "danger" | "warning" | "success"]: string;
} = {
  info: "info",
  danger: "danger",
  warning: "warning",
  success: "check",
};

const Feedback: React.FC<FeedbackProps> = ({
  variant = "info",
  icon = true,
  title,
  description,
  className,
  style,
  children,
}) => {
  return (
    <Flex
      fillWidth
      radius="l"
      border={`${variant}-medium`}
      background={`${variant}-medium`}
      vertical="start"
      role="alert"
      aria-live="assertive"
      className={className}
      style={style}
    >
      {icon && (
        <Flex paddingY="16" paddingLeft="16">
          <Icon
            padding="2"
            radius="m"
            onBackground={`${variant}-medium`}
            name={variantIconMap[variant]}
            aria-hidden="true"
          />
        </Flex>
      )}
      <Column fillWidth padding="16" gap="24" vertical="center">
        {(title || description) && (
          <Column fillWidth gap="4">
            {title && (
              <Flex fillWidth paddingY="4">
                <Text
                  variant="heading-strong-xs"
                  onBackground={`${variant}-medium`}
                  role="heading"
                  aria-level={2}
                >
                  {title}
                </Text>
              </Flex>
            )}
            {description && (
              <Text
                marginBottom="2"
                marginTop="4"
                variant="body-default-s"
                onBackground={`${variant}-strong`}
              >
                {description}
              </Text>
            )}
          </Column>
        )}
        {children}
      </Column>
    </Flex>
  );
};

Feedback.displayName = "Feedback";
export { Feedback };
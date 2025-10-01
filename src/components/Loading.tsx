import React from 'react';
import { Flex, Text, Media } from '@once-ui-system/core';

interface LoadingProps {
  text?: string;
  size?: 's' | 'm' | 'l';
}

export const Loading: React.FC<LoadingProps> = ({ 
  text = "Зареждане...", 
  size = "m" 
}) => {
  return (
    <Flex 
      horizontal="center" 
      vertical="center" 
      paddingY="xl"
      gap="m"
    >
      <Media
        loading
        radius="l"
        aspectRatio="1/1"
        src=""
        style={{
          width: size === 's' ? '32px' : size === 'l' ? '64px' : '48px',
          height: size === 's' ? '32px' : size === 'l' ? '64px' : '48px',
        }}
      />
      <Text variant="body-default-s" onBackground="neutral-weak">
        {text}
      </Text>
    </Flex>
  );
};

export default Loading;

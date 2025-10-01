import React from 'react';
import { Flex, Text } from '@once-ui-system/core';

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
      <div 
        className="loading-spinner"
        style={{
          width: size === 's' ? '16px' : size === 'l' ? '32px' : '24px',
          height: size === 's' ? '16px' : size === 'l' ? '32px' : '24px',
          border: '2px solid var(--neutral-alpha-medium)',
          borderTop: '2px solid var(--brand-on-background-strong)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <Text variant="body-default-s" onBackground="neutral-weak">
        {text}
      </Text>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Flex>
  );
};

export default Loading;

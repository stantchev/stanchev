import React from 'react';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'blue' | 'pink' | 'teal';
}

const CyberCard: React.FC<CyberCardProps> = ({
  children,
  className = '',
  glowColor = 'purple',
}) => {
  const glowColors = {
    purple: 'before:border-cyber-purple before:shadow-[0_0_10px_rgba(147,51,234,0.5)] hover:before:shadow-[0_0_15px_rgba(147,51,234,0.7)]',
    blue: 'before:border-cyber-blue before:shadow-[0_0_10px_rgba(6,182,212,0.5)] hover:before:shadow-[0_0_15px_rgba(6,182,212,0.7)]',
    pink: 'before:border-cyber-pink before:shadow-[0_0_10px_rgba(236,72,153,0.5)] hover:before:shadow-[0_0_15px_rgba(236,72,153,0.7)]',
    teal: 'before:border-cyber-teal before:shadow-[0_0_10px_rgba(20,184,166,0.5)] hover:before:shadow-[0_0_15px_rgba(20,184,166,0.7)]',
  };

  return (
    <div className={`relative cyber-border ${glowColors[glowColor]} ${className}`}>
      <div className="bg-cyber-dark border border-cyber-gray rounded-lg p-6 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CyberCard;
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'font-medium rounded-md transition duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-dark flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-cyber-purple text-white hover:bg-cyber-purple/90 focus:ring-cyber-purple',
    secondary: 'bg-cyber-blue text-white hover:bg-cyber-blue/90 focus:ring-cyber-blue',
    outline: 'bg-transparent border-2 border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 focus:ring-cyber-purple',
    ghost: 'bg-transparent text-cyber-purple hover:bg-cyber-purple/10 focus:ring-cyber-purple',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled || isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-t-2 border-white" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
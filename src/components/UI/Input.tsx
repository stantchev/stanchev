import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = true,
  icon,
  className = '',
  ...props
}) => {
  const widthClasses = fullWidth ? 'w-full' : '';
  
  return (
    <div className={`mb-4 ${widthClasses}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            {icon}
          </div>
        )}
        <input
          className={`w-full px-4 py-3 ${
            icon ? 'pl-10' : ''
          } bg-cyber-gray border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyber-purple focus:border-transparent transition duration-200 ${
            error ? 'border-cyber-red focus:ring-cyber-red' : ''
          } ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-cyber-red">{error}</p>}
    </div>
  );
};

export default Input;
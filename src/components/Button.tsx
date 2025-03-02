import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary',
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-medium tracking-wide transition-all duration-200';
  const variants = {
    primary: 'bg-ink-900 text-white hover:bg-ink-800',
    secondary: 'bg-brand-cream text-ink-900 border border-ink-900 hover:bg-gray-50'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
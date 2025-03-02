import React from 'react';

export function Logo({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' | 'small' }) {
  const sizes = {
    small: 'h-6',
    default: 'h-8',
    large: 'h-12'
  };

  return (
    <img 
      src="/logo.png" 
      alt="TestLoop Labs" 
      className={`${sizes[size]} ${className}`}
    />
  );
}
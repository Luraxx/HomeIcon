import React from 'react';

export interface IconProps {
  size?: number | string;
  className?: string;
  title?: string;
}

export const Home: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  title = 'Home - D in D' 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Outer D */}
      <circle cx="12" cy="12" r="10" />
      <path d="M22 2v20" />
      {/* Inner d */}
      <circle cx="12" cy="12" r="5" />
      <path d="M17 7v10" />
    </svg>
  );
};
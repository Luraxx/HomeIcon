import React from 'react';

export interface IconProps {
  size?: number | string;
  className?: string;
  title?: string;
}

export const Home: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  title = 'Home' 
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
      {/* House outline with centered roof */}
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      {/* Door */}
      <path d="M9 22V12h6v10" />
    </svg>
  );
};
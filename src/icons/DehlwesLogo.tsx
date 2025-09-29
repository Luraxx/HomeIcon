import React from 'react';
import { IconProps } from './Home';

export const DehlwesLogo: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  title = 'dehlwes logo' 
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
      {/* Circle part of 'd' */}
      <circle cx="12" cy="12" r="8" />
      {/* Stem of 'd' */}
      <path d="M20 4v16" />
    </svg>
  );
};
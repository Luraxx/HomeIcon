import React from 'react';
import { IconProps } from './Home';

export const DehlwesSimple: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  title = 'dehlwes simple D' 
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
      {/* Simple D shape */}
      <path d="M6 3 V21" />
      <path d="M6 3 C18 3, 18 21, 6 21" />
    </svg>
  );
};
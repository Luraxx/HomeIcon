import React from 'react';
import { IconProps } from './Home';

export const DehlwesWordmark: React.FC<IconProps> = ({ 
  size = 120, 
  className = '', 
  title = 'dehlwes' 
}) => {
  return (
    <svg
      width={size}
      height={typeof size === 'number' ? size * 0.25 : '30'} // Maintain aspect ratio for wordmark
      viewBox="0 0 120 30"
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
      {/* d */}
      <circle cx="11" cy="18" r="6" />
      <path d="M17 6v18" />
      
      {/* e */}
      <circle cx="30" cy="18" r="6" />
      <path d="M24 18h12" />
      
      {/* h */}
      <path d="M42 6v18M42 15h8M50 9v15" />
      
      {/* l */}
      <path d="M58 6v18" />
      
      {/* w */}
      <path d="M66 9v15l4-12 4 12V9" />
      
      {/* e */}
      <circle cx="86" cy="18" r="6" />
      <path d="M80 18h12" />
      
      {/* s */}
      <path d="M98 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4" />
    </svg>
  );
};
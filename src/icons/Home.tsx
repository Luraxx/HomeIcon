import * as React from "react";

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

      {/* Außen-D */}
      <path d="M5 3 V21" />
      <path d="M5 3 C19 3, 19 21, 5 21" />

      {/* Innen-D */}
      <path d="M9 7 V17" />
      <path d="M9 7 C16 7, 16 17, 9 17" />
    </svg>
  );
};

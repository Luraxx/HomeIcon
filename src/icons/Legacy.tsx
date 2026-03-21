import * as React from "react";

export interface IconProps {
  size?: number | string;
  className?: string;
  title?: string;
}

export const Legacy: React.FC<IconProps> = ({
  size = 24,
  className = '',
  title = 'Legacy',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>

      {/* X lines */}
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />

      {/* Center dot */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />

      {/* Corner dots – diagonal pairs similar: TL+BR large, TR+BL small */}
      <circle cx="4" cy="4" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="4" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="4" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="20" r="2.0" fill="currentColor" stroke="none" />
    </svg>
  );
};

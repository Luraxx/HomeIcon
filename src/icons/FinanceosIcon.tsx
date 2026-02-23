import * as React from "react";

export interface IconProps {
  size?: number | string;
  className?: string;
  title?: string;
}

export const FinanceosIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  title = 'Financeos',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="finaceno-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#050506" />
          <stop offset="1" stopColor="#071635" />
        </linearGradient>

        <radialGradient id="finaceno-top" cx="35%" cy="28%" r="75%">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d6dee7" />
        </radialGradient>

        <filter id="finaceno-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#000" floodOpacity="0.6" />
        </filter>

        <linearGradient id="finaceno-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <rect width="1024" height="1024" fill="url(#finaceno-bg)" />

      <g filter="url(#finaceno-shadow)">
        <circle cx="512" cy="528" r="300" fill="#000" opacity="0.18" />
        <circle cx="512" cy="512" r="300" fill="url(#finaceno-top)" />
        <circle cx="512" cy="512" r="292" fill="none" stroke="url(#finaceno-rim)" strokeWidth="16" />
      </g>
    </svg>
  );
};

import React from 'react';
import { IconProps } from './Home';

/**
 * DehlwesLogo - Default weight (stroke-width: 2.0)
 * D in D design with extended inner baseline
 */
export const DehlwesLogo: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  title = 'dehlwes logo' 
}) => {
  const sw = 2.0;
  const gap = sw;
  const outerLeft = 2;
  const outerTop = 2;
  const outerBottom = 22;
  const outerArcStart = 10;
  const outerRadius = 10;
  const innerLeft = outerLeft + sw + gap;
  const innerTop = outerTop + sw + gap;
  const innerBottom = outerBottom - sw - gap;
  const innerRadius = (innerBottom - innerTop) / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Outer D */}
      <path d={`M ${outerLeft} ${outerTop} L ${outerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerLeft} ${outerTop} L ${outerArcStart} ${outerTop}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerArcStart} ${outerTop} A ${outerRadius} ${outerRadius} 0 0 1 ${outerArcStart} ${outerBottom}`} strokeWidth={sw} fill="none"/>
      <path d={`M ${outerArcStart} ${outerBottom} L ${outerLeft} ${outerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      {/* Inner D */}
      <path d={`M ${innerLeft} ${innerTop} L ${innerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${innerLeft} ${innerTop} L ${outerArcStart} ${innerTop}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerArcStart} ${innerTop} A ${innerRadius} ${innerRadius} 0 0 1 ${outerArcStart} ${innerBottom}`} strokeWidth={sw} fill="none"/>
      <path d={`M ${outerArcStart} ${innerBottom} L ${outerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
    </svg>
  );
};

/**
 * DehlwesLogoLight - Thin weight (stroke-width: 1.5)
 */
export const DehlwesLogoLight: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  title = 'dehlwes logo light' 
}) => {
  const sw = 1.5;
  const gap = sw;
  const outerLeft = 2;
  const outerTop = 2;
  const outerBottom = 22;
  const outerArcStart = 10;
  const outerRadius = 10;
  const innerLeft = outerLeft + sw + gap;
  const innerTop = outerTop + sw + gap;
  const innerBottom = outerBottom - sw - gap;
  const innerRadius = (innerBottom - innerTop) / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Outer D */}
      <path d={`M ${outerLeft} ${outerTop} L ${outerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerLeft} ${outerTop} L ${outerArcStart} ${outerTop}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerArcStart} ${outerTop} A ${outerRadius} ${outerRadius} 0 0 1 ${outerArcStart} ${outerBottom}`} strokeWidth={sw} fill="none"/>
      <path d={`M ${outerArcStart} ${outerBottom} L ${outerLeft} ${outerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      {/* Inner D */}
      <path d={`M ${innerLeft} ${innerTop} L ${innerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${innerLeft} ${innerTop} L ${outerArcStart} ${innerTop}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerArcStart} ${innerTop} A ${innerRadius} ${innerRadius} 0 0 1 ${outerArcStart} ${innerBottom}`} strokeWidth={sw} fill="none"/>
      <path d={`M ${outerArcStart} ${innerBottom} L ${outerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
    </svg>
  );
};

/**
 * DehlwesLogoMedium - Medium weight (stroke-width: 2.5)
 */
export const DehlwesLogoMedium: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  title = 'dehlwes logo medium' 
}) => {
  const sw = 2.5;
  const gap = sw;
  const outerLeft = 2;
  const outerTop = 2;
  const outerBottom = 22;
  const outerArcStart = 10;
  const outerRadius = 10;
  const innerLeft = outerLeft + sw + gap;
  const innerTop = outerTop + sw + gap;
  const innerBottom = outerBottom - sw - gap;
  const innerRadius = (innerBottom - innerTop) / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Outer D */}
      <path d={`M ${outerLeft} ${outerTop} L ${outerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerLeft} ${outerTop} L ${outerArcStart} ${outerTop}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerArcStart} ${outerTop} A ${outerRadius} ${outerRadius} 0 0 1 ${outerArcStart} ${outerBottom}`} strokeWidth={sw} fill="none"/>
      <path d={`M ${outerArcStart} ${outerBottom} L ${outerLeft} ${outerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      {/* Inner D */}
      <path d={`M ${innerLeft} ${innerTop} L ${innerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${innerLeft} ${innerTop} L ${outerArcStart} ${innerTop}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerArcStart} ${innerTop} A ${innerRadius} ${innerRadius} 0 0 1 ${outerArcStart} ${innerBottom}`} strokeWidth={sw} fill="none"/>
      <path d={`M ${outerArcStart} ${innerBottom} L ${outerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
    </svg>
  );
};

/**
 * DehlwesLogoBold - Bold weight (stroke-width: 3.0)
 */
export const DehlwesLogoBold: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  title = 'dehlwes logo bold' 
}) => {
  const sw = 3.0;
  const gap = sw;
  const outerLeft = 2;
  const outerTop = 2;
  const outerBottom = 22;
  const outerArcStart = 10;
  const outerRadius = 10;
  const innerLeft = outerLeft + sw + gap;
  const innerTop = outerTop + sw + gap;
  const innerBottom = outerBottom - sw - gap;
  const innerRadius = (innerBottom - innerTop) / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Outer D */}
      <path d={`M ${outerLeft} ${outerTop} L ${outerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerLeft} ${outerTop} L ${outerArcStart} ${outerTop}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerArcStart} ${outerTop} A ${outerRadius} ${outerRadius} 0 0 1 ${outerArcStart} ${outerBottom}`} strokeWidth={sw} fill="none"/>
      <path d={`M ${outerArcStart} ${outerBottom} L ${outerLeft} ${outerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      {/* Inner D */}
      <path d={`M ${innerLeft} ${innerTop} L ${innerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${innerLeft} ${innerTop} L ${outerArcStart} ${innerTop}`} strokeWidth={sw} strokeLinecap="square"/>
      <path d={`M ${outerArcStart} ${innerTop} A ${innerRadius} ${innerRadius} 0 0 1 ${outerArcStart} ${innerBottom}`} strokeWidth={sw} fill="none"/>
      <path d={`M ${outerArcStart} ${innerBottom} L ${outerLeft} ${innerBottom}`} strokeWidth={sw} strokeLinecap="square"/>
    </svg>
  );
};
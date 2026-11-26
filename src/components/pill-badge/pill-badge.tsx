import type { ReactNode } from 'react';
import './pill-badge.scss';

export interface PillBadgeProps {
  children: ReactNode;
  className?: string;
  showDot?: boolean;
}

export default function PillBadge({
  children,
  className = '',
  showDot = false,
}: PillBadgeProps) {
  return (
    <span className={`pill-badge ${className}`.trim()}>
      {showDot && <span className="pill-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

import type { ReactNode } from 'react';
import './layout-container.scss';

export type LayoutDirection = 'horizontal' | 'vertical' | 'grid';

export interface LayoutContainerProps {
  children: ReactNode;
  direction?: LayoutDirection;
  className?: string;
}

export default function LayoutContainer({
  children,
  direction = 'horizontal',
  className = '',
}: LayoutContainerProps) {
  return (
    <div className={`layout-container layout-container--${direction} ${className}`.trim()}>
      {children}
    </div>
  );
}

import type { ReactNode } from 'react';
import LayoutContainer from '../layout-container/layout-container';
import './content-group.scss';

export interface ContentGroupProps {
  platform: string;
  tagline?: string;
  children: ReactNode;
  className?: string;
}

export default function ContentGroup({
  platform,
  tagline,
  children,
  className = '',
}: ContentGroupProps) {
  return (
    <section className={`content-group ${className}`.trim()}>
      <header className="content-group__header">
        <div className="content-group__heading-row">
          <h2 className="content-group__title">{platform}</h2>
        </div>
        {tagline && <p className="content-group__tagline">{tagline}</p>}
      </header>
      <LayoutContainer direction="grid" className="content-group__grid">
        {children}
      </LayoutContainer>
    </section>
  );
}

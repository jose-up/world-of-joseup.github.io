import type { ReactNode } from 'react';
import PillBadge from '../../pill-badge/pill-badge';
import './content-item.scss';

export interface ContentItemProps {
  title: string;
  description: ReactNode;
  embed: ReactNode;
  badge?: string;
  className?: string;
}

export default function ContentItem({
  title,
  description,
  embed,
  badge,
  className = '',
}: ContentItemProps) {
  return (
    <article className={`content-item ${className}`.trim()}>
      <div className="content-item__embed">{embed}</div>
      <div className="content-item__details">
        <div className="content-item__header">
          <h3 className="content-item__title">{title}</h3>
          {badge && <PillBadge showDot>{badge}</PillBadge>}
        </div>
        <div className="content-item__description">{description}</div>
      </div>
    </article>
  );
}

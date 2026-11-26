import type { ReactNode } from 'react';
import PillBadge from '../pill-badge/pill-badge';
import './embed-card.scss';

export interface EmbedCardProps {
  title: string;
  platform: string;
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function EmbedCard({
  title,
  platform,
  children,
  href,
  className = '',
}: EmbedCardProps) {
  const card = (
    <section
      className={`embed-card ${href ? 'embed-card--interactive' : ''} ${className}`.trim()}
    >
      <header className="embed-card__header">
        <span className="embed-card__title">{title}</span>
        <PillBadge showDot className="embed-card__pill">
          {platform}
        </PillBadge>
      </header>
      <div className="embed-card__body">{children}</div>
    </section>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="embed-card__link"
      >
        {card}
      </a>
    );
  }

  return card;
}

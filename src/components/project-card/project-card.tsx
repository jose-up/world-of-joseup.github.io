import { useRef } from 'react';
import PillBadge from '../pill-badge/pill-badge';
import './project-card.scss';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface ProjectCardProps {
  title: string;
  description: string;
  status: ProjectStatus;
  mediaSrc: string;
  mediaType?: 'image' | 'video';
  posterSrc?: string;
  href?: string;
  tags?: string[];
  className?: string;
}

const STATUS_LABELS: Record<ProjectStatus, string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'Planned',
};

export default function ProjectCard({
  title,
  description,
  status,
  mediaSrc,
  mediaType = 'image',
  posterSrc,
  href,
  tags = [],
  className = '',
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (mediaType === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (mediaType === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const cardContent = (
    <article
      className={`project-card project-card--${status} ${href ? 'project-card--interactive' : ''} ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card__media">
        {mediaType === 'video' ? (
          <video
            ref={videoRef}
            src={mediaSrc}
            poster={posterSrc}
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img src={mediaSrc} alt={title} loading="lazy" />
        )}
        <div className="project-card__badge">
          <PillBadge showDot className={`project-card__pill--${status}`}>
            {STATUS_LABELS[status]}
          </PillBadge>
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        {tags.length > 0 && (
          <div className="project-card__tags">
            {tags.map((tag) => (
              <PillBadge key={tag} className="project-card__tag">
                {tag}
              </PillBadge>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

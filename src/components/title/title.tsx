import type { ReactNode } from 'react';
import './title.scss';

export interface TitleProps {
  text: ReactNode;
  className: string;
}

export default function Title({
  text,
  className,
}: TitleProps) {
  return (
    <h1 className={`title ${className}`}>
      {text}
    </h1>
  );
}

import type { ReactNode } from 'react';
import './title.scss';

export interface TitleProps {
  text?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function Title({
  text,
  children,
  className = '',
}: TitleProps) {
  return (
    <h1 className={`title ${className}`.trim()}>
      {text ?? children}
    </h1>
  );
}

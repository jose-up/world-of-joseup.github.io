import type { ReactNode } from 'react';
import './subtitle.scss';

export interface TitleProps {
  text: ReactNode;
  children: ReactNode;
  className: string;
  fontName: string;
}

export default function Title({
  text,
  children,
  className = '',
  fontName = ''
}: TitleProps) {
  return (
    <h2 className={`title ${className}`.trim()}>
      {text ?? children}
    </h2>
  );
}

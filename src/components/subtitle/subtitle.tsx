import type { CSSProperties, ReactNode } from 'react';
import './subtitle.scss';

export interface SubtitleProps {
  text: ReactNode;
  className?: string;
  font?: string;
  fontSize?: string;
  color?: string;
}

export default function Subtitle({
  text,
  className = '',
  font,
  fontSize,
  color,
}: SubtitleProps) {
  const inlineStyle: CSSProperties = {
    ...(font && { fontFamily: font }),
    ...(fontSize && { fontSize }),
    ...(color && { color }),
  };

  return (
    <h2 className={`subtitle ${className}`.trim()} style={inlineStyle}>
      {text}
    </h2>
  );
}

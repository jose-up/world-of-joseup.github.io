import type { CSSProperties, ReactNode } from 'react';
import './title.scss';

export interface TitleProps {
  text: ReactNode;
  className?: string;
  font?: string;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
}

export default function Title({
  text,
  className = '',
  font,
  fontSize,
  color,
  backgroundColor,
}: TitleProps) {
  const inlineStyle: CSSProperties = {
    ...(font && { fontFamily: font }),
    ...(fontSize && { fontSize }),
    ...(color && { color }),
    ...(backgroundColor && { backgroundColor }),
  };

  return (
    <h1 className={`title ${className}`.trim()} style={inlineStyle}>
      {text}
    </h1>
  );
}

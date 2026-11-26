import type { CSSProperties, ReactNode } from 'react';
import './text-and-images.scss';

export interface InformationContainer {
  image: string;
  alt: string;
  info: ReactNode;
  font?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function TextAndImages({
  image,
  alt,
  info,
  font,
  backgroundColor,
  textColor,
  className = '',
  orientation = 'horizontal',
}: InformationContainer) {
  const containerStyle: CSSProperties = {
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
  };

  const textStyle: CSSProperties = {
    ...(font && { fontFamily: font }),
  };

  return (
    <div
      className={`text-and-images text-and-images--${orientation} ${className}`.trim()}
      style={containerStyle}
    >
      <img
        src={image}
        alt={alt}
        className="built-in-image"
        loading="lazy"
      />
      <div className="text-and-images__info" style={textStyle}>
        {info}
      </div>
    </div>
  );
}

import type { ReactNode } from 'react';
import './text-and-images.scss';

export interface InformationContainer {
  image: string;
  alt: string;
  info: ReactNode;
  font: string;
  className: string;
}

export default function TextAndImages({
  image,
  alt,
  info,
  font,
  className,
}: InformationContainer) {
  return (
    <div className={`text-and-images ${className}`}>
      <img
        src={image}
        alt={alt}
        className="built-in-image"
      />
      <div
        className="text-and-images__info"
        style={{ fontFamily: font }}
      >
        {info}
      </div>
    </div>
  );
}

import type { ReactNode } from 'react';
import './text-and-images.scss';

export interface InformationContainer {
  image: string;
  alt?: string;
  info?: ReactNode;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
}

export default function TextAndImages({
  image,
  alt = '',
  info,
  children,
  className = '',
  imageClassName = '',
  textClassName = '',
}: InformationContainer) {
  return (
    <div className={`text-and-images ${className}`.trim()}>
      <img
        src={image}
        alt={alt}
        className={`text-and-images__image ${imageClassName}`.trim()}
      />
      <div className={`text-and-images__info ${textClassName}`.trim()}>
        {info ?? children}
      </div>
    </div>
  );
}

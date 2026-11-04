import type { ReactNode } from 'react';
import './text-and-images.scss';

export interface InformationContainer {
  image: string;
  info: string;
}

export default function TextAndImages({
  image,
  info,
}: InformationContainer) {
  return (
    <div className={"".trim()}>
      <img
        src={image}
        className={"".trim()}
      />
      <div className="test"></div>
    </div>
  );
}

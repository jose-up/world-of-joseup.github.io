// src/components/home-row/home-row.tsx
import { useLocation } from 'react-router-dom';
import IconRow, { type LinkedIcon } from "./icon-row/icon-row.tsx";
import PageButtons from './page-buttons/page-buttons.tsx';
import './home-row.scss';

const ROUTE_ICONS: Record<string, LinkedIcon[]> = {
  '/comp-sci': [
    { iconName: 'github', URL: 'https://github.com/jose-up' },
    { iconName: 'linkedin', URL: 'https://www.linkedin.com/in/joseph-zeru/' },
    { iconName: 'kaggle', URL: 'https://www.kaggle.com/josephzeru' },
    { iconName: 'binaryheart', URL: 'https://binaryheart.org/rose-hulman' },
  ],
  '/social-media': [
    { iconName: 'twitter', URL: 'https://x.com/joseup_bmp'},
    { iconName: 'pinterest', URL: 'https://www.pinterest.com/joseupdesignsstuff/' },
    { iconName: 'instagram', URL: 'https://www.instagram.com/joseup.mov/' },
    { iconName: 'youtube', URL: 'https://www.youtube.com/@joseup.mp4' },
  ],
  default: [
    { iconName: 'threads', URL: 'https://www.threads.net/@joseup_bmp' },
    { iconName: 'reddit', URL: 'https://www.reddit.com/user/SpiderRedd' },
    { iconName: 'spotify', URL: 'https://open.spotify.com/user/3wu8qv0nazznc8hj6bbp942n0?si=2353b3fbc54b49c0' },
  ],
};

export default function HomeRow() {
  const { pathname } = useLocation();
  const cleanPath = pathname.replace(/^#/, '');
  const activeIcons = ROUTE_ICONS[cleanPath] ?? ROUTE_ICONS.default;

  return (
    <nav className="home-row">
      <IconRow icons={activeIcons} />
      <PageButtons />
    </nav>
  );
}

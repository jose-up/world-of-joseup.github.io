import { Link, useLocation } from 'react-router-dom';
import './page-buttons.scss';

interface PageItem {
  path: string;
  label: string;
}

const PAGES: PageItem[] = [
  { path: '/', label: 'Main Page' },
  { path: '/comp-sci', label: 'Project Work' },
  { path: '/social-media', label: 'Social Media' },
];

export default function PageButtons() {
  const { pathname } = useLocation();

  return (
    <div className="nav-links">
      {PAGES.filter(({ path }) => path !== pathname).map(({ path, label }) => (
        <Link key={path} to={path} className="btn">
          {label}
        </Link>
      ))}
    </div>
  );
}

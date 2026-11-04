import './icon-row.scss';

const rawIcons = import.meta.glob<string>('../../../assets/link-icons/*.svg', {
  eager: true,
  import: 'default',
});

const ICONS = Object.fromEntries(
  Object.entries(rawIcons).map(([path, url]) => [
    path.split('/').pop()?.replace('.svg', '') ?? '',
    url,
  ])
);

export interface LinkedIcon {
  iconName: string;
  URL: string;
}

export default function IconRow({ icons }: { icons: LinkedIcon[] }) {
  const iconElements = icons
    .map(({ iconName, URL }) => {
      const src = ICONS[iconName];
      if (!src) return null;

      return (
        <a
          key={iconName}
          href={URL}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <img src={src} alt={`${iconName} link`} className="nav-icon" />
        </a>
      );
    })
    .filter(Boolean);

  if (iconElements.length === 0) return null;

  return <div className="iconRow">{iconElements}</div>;
}

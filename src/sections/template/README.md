# Section Templates & Utilities

## Files in This Directory

These are **templates and documentation** for building new sections. They are not bundled - use JSX, SCSS, and HTML only for actual section content.

### Available Resources

**Base Component:**
- `SectionComponent.jsx` - React component template you can extend

**HTML Template:**
- `base.html` - Static HTML structure reference (for teasers or static sections)

### Creating New Sections

Follow the pattern in `src/sections/about-me/`:

1. **Source folder:** `src/sections/{section-name}/`
   - `index.jsx` - Main component
   - `styles.scss` - Component styles
   - `script.js` - Logic (optional)

2. **Output folder:** `dist/{section-name}/`
   - `index.html` - Deployed page

## Styling Approach

Use **SCSS** with these patterns:

```scss
// Scoped component styles
@use '../../styles/_global/variables.scss' as *;
@use '../../styles/_global/styles.scss';

.section {
  // Your scoped styles
}

.card__title {
  // Nested selectors work in SCSS
}
```

Or use **CSS Modules**:

```jsx
import styles from './styles.module.scss';

<section className={styles.section}>
  <h1 className={styles.title}>Title</h1>
</section>
```

## Scripts Approach

Use **JavaScript** files:

```javascript
// Import global utilities
import { formatCurrency, showToast } from '../../scripts/_global/utils.js';

export default function Section() {
  // Your component logic
  
  const handleAction = () => {
    showToast('Action completed!', 'success');
  };
}
```

## Build Output

When you run `npm run build`:

- **Source JSX/SCSS** → Transpiled to browser-ready code
- **dist/{section-name}/index.html** → Final deployed page

The Markdown files in this directory are documentation only and won't be bundled.

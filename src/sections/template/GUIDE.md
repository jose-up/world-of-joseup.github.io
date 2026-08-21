# Guide to Creating Sections

## Quick Reference

This directory contains templates and documentation for building new website sections using **JSX, SCSS, and HTML** only.

## Directory Structure

```
src/sections/{your-section}/
├── index.jsx        # Main component (required)
├── styles.scss      # Component styles (optional - can inline)
└── script.js        # Section logic (optional if using JSX)
```

## Creating a Section

### 1. Regular Section with JSX/SCSS

**Step 1:** Create the source folder and files:
```bash
mkdir src/sections/{your-section-name}
cd src/sections/{your-section-name}
touch index.jsx styles.scss script.js
```

**Step 2:** Example `index.jsx` structure:
```jsx
import React from 'react';
import './styles.scss'; // or import from CSS Modules

export default function Section() {
  return (
    <section className="section">
      <h1>Your Title</h1>
      {/* Your content */}
    </section>
  );
}
```

**Step 3:** Create `dist/{your-section-name}/` with HTML output.

### 2. Using SCSS Modules

For scoped styling:
```jsx
import styles from './styles.module.scss'; // CSS modules

export default function Section() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Your Title</h1>
    </section>
  );
}
```

### 3. Global Resources

**Import global styles:**
```scss
@use '../../styles/_global/styles.scss' as *;
@use '../../styles/_global/variables.scss' as *;
```

**Import utilities:**
```javascript
import { formatCurrency, formatDate, showToast } from '../../scripts/_global/utils.js';
```

## Creating Teaser Pages

For teaser/coming-soon pages:

1. Create folder in `dist/updating/{name}/`
2. Add `index.html` with inline content and styles
3. No SCSS/TypeScript needed for teasers - all HTML/CSS inline

## File Requirements Per Section

- **Required:** `src/sections/{name}/index.jsx` (or .tsx)
- **Required:** `dist/{name}/index.html` (for deployment)
- **Optional:** `styles.scss`, `script.js` in source folder
- **Documentation:** `.md` files for reference only (not bundled)

## Building

```bash
npm run build  # Generates dist/
npm run preview # Local preview
npm run deploy # Deploy to GitHub Pages
```

The `dist/` folder contains your final pages.

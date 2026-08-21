# Section Creation Checklist

Use this before creating a new section to ensure completeness.

## Type of Section

- [ ] **Regular section** - Full content with JSX/SCSS (follow steps below)
- [ ] **Teaser page** - Static HTML only in `dist/updating/{name}/`

## Regular Section Files

### Required Files

- [ ] `src/sections/{name}/index.jsx` or `.tsx` (React component)
  - Export default component function
  - Import styles if using SCSS/CSS modules
  
- [ ] `dist/{name}/index.html` (HTML output)
  - Set page title with meta description  
  - Include global stylesheet reference
  - Link to section-specific styles/scripts

### Optional Files

- [ ] `src/sections/{name}/styles.scss` or `.css`
  - Use CSS Modules for scoping: `{name}.module.scss`
  - Import global variables: `@use '../../styles/_global/variables.scss' as *`
  - Import base styles if needed
  
- [ ] `src/sections/{name}/script.js` (if not using JSX for logic)
  - Keep scripts modular and import from `_global/utils.js`

## Build & Verify

```bash
npm run build           # Generate dist/ output
npm run preview         # Test locally
```

### Before Commit

- [ ] All files created
- [ ] No console errors in preview
- [ ] Tested responsive design
- [ ] Links and navigation work

## Deploy

```bash
npm run deploy
```

This outputs `dist/` folder for GitHub Pages.

---

**Tip:** Check `src/sections/about-me/` for a complete example!

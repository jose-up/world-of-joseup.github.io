### Specification Overview
This website uses HTML, SCSS, and TypeScript files for code buiding. GitHub Pages is used for hosting, and React is used as the framework for component-based architecture with maintainable code and efficient performance.


### Adding a New Section to the Website

When making a new section for the website, we want to maintain a consistent style and clean codebase. Do the following when asked to make a new section:

1. Create a folder with the section name in 'dist/example/'. Then put an 'index.html' file in that folder so that the URL follows a clean pathing structure.

For example, if I want to add 'new-section', I would create 'dist/new-section/index.html' and then the URL would be 'https://world-of-joseup.github.io/new-section/'.

2. Add the styles and functions to the src directory. Create a folder in 'src//sections/' with the section name and files for functionality and styling.

For example, if I'm adding new-section, I would create 'src/sections/new-section/' and then add the necessary files for functionality and styling.

### Adding a Teaser Section

Teaser sections are used to update the website for huge milestones in content-creation, large-scale Computer Science projects, development improvements, etc. This will follow the same fundamental steps as adding a new section, but with some pathing changes:

- New folder should be created in 'dist/updating/' with the section name and an 'index.html' file in that folder so that the URL follows a clean pathing structure.
- No SCSS or TypeScript files are needed for teaser sections. Instead, put the required tags into the 'index.html' file in the teaser section folder.
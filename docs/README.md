# DataInsight AI Documentation

This directory contains the VitePress-powered documentation for DataInsight AI.

## Structure

```
docs/
├── .vitepress/
│   └── config.ts          # VitePress configuration
├── index.md               # Documentation home page
├── guide/                 # Getting started guides
│   ├── what-is-csv-visualizer.md
│   ├── getting-started.md
│   └── quick-start.md
├── features/              # Feature documentation
│   ├── overview.md
│   ├── data-upload.md
│   ├── ai-analysis.md
│   ├── chart-types.md
│   ├── natural-language.md
│   └── export.md
├── charts/                # Chart type guides (placeholder)
└── advanced/              # Advanced topics
    ├── data-requirements.md
    ├── best-practices.md
    ├── troubleshooting.md
    └── faq.md
```

## Development

### Running Locally

Start the documentation development server:

```bash
npm run docs:dev
```

The docs will be available at `http://localhost:5173/docs/`

### Building

Build the documentation for production:

```bash
npm run docs:build
```

Output will be in `docs/.vitepress/dist/`

### Preview Build

Preview the production build:

```bash
npm run docs:preview
```

## Writing Documentation

### Markdown Features

VitePress supports:
- Standard Markdown
- GitHub Flavored Markdown
- Custom containers (tip, warning, danger)
- Code syntax highlighting
- Frontmatter

### Custom Containers

```markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a danger notice
:::

::: info
This is an info box
:::
```

### Code Blocks

```markdown
```typescript
const hello = "world";
```
```

### Links

Internal links:
```markdown
[Getting Started](/guide/getting-started)
[Features](/features/overview)
```

External links:
```markdown
[Anthropic](https://anthropic.com)
```

## Adding New Pages

1. Create a new `.md` file in the appropriate directory
2. Add frontmatter (optional):
   ```markdown
   ---
   title: Page Title
   description: Page description
   ---
   ```
3. Write your content
4. Update `.vitepress/config.ts` to add to sidebar navigation

## Configuration

Main configuration is in `.vitepress/config.ts`:

- **Title & Description**: Set site metadata
- **Theme Config**: Customize theme settings
- **Navigation**: Define top navigation links
- **Sidebar**: Configure sidebar menu structure
- **Search**: Built-in local search enabled

## Deployment

The documentation can be deployed as static files. The built files are in `docs/.vitepress/dist/`.

### Deploy Options

1. **GitHub Pages**: Push `dist/` to gh-pages branch
2. **Vercel**: Connect repository and set build command
3. **Netlify**: Connect repository and set build command
4. **Static hosting**: Upload `dist/` contents

## Contributing

When adding or updating documentation:

1. Follow the existing structure
2. Use clear, concise language
3. Include examples where helpful
4. Add screenshots for UI features
5. Test locally before committing
6. Update table of contents if needed

## Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Vue.js](https://vuejs.org/) (powers VitePress)

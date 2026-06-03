# Akhilesh Gonabal Portfolio

Personal portfolio built with [Astro](https://astro.build/). The site is static, content-first, and outputs to `build/`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run check
npm run build
```

## Deployment

The Astro migration is published from the `astro-migration` branch through GitHub Actions. GitHub Pages should use **GitHub Actions** as the source, and the custom domain is stored in `static/CNAME`.

## Content

Projects live in `src/content/projects/` and publications live in `src/content/publications/`. Profile, experience, education, and skills are in `src/data/profile.ts`.

# Portafolio

This is a small portafolio written to host a beautiful version of my cv, and in a near future write or publish notes/posts about what I'm learning. In a tech summary, this project was build with:

- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction): Frontend framework to manage pages and have a router.
- [TailwindCSS](https://tailwindcss.com/): CSS framework to create beautiful UIs.
- [blobshape](https://github.com/lokesh-coder/blobshape): Used to generate random SVG shapes used as ClipPath with images.
- [Dynamics.js](http://dynamicsjs.com/): Used to have smooth animations between shape transitions.

[Blobs Generator app](https://lokesh-coder.github.io/blobs.app/?e=6&gw=6&se=7817&c=d1d8e0&o=0) was an inspiration to build the `BurbleShape` component.

[Here](https://docs.google.com/document/d/1FtRdLs8d7dJ5iCgMeFI1Zg6BQEAvPKgqjyQ2AsEnEc4/edit) you can find a small Design Doc about this project.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

This project has a linter configuration with ESLint and Prettier. If your editor has available a prettier extension, after you save a file (will depend of your configuration), that will be auto formatted. However, you always can run the lint and lint fix commands with:

```bash
# npm
npm run lint
npm run lintfix

# pnpm
pnpm run lint
pnpm run lintfix

# yarn
yarn lint
yarn lintfix

# bun
bun run lint
bun run lintfix
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

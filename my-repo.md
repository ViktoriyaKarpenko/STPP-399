This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  workflows/
    deploy.yml
assets/
  deploy-status.png
  gh-actions-perm-1.png
  gh-actions-perm-2.png
  how-it-works.png
  repo-settings.png
  template-step-1.png
  template-step-2.png
src/
  css/
    about.css
    base.css
    container.css
    download.css
    footer.css
    gallery.css
    gameplay.css
    header.css
    hero.css
    legal.css
    reset.css
    reviews.css
    styles.css
  js/
    burgerMenu.js
    gallerySwiper.js
  partials/
    about.html
    download.html
    footer.html
    gallery.html
    gameplay.html
    header.html
    hero.html
    reviews.html
  public/
    favicon_1х.png
    favicon_2х.png
  index.html
  main.js
  privacy.html
  service.html
.editorconfig
.gitignore
.prettierrc.json
package.json
README.md
vite.config.js
```

# Files

## File: .github/workflows/deploy.yml
```yaml
name: Build and deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1

      - name: Install and build 🔧
        run: |
          npm install
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.0
        with:
          branch: gh-pages
          folder: dist
```

## File: src/css/about.css
```css
/* Styles for Mobile devices */

/* Styles for Desktop devices */
/*@media only screen and (min-width: 1440px) {
}*/
```

## File: src/css/download.css
```css
/* Styles for Mobile devices */
/* Styles for Desktop devices */
/*@media only screen and (min-width: 1440px) {
}*/
```

## File: src/css/gallery.css
```css
/* Styles for Mobile devices */

/* Styles for Desktop devices */
/*@media only screen and (min-width: 1440px) {
}*/
```

## File: src/css/gameplay.css
```css
/* Styles for Mobile devices */
/* Styles for Desktop devices */
/*@media only screen and (min-width: 1440px) {
}*/
```

## File: src/css/hero.css
```css
/* Styles for Mobile devices */

/*@media screen and (min-width: 320px) and (min-resolution: 192dpi) {
}*/

/* Styles for Desktop devices */
/*@media screen and (min-width: 1440px) {
}
@media screen and (min-width: 1440px) and (min-resolution: 192dpi) {

}*/
```

## File: src/css/legal.css
```css
/* Styles for Mobile devices */
.legal-wraper {
  color: var(--color-secondary);
  padding-top: 52px;
  padding-bottom: 120px;
}

.back-link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 48px;
  text-align: center;
  border-radius: 16px;
  font-weight: 500;
  font-size: 20px;
  color: var(--color-secondary);
  background-color: var(--background-color-button);
}

.legal-title {
  font-weight: 400;
  font-size: 40px;
  line-height: 1.2;
}

.legal-subtitle {
  font-weight: 400;
  font-size: 28px;
  line-height: 1.29;
}

/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .legal-wraper {
    padding-top: 48px;
    padding-bottom: 144px;
  }

  .legal-title {
    font-size: 64px;
    line-height: 1.09;
  }

  .back-link {
    width: 177px;
    transition: background-color var(--transition-efect);
  }

  .back-link:hover {
    background-color: var(--background-color-hover);
  }
}
```

## File: src/css/reset.css
```css
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
```

## File: src/css/reviews.css
```css
/* Styles for Mobile devices */
/* Styles for Desktop devices */
/*@media only screen and (min-width: 1440px) {

}*/
```

## File: src/js/gallerySwiper.js
```javascript

```

## File: src/partials/about.html
```html
<section class="section about" id="about">
  <div class="container">
    <h2 class="section-title">About the game</h2>
  </div>
</section>
```

## File: src/partials/download.html
```html
<section class="section download" id="download">
  <div class="container">
    <h2 class="section-title">Why Download</h2>
  </div>
</section>
```

## File: src/partials/gallery.html
```html
<section class="section gallery" id="gallery">
  <div class="container">
    <h2 class="section-title">Gallery</h2>
  </div>
</section>
```

## File: src/partials/gameplay.html
```html
<section class="section gameplay" id="gameplay">
  <div class="container">
    <h2 class="section-title">Core Gameplay</h2>
  </div>
</section>
```

## File: src/partials/hero.html
```html
<section class="section hero">
  <div class="container">
    <h2 class="section-title">PIRATE MATCH</h2>
  </div>
</section>
```

## File: src/partials/reviews.html
```html
<section class="section reviews" id="reviews">
  <div class="container">
    <h2 class="section-title">Reviews</h2>
  </div>
</section>
```

## File: src/privacy.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon_2х.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon_1х.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Privacy Policy</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <main>
      <div class="container legal-wraper">
        <a class="back-link" href="./index.html">Back to home</a>
        <h1 class="legal-title">Privacy Policy</h1>
      </div>
    </main>
    <load src="./partials/footer.html" />
  </body>
</html>
```

## File: src/service.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon_2х.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon_1х.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Terms of Service</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <main>
      <div class="container legal-wraper">
        <a class="back-link" href="./index.html">Back to home</a>
        <h1 class="legal-title">Terms of Service</h1>
      </div>
    </main>
    <load src="./partials/footer.html" />
  </body>
</html>
```

## File: .editorconfig
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = false

[*.{json,md,yaml}]
indent_size = 2
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## File: .prettierrc.json
```json
{
  "printWidth": 80,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "proseWrap": "always"
}
```

## File: README.md
```markdown

```

## File: vite.config.js
```javascript
import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      SortCss({
        sort: 'mobile-first',
      }),
      ViteImageOptimizer({
        exclude: 'sprite.svg',
        png: {
          quality: 60,
        },
        jpeg: {
          quality: 60,
        },
        jpg: {
          quality: 60,
        },
        webp: {
          quality: 60,
        },
      }),
    ],
  };
});
```

## File: src/css/base.css
```css
:root {
  --background-color-header: #55245b;
  --background-color-main: #022450;
  --background-color-secondary: #f1dcb6;
  --background-color-additional: #b5ebfd;
  --background-color-link: linear-gradient(180deg, #ec9e25 0%, #d36b17 127.08%);
  --background-color-hover: #4a4a4a;
  --color-main: #0f1618;
  --color-secondary: #efeafe;
  --color-icon: #ec9e25;

  --transition-efect: 250ms ease-in-out;
  --tracking: 0.05em;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 124px;
}

body {
  font-family: 'Quicksand', sans-serif;
  background-color: var(--background-color-main);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  color: var(--color-main);
}

body[data-scroll='locked'] {
  overflow: hidden;
}

main {
  flex-grow: 1;
}

section {
  padding-top: 40px;
  padding-bottom: 40px;
}

h1,
h2,
h3,
h4,
a {
  font-family: 'Fredoka', sans-serif;
}
.section-title {
  display: block;
  width: fit-content;
  padding: 3px 16px;
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
  color: var(--background-color-main);
  background-color: var(--background-color-additional);
  margin: 0 auto;
}

.section-subtitle {
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.2;
  color: var(--color-secondary);
}

.google-play-link {
  display: block;
  width: 100%;
  padding: 13px 16px;
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  color: var(--color-secondary);
  background: var(--background-color-link);
}

@media only screen and (min-width: 1440px) {
  section {
    padding-top: 120px;
    padding-bottom: 100px;
  }

  .google-play-link {
    width: fit-content;
    height: 46px;
  }
}
```

## File: src/css/container.css
```css
/* Styles for Mobile devices */
.container {
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .container {
    max-width: 1440px;
    padding: 0 120px;
  }
}
```

## File: src/css/footer.css
```css
/* Styles for Mobile devices */

/* Styles for Desktop devices */
/*@media only screen and (min-width: 1440px) {
}*/
```

## File: src/css/header.css
```css
/* Styles for Mobile devices */
.header {
  position: fixed;
  z-index: 800;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  background-color: var(--background-color-header);
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: none;
}

.burger-btn,
.btn-close {
  background-color: transparent;
  border: none;
  padding: 16px;
}

.burger-menu-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.btn-close {
  position: absolute;
  top: 20px;
  right: 20px;
}

.burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: var(--background-color-main);
  transform: translateY(-100%);
  transition:
    transform 450ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 450ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 450ms cubic-bezier(0.4, 0, 0.2, 1);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

[data-visible='open'] {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
}

[data-visible='close'] {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.burger-nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.burger-nav-link {
  padding: 8px 12px;
  color: var(--color-yellow);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
}

/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-list {
    gap: 20px;
  }

  .nav-link {
    padding: 8px 12px;
    color: var(--color-yellow);
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    transition: color var(--transition-efect);
  }

  .nav-link:hover {
    color: var(--color-gray);
  }

  .header-burger-wrapper {
    display: none;
  }

  .nav-list {
    display: flex;
  }
}
```

## File: src/css/styles.css
```css
/**
  |============================
  | include css partials with
  | default @import url()
  |============================
*/
/* Common styles */
@import 'modern-normalize';

@import 'swiper/css';

@import url('./reset.css');
@import url('./base.css');
@import url('./container.css');

/* Sections style */
@import url('./header.css');
@import url('./hero.css');
@import url('./about.css');
@import url('./gameplay.css');
@import url('./gallery.css');
@import url('./reviews.css');
@import url('./download.css');
@import url('./legal.css');
@import url('./footer.css');
```

## File: src/js/burgerMenu.js
```javascript
const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const navLinks = document.querySelectorAll('[data-menu-link]');
const body = document.querySelector('body');

openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
  body.dataset.scroll = 'locked';
});

closeBtnEl.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  burgerMenuEl.dataset.visible = 'close';
  delete body.dataset.scroll;
}
```

## File: src/partials/footer.html
```html
<footer class="footer"></footer>
```

## File: src/partials/header.html
```html
<header class="header">
  <div class="container">
    <div class="wrapper">
      <nav class="nav">
        <a class="nav-logo" href="./index.html" aria-label="Site logo">
          Pirate Match
        </a>
        <ul class="nav-list">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gameplay">Gameplay</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#reviews">Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#download">Why Download</a>
          </li>
        </ul>
      </nav>
      <a
        class="google-play-link"
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.tactilegames.piratematch&hl=en&gl=us"
      >
        Play on Google Play
      </a>
      <div class="header-burger-wrapper">
        <button type="button" class="burger-btn" data-action="open">ІІІ</button>

        <div class="burger-menu" data-visible="close">
          <div class="container burger-menu-wrap">
            <ul class="burger-nav-list">
              <li class="burger-nav-item">
                <a class="burger-nav-link" href="#about" data-menu-link>
                  About
                </a>
              </li>
              <li class="burger-nav-item">
                <a class="burger-nav-link" href="#gameplay" data-menu-link>
                  Gameplay
                </a>
              </li>
              <li class="burger-nav-item">
                <a class="burger-nav-link" href="#gallery" data-menu-link>
                  Gallery
                </a>
              </li>
              <li class="burger-nav-item">
                <a class="burger-nav-link" href="#reviews" data-menu-link>
                  Reviews
                </a>
              </li>
              <li class="burger-nav-item">
                <a class="burger-nav-link" href="#download" data-menu-link>
                  Why Download
                </a>
              </li>
            </ul>
            <a
              class="google-play-link"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.tactilegames.piratematch&hl=en&gl=us"
            >
              Play on Google Play
            </a>

            <button type="button" class="btn-close" data-action="close">
              Х
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
```

## File: src/index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon_2х.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon_1х.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pirate Match</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <load src="./partials/header.html" />
    <main>
      <load src="./partials/hero.html" />
      <load src="./partials/about.html" />
      <load src="./partials/gameplay.html" />
      <load src="./partials/gallery.html" />
      <load src="./partials/reviews.html" />
      <load src="./partials/download.html" />
    </main>

    <load src="./partials/footer.html" />

    <script type="module" src="./main.js"></script>
  </body>
</html>
```

## File: src/main.js
```javascript
import './js/burgerMenu';
import './js/gallerySwiper';
```

## File: package.json
```json
{
  "name": "STPP-399",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build --base=/STPP-399/",
    "preview": "vite preview",
    "build:preview": "vite build && vite preview"
  },
  "devDependencies": {
    "glob": "^11.0.0",
    "postcss": "^8.5.14",
    "postcss-sort-media-queries": "^5.2.0",
    "sharp": "^0.34.5",
    "svgo": "^4.0.1",
    "vite": "^5.4.6",
    "vite-plugin-image-optimizer": "^2.0.3"
  },
  "author": "Alexander Repeta <alexander.repeta@gmail.com>",
  "license": "ISC",
  "dependencies": {
    "modern-normalize": "^3.0.1",
    "swiper": "^14.0.7",
    "vite-plugin-full-reload": "^1.2.0",
    "vite-plugin-html-inject": "^1.1.2"
  }
}
```

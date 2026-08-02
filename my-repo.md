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
  img/
    about/
      about-img1.png
      about-img1@2x.png
      about-img2.png
      about-img2@2x.png
      about-img3.png
      about-img3@2x.png
      about-pirate.png
      about-pirate@2x.png
      bg-d.png
      bg-d@2x.png
      bg-m.png
      bg-m@2x.png
      palm.png
      palm@2x.png
    background-img/
      corals-left.png
      corals-left@2x.png
      corals-right.png
      corals-right@2x.png
    download/
      octopus.png
      octopus@2x.png
    gallery/
      gallery-img1.jpg
      gallery-img1@2x.jpg
      gallery-img2.jpg
      gallery-img2@2x.jpg
      gallery-img3.jpg
      gallery-img3@2x.jpg
      gallery-img4.jpg
      gallery-img4@2x.jpg
      gallery-img5.jpg
      gallery-img5@2x.jpg
      gallery-img6.jpg
      gallery-img6@2x.jpg
      gull.png
      gull@2x.png
    gameplay/
      bubbles.png
      bubbles@2x.png
      gameplay-img1.jpg
      gameplay-img1@2x.jpg
      gameplay-img2.jpg
      gameplay-img2@2x.jpg
      gameplay-img3.jpg
      gameplay-img3@2x.jpg
      gameplay-img4.jpg
      gameplay-img4@2x.jpg
      gameplay-img5.jpg
      gameplay-img5@2x.jpg
      light-d.png
      light-d@2x.png
      light-m.png
      light-m@2x.png
      octopus2.png
      octopus2@2x.png
      pirate2.png
      pirate2@2x.png
    hero/
      background_d.jpg
      background_d@2x.jpg
      background_m.jpg
      background_m@2x.jpg
      blur.png
      blur@2x.png
    sprite.svg
  js/
    burgerMenu.js
    gallerySwiper.js
    gameplaySwiper.js
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

## File: src/js/gameplaySwiper.js
```javascript
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const gameplaySwiper = new Swiper('[data-gameplay-swiper]', {
  modules: [Autoplay],

  loop: true,
  speed: 500,
  slidesPerView: 'auto',
  spaceBetween: 8,

  breakpoints: {
    1440: {
      enabled: false,
    },
  },

  on: {
    imagesReady: swiper => swiper.update(),
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
```

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

## File: src/css/gallery.css
```css
/* Styles for Mobile devices */
.gallery-gull {
  top: -66px;
  right: 31%;
  transform: translateX(-50%) rotate(13.76deg);
  max-width: 79px;
  max-height: auto;
  width: 100%;
  height: 100%;
  background-image: url('../img/gallery/gull.png');
  z-index: 50;
}

.gallery-tag {
  margin-bottom: 12px;
}

.gallery-title {
  margin-bottom: 48px;
}

.gallery-swiper {
  overflow: visible;
  clip-path: inset(-9999px 0);
  max-width: 375px;
  width: 100%;
}

.gallery-list {
  display: flex;
  padding: 0;
  margin: 0;
}

.gallery-item {
  max-width: 335px;
  width: 100%;
}

.gallery-img {
  aspect-ratio: 320 / 400;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
}

@media screen and (min-width: 320px) and (min-resolution: 192dpi) {
  .gallery-gull {
    background-image: url('../img/gallery/gull@2x.png');
  }
}

/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .gallery-gull {
    top: 7px;
    right: 44%;
    transform: translateX(-50%) rotate(0);
    max-width: 89px;
  }
}
```

## File: src/css/gameplay.css
```css
/* Styles for Mobile devices */
.gameplay {
  position: relative;
  z-index: 15;
}

.gameplay-light {
  top: -185px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 375px;
  max-height: auto;
  width: 100%;
  height: 100%;
  background-image: url('../img/gameplay/light-m.png');
  background-position: top center;
  background-size: 100% 100%;
  z-index: 2;
}

.gameplay-pirate-two {
  top: 0;
  right: -18%;
  transform: translateX(-50%);
  max-width: 130px;
  max-height: auto;
  width: 100%;
  height: 100%;
  background-image: url('../img/gameplay/pirate2.png');
  z-index: 50;
}

.gameplay-tag {
  margin-bottom: 12px;
}

.gameplay-title {
  font-size: 28px;
  line-height: 1.28;
  margin: 0 auto 48px;
}

.gameplay-swiper {
  overflow: visible;
  clip-path: inset(-9999px 0);
  max-width: 375px;
  width: 100%;
}

.gameplay-list {
  display: flex;
  padding: 0;
  margin: 0;
}

.gameplay-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 280px;
  border-radius: 16px;
  background-color: var(--color-secondary);
}

.gameplay-img {
  aspect-ratio: 280 / 160;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 18px;
}

.gameplay-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 120px;
  font-size: 16px;
  padding: 18px 0;
}

.gameplay-subtitle {
  font-weight: 600;
  line-height: 1.25;
  font-size: min(5.7cqw, 16px);
  white-space: nowrap;
}

.gameplay-text {
  font-weight: 400;
  line-height: 1.5;
}

.gameplay-wrap-desc {
  display: none;
}

@media screen and (min-width: 320px) and (min-resolution: 192dpi) {
  .gameplay-light {
    background-image: url('../img/gameplay/light-m@2x.png');
  }

  .gameplay-pirate-two {
    background-image: url('../img/gameplay/pirate2@2x.png');
  }
}

/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .gameplay-light {
    background-image: url('../img/gameplay/light-d.png');
    top: -190px;
    max-width: 1440px;
  }

  .gameplay-pirate-two {
    top: -7px;
    right: -11%;
    max-width: 365px;
  }

  .gameplay-bubbles {
    top: -65px;
    right: 25%;
    transform: translateX(-50%);
    max-width: 33px;
    max-height: auto;
    width: 100%;
    height: 100%;
    background-image: url('../img/gameplay/bubbles.png');
    z-index: 50;
  }

  .gameplay-octopus-two {
    top: 380px;
    right: 21%;
    transform: translateX(-50%);
    max-width: 304px;
    max-height: auto;
    width: 100%;
    height: 100%;
    background-image: url('../img/gameplay/octopus2.png');
    z-index: 30;
  }

  .gameplay-title {
    font-size: 40px;
    line-height: 1.2;
  }

  .gameplay-swiper {
    display: none;
  }

  .gameplay-wrap-desc {
    display: flex;
    flex-direction: column;
    gap: 100px;
    align-items: center;
  }

  .gameplay-desc-list {
    display: flex;
    gap: 48px;
  }

  .index {
    position: relative;
    z-index: 40;
  }
}

@media screen and (min-width: 1440px) and (min-resolution: 192dpi) {
  .gameplay-light {
    background-image: url('../img/gameplay/light-d@2x.png');
  }

  .gameplay-bubbles {
    background-image: url('../img/gameplay/bubbles@2x.png');
  }

  .gameplay-octopus-two {
    background-image: url('../img/gameplay/octopus2@2x.png');
  }
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
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const gallerySwiper = new Swiper('[data-gallery-swiper]', {
  modules: [Autoplay],

  loop: true,
  speed: 500,
  slidesPerView: 'auto',
  spaceBetween: 8,

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 208,
      centeredSlides: true,
    },
  },

  on: {
    imagesReady: swiper => swiper.update(),
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
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

## File: src/css/about.css
```css
/* Styles for Mobile devices */
.about {
  clip-path: inset(-9999px 0);
  min-height: 900px;
}

.about-bg-img {
  top: -35px;
  left: 50%;
  background-size: 100% 100%;
  transform: translateX(-50%);
  height: calc(100% + 108px);
  background-image: url('../img/about/bg-m.png');
  background-position: top center;
  width: calc(100% + 40px);
  z-index: 10;
}

.about-img3 {
  background-image: url('../img/about/about-img3.png');
  top: 137px;
  left: 37%;
  transform: translateX(-50%) rotate(-7.37deg);
  max-width: 172px;
  max-height: 120px;
  width: 100%;
  height: 100%;
  z-index: 20;
}

.about-img2 {
  background-image: url('../img/about/about-img2.png');
  top: 195px;
  left: 69%;
  transform: translateX(-50%) rotate(17.65deg);
  max-width: 172px;
  max-height: 120px;
  width: 100%;
  height: 100%;
  z-index: 25;
}

.about-img1 {
  background-image: url('../img/about/about-img1.png');
  top: 242px;
  left: 28%;
  transform: translateX(-50%) rotate(-8.58deg);
  max-width: 172px;
  max-height: 120px;
  width: 100%;
  height: 100%;
  z-index: 30;
}

.about-pirate {
  background-image: url('../img/about/about-pirate.png');
  top: 230px;
  left: 82%;
  transform: translateX(-50%) rotate(-12.52deg) scale(0.6);
  max-width: 200px;
  max-height: 272px;
  width: 100%;
  height: 100%;
  z-index: 35;
}

.palm {
  background-image: url('../img/about/palm.png');
  top: -180px;
  left: -3%;
  transform: translateX(-50%) rotate(37.17deg) scale(0.5);
  width: 100%;
  max-width: 388px;
  max-height: 562px;
  width: 100%;
  height: 100%;
  z-index: 40;
}

.about-bg-elem {
  top: 0%;
  left: 50%;
  background-size: 100% 100%;
  transform: translateX(-50%);
  min-height: 100px;
  height: 100%;
  background-color: var(--background-color-rare);
  background-position: top center;
  max-width: 375px;
  width: 100%;
  z-index: 5;
}

.about-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 853px;
  height: 100%;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-title {
  text-align: center;
  font-size: 28px;
  line-height: 1.28;
  color: var(--color-main);
}

@media screen and (min-width: 320px) and (min-resolution: 192dpi) {
  .about-bg-img {
    background-image: url('../img/about/bg-m@2x.png');
  }

  .about-img3 {
    background-image: url('../img/about/about-img3@2x.png');
  }

  .about-img2 {
    background-image: url('../img/about/about-img2@2x.png');
  }

  .about-img1 {
    background-image: url('../img/about/about-img1@2x.png');
  }

  .about-pirate {
    background-image: url('../img/about/about-pirate@2x.png');
  }

  .palm {
    background-image: url('../img/about/palm@2x.png');
  }
}

/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .about {
    min-height: 326px;
  }

  .about-bg-img {
    background-image: url('../img/about/bg-d.png');
    top: -70px;
    background-size: 100% 100%;
    height: calc(100% + 130px);
    width: calc(100% + 80px);
  }

  .about-img3 {
    top: 120px;
    left: 18%;
    max-width: 200px;
    max-height: 140px;
  }

  .about-img2 {
    top: 190px;
    left: 28%;
    max-width: 200px;
    max-height: 140px;
  }

  .about-img1 {
    top: 240px;
    left: 15.5%;
    max-width: 200px;
    max-height: 140px;
  }

  .about-pirate {
    top: 325px;
    left: 27.1%;
    transform: translateX(-50%) rotate(-12.52deg) scale(1.07);
  }

  .palm {
    top: -175px;
    left: 1.5%;
    transform: translateX(-50%) rotate(37.17deg) scale(0.95);
  }

  .about-wrap {
    max-width: 742px;
    min-height: 326px;
    gap: 24px;
    margin-left: auto;
  }

  .about-tag {
    margin: 0;
  }

  .about-title {
    font-size: 40px;
    line-height: 1.2;
    text-align: start;
  }
}

@media screen and (min-width: 1440px) and (min-resolution: 192dpi) {
  .about-bg-img {
    background-image: url('../img/about/bg-d@2x.png');
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

## File: src/css/download.css
```css
/* Styles for Mobile devices */
.download {
  position: relative;
  width: 100%;
  max-width: 375px;
  overflow: visible;
  margin: 0 auto;
}

.download-octopus {
  position: absolute;
  bottom: -30px;
  right: 10px;
  width: 127px;
  pointer-events: none;
  z-index: 50;
}
/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .download {
    max-width: 1440px;
  }

  .download-octopus {
    bottom: -65px;
    right: 225px;
    width: 264px;
  }
}
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
import './js/gameplaySwiper';
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

## File: src/css/hero.css
```css
/* Styles for Mobile devices */
.hero {
  background-image: url('../img/hero/background_m.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 375px;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 40px;
}
@media screen and (min-width: 320px) and (min-resolution: 192dpi) {
  .hero {
    background-image: url('../img/hero/background_m@2x.jpg');
  }
}

.hiro-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 565px;
}

.hiro-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 48px;
  font-weight: 500;
  color: var(--color-secondary);
}

.hiro-tag {
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  color: var(--color-main);
  margin: 0;
  padding: 4px 16px;
  max-width: 148px;
  width: 100%;
}

.hiro-title {
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
}

.hiro-text {
  font-size: 24px;
  line-height: 1.25;
}

.hiro-link {
  display: block;
}

/* Styles for Desktop devices */
@media screen and (min-width: 1440px) {
  .hero {
    background-image:
      url('../img/hero/blur.png'), url('../img/hero/background_d.jpg');
    max-width: 1440px;
    padding-bottom: 100px;
  }

  .hiro-content {
    max-width: 504px;
  }

  .hiro-title {
    font-weight: 600;
    font-size: 64px;
    line-height: 1.1;
  }
}
@media screen and (min-width: 1440px) and (min-resolution: 192dpi) {
  .hero {
    background-image:
      url('../img/hero/blur@2x.png'), url('../img/hero/background_d@2x.jpg');
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

svg {
  display: block;
  max-width: 100%;
  height: auto;
}
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

## File: src/partials/about.html
```html
<section class="section about section-bg" id="about">
  <div class="section-bg-img about-bg-img"></div>
  <div class="section-bg-img about-img3"></div>
  <div class="section-bg-img about-img2"></div>
  <div class="section-bg-img about-img1"></div>
  <div class="section-bg-img about-pirate"></div>
  <div class="section-bg-img palm"></div>
  <div class="section-bg-img about-bg-elem"></div>
  <div class="container">
    <div class="content-position about-wrap">
      <p class="section-tag about-tag">About the game</p>
      <div class="about-content">
        <h2 class="about-title">A treasure hunt across the seven seas</h2>
        <p>
          Pirate Match combines classic match-3 gameplay with an exciting pirate
          adventure. Every completed puzzle helps your crew discover new
          islands, recover forgotten artifacts, and unlock incredible rewards
          hidden throughout the ocean.
        </p>
        <p>
          As the journey continues, players encounter ancient ruins, mysterious
          caves, and legendary treasures waiting to be claimed.
        </p>
      </div>
    </div>
  </div>
</section>
```

## File: src/partials/gallery.html
```html
<section class="section section-bg" id="gallery">
  <div class="section-bg-img gallery-gull"></div>
  <div class="container">
    <p class="section-tag gallery-tag">Gallery</p>
    <h2 class="section-title gallery-title">Visual Style</h2>
    <div class="gallery-swiper swiper" data-gallery-swiper>
      <ul class="swiper-wrapper gallery-list">
        <li class="swiper-slide gallery-item">
          <img
            class="gallery-img"
            src="./img/gallery/gallery-img1.jpg"
            srcset="
              ../img/gallery/gallery-img1.jpg    1x,
              ../img/gallery/gallery-img1@2x.jpg 2x
            "
            alt="two pirates on a ship"
            width="320"
            height="400"
          />
        </li>
        <li class="swiper-slide gallery-item">
          <img
            class="gallery-img"
            src="./img/gallery/gallery-img2.jpg"
            srcset="
              ../img/gallery/gallery-img2.jpg    1x,
              ../img/gallery/gallery-img2@2x.jpg 2x
            "
            alt="a pirate and a seagull"
            width="320"
            height="400"
          />
        </li>
        <li class="swiper-slide gallery-item">
          <img
            class="gallery-img"
            src="./img/gallery/gallery-img3.jpg"
            srcset="
              ../img/gallery/gallery-img3.jpg    1x,
              ../img/gallery/gallery-img3@2x.jpg 2x
            "
            alt="a pirate with an octopus"
            width="320"
            height="400"
          />
        </li>
                <li class="swiper-slide gallery-item">
          <img
            class="gallery-img"
            src="./img/gallery/gallery-img4.jpg"
            srcset="
              ../img/gallery/gallery-img4.jpg    1x,
              ../img/gallery/gallery-img4@2x.jpg 2x
            "
            alt="images of game levels"
            width="320"
            height="400"
          />
        </li>
        <li class="swiper-slide gallery-item">
          <img
            class="gallery-img"
            src="./img/gallery/gallery-img5.jpg"
            srcset="
              ../img/gallery/gallery-img5.jpg    1x,
              ../img/gallery/gallery-img5@2x.jpg 2x
            "
            alt="a pirate with a shovel and an octopus"
            width="320"
            height="400"
          />
        </li>
        <li class="swiper-slide gallery-item">
          <img
            class="gallery-img"
            src="./img/gallery/gallery-img6.jpg"
            srcset="
              ../img/gallery/gallery-img6.jpg    1x,
              ../img/gallery/gallery-img6@2x.jpg 2x
            "
            alt="a pirate is sailing on the sea"
            width="320"
            height="400"
          />
        </li>
        </ul>
  </div>
</section>
```

## File: src/partials/gameplay.html
```html
<section class="section section-bg" id="gameplay">
  <div class="section-bg-img gameplay-light"></div>
  <div class="section-bg-img gameplay-pirate-two"></div>
  <div class="container gameplay">
    <p class="section-tag gameplay-tag">Core Gameplay</p>
    <h2 class="section-title gameplay-title">
      Match, explore, and conquer the seas
    </h2>
    <div class="gameplay-swiper swiper" data-gameplay-swiper>
      <ul class="swiper-wrapper gameplay-list">
        <li class="swiper-slide gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img1.jpg"
            srcset="
              ../img/gameplay/gameplay-img1.jpg    1x,
              ../img/gameplay/gameplay-img1@2x.jpg 2x
            "
            alt="image of a colorful puzzle"
            width="280"
            height="160"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Complete Match-3 Levels</h3>
            <p class="gameplay-text">
              Solve colorful puzzles with unique objectives.
            </p>
          </div>
        </li>
        <li class="swiper-slide gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img2.jpg"
            srcset="
              ../img/gameplay/gameplay-img2.jpg    1x,
              ../img/gameplay/gameplay-img2@2x.jpg 2x
            "
            alt="image of an exotic islands"
            width="280"
            height="160"
            loading="lazy"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Explore Exotic Islands</h3>
            <p class="gameplay-text">
              Unlock new destinations filled with secrets and rewards.
            </p>
          </div>
        </li>
        <li class="swiper-slide gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img3.jpg"
            srcset="
              ../img/gameplay/gameplay-img3.jpg    1x,
              ../img/gameplay/gameplay-img3@2x.jpg 2x
            "
            alt="image of pirate treasure"
            width="280"
            height="160"
            loading="lazy"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Collect Pirate Treasures</h3>
            <p class="gameplay-text">
              Find rare gems, gold, maps, and valuable artifacts.
            </p>
          </div>
        </li>
        <li class="swiper-slide gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img4.jpg"
            srcset="
              ../img/gameplay/gameplay-img4.jpg    1x,
              ../img/gameplay/gameplay-img4@2x.jpg 2x
            "
            alt="image of a cannon"
            width="280"
            height="160"
            loading="lazy"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Use Powerful Boosters</h3>
            <p class="gameplay-text">Progress Through New Adventures.</p>
          </div>
        </li>
        <li class="swiper-slide gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img5.jpg"
            srcset="
              ../img/gameplay/gameplay-img5.jpg    1x,
              ../img/gameplay/gameplay-img5@2x.jpg 2x
            "
            alt="image of the road to the tower"
            width="280"
            height="160"
            loading="lazy"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Progress Through New Adventures</h3>
            <p class="gameplay-text">
              Discover increasingly challenging chapters and exciting locations.
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="gameplay-wrap-desc">
      <ul class="gameplay-desc-list">
        <li class="gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img1.jpg"
            srcset="
              ../img/gameplay/gameplay-img1.jpg    1x,
              ../img/gameplay/gameplay-img1@2x.jpg 2x
            "
            alt="image of a colorful puzzle"
            width="280"
            height="160"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Complete Match-3 Levels</h3>
            <p class="gameplay-text">
              Solve colorful puzzles with unique objectives.
            </p>
          </div>
        </li>
        <li class="gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img2.jpg"
            srcset="
              ../img/gameplay/gameplay-img2.jpg    1x,
              ../img/gameplay/gameplay-img2@2x.jpg 2x
            "
            alt="image of an exotic islands"
            width="280"
            height="160"
            loading="lazy"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Explore Exotic Islands</h3>
            <p class="gameplay-text">
              Unlock new destinations filled with secrets and rewards.
            </p>
          </div>
        </li>
        <li class="gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img3.jpg"
            srcset="
              ../img/gameplay/gameplay-img3.jpg    1x,
              ../img/gameplay/gameplay-img3@2x.jpg 2x
            "
            alt="image of pirate treasure"
            width="280"
            height="160"
            loading="lazy"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Collect Pirate Treasures</h3>
            <p class="gameplay-text">
              Find rare gems, gold, maps, and valuable artifacts.
            </p>
          </div>
        </li>
      </ul>
      <div class="section-bg-img gameplay-octopus-two"></div>
      <div class="section-bg-img gameplay-bubbles"></div>
      <ul class="gameplay-desc-list index">
        <li class="gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img4.jpg"
            srcset="
              ../img/gameplay/gameplay-img4.jpg    1x,
              ../img/gameplay/gameplay-img4@2x.jpg 2x
            "
            alt="image of a cannon"
            width="280"
            height="160"
            loading="lazy"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Use Powerful Boosters</h3>
            <p class="gameplay-text">Progress Through New Adventures.</p>
          </div>
        </li>
        <li class="gameplay-item">
          <img
            class="gameplay-img"
            src="../img/gameplay/gameplay-img5.jpg"
            srcset="
              ../img/gameplay/gameplay-img5.jpg    1x,
              ../img/gameplay/gameplay-img5@2x.jpg 2x
            "
            alt="image of the road to the tower"
            width="280"
            height="160"
            loading="lazy"
          />
          <div class="gameplay-content">
            <h3 class="gameplay-subtitle">Progress Through New Adventures</h3>
            <p class="gameplay-text">
              Discover increasingly challenging chapters and exciting locations.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
```

## File: src/partials/reviews.html
```html
<section class="section reviews" id="reviews">
  <div class="container">
    <p class="section-tag">Reviews</p>
  </div>
</section>
```

## File: src/css/footer.css
```css
/* Styles for Mobile devices */
.footer {
  background-color: var(--background-color-main);
}

.footer-wrap {
  position: relative;
  width: 100%;
  max-width: 375px;
  overflow: visible;
  padding-top: 60px;
  padding-bottom: 70px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: var(--background-color-additional);
  margin: 0 auto;
}

.screen {
  position: absolute;
  top: 0;
  right: 80px;
  width: 100px;
  height: 50px;
  z-index: 100;
  background-color: var(--background-color-main);
}

.footer-logo {
  margin-left: 24px;
  margin-bottom: 24px;
}

.footer-divider {
  border: var(--border-divider);
  max-width: 335px;
  margin: 0 auto;
  margin-bottom: 12px;
}

.copy {
  margin-bottom: 22px;
}

.footer-legal {
  display: flex;
  justify-content: space-between;
  text-decoration: underline;
  text-decoration-skip-ink: none;
}

.legal-link {
  font-family: 'Quicksand', sans-serif;
}

/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .footer-wrap {
    max-width: 1440px;
    padding-top: 100px;
    padding-bottom: 110px;
  }

  .screen {
    top: 0;
    right: 370px;
    width: 200px;
    height: 100px;
  }

  .footer-logo {
    margin-left: 0px;
  }

  .footer-divider {
    max-width: 1200px;
    margin-bottom: 34px;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
  }

  .copy {
    margin-bottom: 0;
  }

  .footer-legal {
    gap: 95px;
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

## File: src/partials/download.html
```html
<section class="section download" id="download">
  <div class="container">
    <p class="section-tag">Why Download</p>
  </div>
  <img
    class="download-octopus"
    src="./img/download/octopus.png"
    srcset="./img/download/octopus.png 1x, ./img/download/octopus@2x.png 2x"
    alt=""
    aria-hidden="true"
  />
</section>
```

## File: src/partials/header.html
```html
<header class="header">
  <div class="container wrapper">
    <a class="logo" href="./index.html" aria-label="Site logo">
      <svg width="48" height="36">
        <use href="./img/sprite.svg#icon-logo"></use>
      </svg>
      Pirate Match
    </a>
    <nav class="nav">
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
      class="btn-link btn-play"
      target="_blank"
      href="https://play.google.com/store/apps/details?id=com.tactilegames.piratematch&hl=en&gl=us"
    >
      Play on Google Play
    </a>
    <div class="burger-wrapper">
      <button type="button" class="burger-btn" data-action="open">
        <svg width="44" height="44">
          <use href="./img/sprite.svg#icon-burger"></use>
        </svg>
      </button>

      <div class="burger" data-visible="close">
        <div class="burger-menu">
          <div class="burger-content">
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
              class="btn-link"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.tactilegames.piratematch&hl=en&gl=us"
            >
              Play on Google Play
            </a>
          </div>
          <button type="button" class="btn-close" data-action="close">
            <svg width="16" height="16" class="icon">
              <use href="./img/sprite.svg#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
```

## File: src/css/header.css
```css
/* Styles for Mobile devices */
.header {
  position: fixed;
  z-index: 800;
  padding-top: 60px;
  padding-bottom: 20px;
  width: 100%;
  min-width: 375px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--background-color-header);
}

.nav {
  display: none;
}

.btn-play {
  display: none;
}

.burger-btn,
.btn-close {
  background-color: transparent;
  border: none;
}

.burger-btn {
  fill: var(--color-icon);
  padding: 0;
  display: block;
}

.btn-close {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 16px;
  stroke: var(--color-icon);
}

.burger {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
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

.burger-menu {
  position: absolute;
  top: 20px;
  left: calc(50% + 44px);
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 246px;
  height: 424px;
  border-radius: 20px;
  background-color: var(--background-color-main);
}

.burger-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 68px 20px 20px;
}

.burger-nav-link {
  display: block;
  padding: 14px 16px;
  color: var(--color-secondary);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
}

/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .header {
    padding-top: 32px;
    padding-bottom: 16px;
    max-width: 100%;
    left: 0;
    transform: none;
  }

  .nav {
    display: block;
  }

  .nav-list {
    display: flex;
    align-items: center;
  }

  .nav-link {
    padding: 14px 16px;
    color: var(--color-secondary);
    font-size: 20px;
    line-height: 1.2;
    transition: color var(--transition-efect);
  }

  .nav-link:hover {
    color: var(--color-icon);
  }

  .btn-play {
    display: block;
  }

  .burger-wrapper {
    display: none;
  }
}
```

## File: src/img/sprite.svg
```xml
<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <symbol id="icon-logo" viewBox="0 0 43 32">
            <path fill="#0f1618" style="fill: var(--color1, #0f1618)" d="M0 0h42.667v32h-42.667v-32z"></path>
            <path fill="#ec9e25" style="fill: var(--color2, #ec9e25)" d="M24.093 22.746h-0.893v-0.983c-0.195 0.029-0.462-0.074-0.611 0.074v0.909h-0.893v-0.983h-0.611v0.983h-0.893v-0.983l-0.561 0.003-0.050 0.98h-0.846v-1.891c0-0.026-0.092-0.276-0.114-0.323-0.166-0.329-0.931-0.691-1.263-0.939-1.728-1.297-2.186-3.209-2.054-5.372 0.434-7.115 12.553-7.104 12.214 0.935-0.075 1.783-0.642 3.329-2.023 4.418-0.307 0.242-1.405 0.779-1.405 1.183v1.989h0.001zM18.585 14.801c-0.329 0.057-0.726 0.383-0.919 0.66-0.962 1.377 0.561 3.172 1.98 2.365 1.487-0.845 0.769-3.348-1.060-3.026zM23.564 14.801c-0.54 0.087-1.118 0.685-1.196 1.254-0.19 1.362 0.995 2.409 2.212 1.773 1.553-0.812 0.794-3.321-1.016-3.027zM21.194 18.095c-0.133 0.116-0.628 1.142-0.628 1.337 0 0.491 0.366 0.323 0.638 0.32 0.43-0.007 1.1 0.185 0.998-0.455-0.031-0.201-0.489-1.15-0.658-1.228-0.11-0.051-0.252-0.059-0.35 0.027v-0.001z"></path>
            <path fill="#ec9e25" style="fill: var(--color2, #ec9e25)" d="M26.333 19.657l4.334 2.331c0.327 0.066 0.604-0.421 1.058-0.472 1.412-0.16 1.851 1.698 0.655 2.359 0.366 1.665-2.092 2.107-2.31 0.502-0.056-0.414 0.112-0.608-0.251-0.916l-4.879-2.755 1.394-1.049z"></path>
            <path fill="#ec9e25" style="fill: var(--color2, #ec9e25)" d="M10.466 23.834c-1.284-0.659-0.703-2.564 0.77-2.305 0.416 0.074 0.553 0.543 0.986 0.469l4.24-2.346 1.43 1.056-4.954 2.825c-0.289 0.293-0.065 0.814-0.327 1.278-0.679 1.202-2.508 0.41-2.144-0.976h-0.001z"></path>
            <path fill="#ec9e25" style="fill: var(--color2, #ec9e25)" d="M28.132 15.033c0.050-0.61-0.12-1.206-0.131-1.808l2.623-1.456c0.285-0.28 0.129-0.444 0.141-0.733 0.055-1.352 2.1-1.541 2.325-0.182 0.026 0.159-0.020 0.566-0.005 0.592 0.029 0.048 0.339 0.231 0.447 0.37 0.794 1.010-0.252 2.423-1.419 1.877-0.362-0.169-0.371-0.487-0.885-0.36l-3.096 1.698z"></path>
            <path fill="#ec9e25" style="fill: var(--color2, #ec9e25)" d="M14.651 14.985l-3.049-1.649c-0.494-0.123-0.499 0.193-0.849 0.347-1.307 0.576-2.323-1.088-1.264-2.059 0.051-0.046 0.212-0.12 0.221-0.137 0.041-0.073-0.004-0.485 0.021-0.641 0.18-1.127 1.836-1.261 2.235-0.198 0.162 0.433-0.077 0.807 0.243 1.121l2.542 1.419c0.114 0.164-0.033 0.626-0.050 0.839-0.026 0.317-0.047 0.639-0.047 0.957h-0.003z"></path>
            <path fill="#0f1618" style="fill: var(--color1, #0f1618)" d="M23.564 14.801c1.808-0.294 2.568 2.215 1.016 3.027-1.217 0.637-2.402-0.412-2.212-1.773 0.078-0.569 0.656-1.166 1.196-1.254z"></path>
            <path fill="#0f1618" style="fill: var(--color1, #0f1618)" d="M18.585 14.801c1.831-0.323 2.547 2.179 1.060 3.026-1.419 0.807-2.942-0.989-1.98-2.365 0.194-0.277 0.59-0.602 0.919-0.66z"></path>
            <path fill="#0f1618" style="fill: var(--color1, #0f1618)" d="M21.194 18.095c0.098-0.086 0.242-0.077 0.35-0.027 0.169 0.077 0.626 1.025 0.658 1.228 0.101 0.64-0.567 0.448-0.998 0.455-0.272 0.004-0.638 0.172-0.638-0.32 0-0.196 0.494-1.22 0.628-1.337v0.001z"></path>
        </symbol>
        <symbol id="icon-close" viewBox="0 0 32 32">
            <path stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="4" stroke-width="4.5714" d="M29.714 29.714l-27.429-27.429M29.714 2.286l-27.429 27.429"></path>
        </symbol>
        <symbol id="icon-swiper" viewBox="0 0 32 32">
            <path d="M4.58 17.778c-0.371-0.471-0.58-1.111-0.58-1.777s0.209-1.306 0.58-1.777l7.477-9.487c0.372-0.472 0.876-0.737 1.403-0.737s1.031 0.265 1.403 0.737c0.372 0.472 0.581 1.112 0.581 1.779s-0.209 1.307-0.581 1.779l-4.093 5.192h15.248c0.526 0 1.030 0.265 1.402 0.737s0.581 1.111 0.581 1.778c0 0.667-0.209 1.307-0.581 1.778s-0.876 0.737-1.402 0.737h-15.248l4.093 5.19c0.184 0.234 0.33 0.511 0.43 0.816s0.151 0.632 0.151 0.963c0 0.33-0.051 0.657-0.151 0.963s-0.246 0.582-0.43 0.816c-0.184 0.234-0.403 0.419-0.643 0.545s-0.499 0.191-0.759 0.191c-0.26 0-0.518-0.065-0.759-0.191s-0.459-0.312-0.643-0.545l-7.477-9.485z"></path>
        </symbol>
        <symbol id="icon-burger" viewBox="0 0 32 32">
            <path d="M4 5.714c0-0.455 0.158-0.891 0.439-1.212s0.663-0.502 1.061-0.502h21c0.398 0 0.779 0.181 1.061 0.502s0.439 0.758 0.439 1.212-0.158 0.891-0.439 1.212c-0.281 0.322-0.663 0.502-1.061 0.502h-21c-0.398 0-0.779-0.181-1.061-0.502s-0.439-0.758-0.439-1.212zM4 16c0-0.455 0.158-0.891 0.439-1.212s0.663-0.502 1.061-0.502h21c0.398 0 0.779 0.181 1.061 0.502s0.439 0.758 0.439 1.212-0.158 0.891-0.439 1.212c-0.281 0.322-0.663 0.502-1.061 0.502h-21c-0.398 0-0.779-0.181-1.061-0.502s-0.439-0.758-0.439-1.212zM5.5 24.571c-0.398 0-0.779 0.181-1.061 0.502s-0.439 0.757-0.439 1.212c0 0.455 0.158 0.891 0.439 1.212s0.663 0.502 1.061 0.502h21c0.398 0 0.779-0.181 1.061-0.502s0.439-0.757 0.439-1.212c0-0.455-0.158-0.891-0.439-1.212s-0.663-0.502-1.061-0.502h-21z"></path>
        </symbol>
        <symbol id="icon-star" viewBox="0 0 32 32">
            <path fill="#ec9e25" style="fill: var(--color1, #ec9e25)" d="M25.117 22.502c-2.083 0.5-4.257 0.476-6.328-0.070s-3.974-1.598-5.539-3.060-2.743-3.29-3.428-5.32c-0.685-2.029-0.857-4.197-0.498-6.309-0.054 0.053-0.111 0.103-0.172 0.148-0.427 0.325-0.96 0.445-2.027 0.686l-0.968 0.219c-3.749 0.849-5.623 1.272-6.069 2.706-0.445 1.432 0.832 2.927 3.387 5.915l0.661 0.773c0.725 0.849 1.090 1.274 1.253 1.798 0.163 0.526 0.108 1.093-0.002 2.225l-0.101 1.032c-0.386 3.988-0.579 5.981 0.588 6.866s2.923 0.079 6.43-1.537l0.91-0.418c0.997-0.46 1.495-0.689 2.024-0.689s1.027 0.229 2.025 0.689l0.907 0.418c3.509 1.615 5.265 2.423 6.43 1.539 1.169-0.887 0.975-2.88 0.59-6.868l-0.073-0.742z"></path>
            <path fill="#d36b17" style="fill: var(--color2, #d36b17)" d="M18.789 22.432c2.071 0.546 4.245 0.571 6.328 0.070l-0.029-0.29-0.001-0.011c-0.107-1.125-0.161-1.69 0.001-2.214s0.526-0.949 1.253-1.798l0.661-0.773c2.555-2.987 3.832-4.482 3.386-5.915-0.445-1.434-2.319-1.859-6.068-2.706l-0.972-0.22c-1.064-0.24-1.596-0.361-2.024-0.685-0.427-0.325-0.701-0.817-1.25-1.801l-0.501-0.901c-1.929-3.458-2.893-5.188-4.335-5.188s-2.407 1.729-4.335 5.188l-0.003 0.005-0.5 0.896c-0.549 0.984-0.823 1.477-1.25 1.801 0.061-0.045 0.119-0.094 0.172-0.148-0.358 2.112-0.187 4.28 0.498 6.309s1.863 3.857 3.428 5.32c1.565 1.462 3.468 2.514 5.539 3.060z"></path>
        </symbol>
    </defs>
</svg>
```

## File: src/partials/footer.html
```html
<footer class="footer">
  <div class="container footer-wrap">
    <div class="screen"></div>
    <a class="logo footer-logo" href="./index.html" aria-label="Site logo">
      <svg width="48" height="36">
        <use href="./img/sprite.svg#icon-logo"></use>
      </svg>
      Pirate Match
    </a>
    <hr class="footer-divider" />
    <div class="footer-content">
      <p class="copy">&copy; 2026 motiona.it.com — All rights reserved.</p>
      <ul class="footer-legal">
        <li><a class="legal-link" href="./privacy.html">Privacy Policy</a></li>
        <li>
          <a class="legal-link" href="./service.html">Terms of Service</a>
        </li>
      </ul>
    </div>
  </div>
</footer>
```

## File: src/partials/hero.html
```html
<section class="hero">
  <div class="container hiro-wrap">
    <div class="hiro-content">
      <p
        class="logo section-tag hiro-tag"
        href="./index.html"
        aria-label="Site logo"
      >
        <svg width="24" height="17">
          <use href="./img/sprite.svg#icon-logo"></use>
        </svg>
        Pirate Match
      </p>
      <h1 class="hiro-title">Set Sail For The Ultimate Puzzle Adventure.</h1>
      <p class="hiro-text">
        Match colorful gems, discover legendary treasures, and become the
        captain of your own pirate journey.
      </p>
    </div>
    <a
      class="btn-link hiro-link"
      target="_blank"
      href="https://play.google.com/store/apps/details?id=com.tactilegames.piratematch&hl=en&gl=us"
    >
      Play on Google Play
    </a>
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
  <body class="legal-body">
    <header class="header">
      <div class="container wrapper">
        <a class="logo" href="./index.html" aria-label="Site logo">
          <svg width="48" height="36">
            <use href="./img/sprite.svg#icon-logo"></use>
          </svg>
          Pirate Match
        </a>
        <a
          class="btn-link back-wrap"
          href="./index.html"
          aria-label="Site logo"
        >
          <svg width="16" height="16">
            <use href="./img/sprite.svg#icon-swiper"></use>
          </svg>
          <span class="back-text">Back to home</span>
        </a>
      </div>
    </header>
    <main>
      <section class="legal-section container">
        <div class="legal-wraper">
          <div>
            <h1 class="section-title legal-title-elem">Privacy Policy</h1>
            <p class="legal-subtitle individual">
              WE ARE SERIOUS ABOUT PROTECTING YOUR IDENTITY AND THE PERSONAL
              INFORMATION YOU SHARE WITH US. OUR PRIVACY POLICY APPLIES TO THE
              PERSONAL INFORMATION WE COLLECT THROUGH OUR WEBSITE AT
              urbangarden.pro. PLEASE READ THROUGH IT.
            </p>
            <p class="legal-subtitle">
              At Pirate Match and its affiliates ("Company"), respect for our
              users has the utmost importance. We understand your concerns about
              privacy, so we have posted this privacy policy to inform you what
              personal information we collect, how it is treated, what choices
              you have regarding our use of your personal information, and how
              you may access your personal information. For more information
              about the Terms of Use for this Website, please visit our Terms of
              Use page. This Privacy Policy applies to personal information we
              collect through our Website located at urbangarden.pro. In this
              document, "Website" is used to define all online properties and
              their domains. In this document "personal information" means any
              information that relates to an identified or identifiable
              individual. This information may include, but is not limited to,
              addresses, e-mail addresses, telephone numbers, date of birth,
              payment history, and IP address and geolocation data if it can be
              used to identify an individual. A corporation does not have
              personal data, but the individual who work for the company do.
            </p>
          </div>
          <div>
            <h2 class="legal-title">
              COLLECTION AND USE OF PERSONAL INFORMATION
            </h2>
            <p class="legal-subtitle">
              You can browse on our Website without giving us any personal
              information. We may collect personal information when you:
            </p>
            <ul class="text-list">
              <li>Browse our website, automatically;</li>
              <li>Apply for employment;</li>
            </ul>
            <p class="legal-subtitle">
              which personal information may be recorded by the standard
              operation of the Internet servers on which our Website is hosted.
              Employment Opportunities at Company: We may advertise employment
              opportunities on our Website. In connection with a job application
              or related inquiry, you may provide us with certain personal
              information about yourself (such as that contained in a resume,
              cover letter, or similar employment-related materials). We use
              this information to process and respond to your application for
              employment or related inquiry.
            </p>
          </div>
          <div>
            <h2 class="legal-title">DISCLOSURE OF PERSONAL INFORMATION</h2>
            <p class="legal-subtitle">
              Except as otherwise set out herein, we will not disclose, trade,
              rent, sell or otherwise transfer personal information about our
              visitors to any third party without consent. Service Providers: We
              may transfer your personal information to third parties who
              provide services on our behalf, such as host our Web site, send
              email or other communications on our behalf or analyze our
              advertising effectiveness. Your personal information may be stored
              and processed in Canada and in the United States by our affiliates
              and other third party service providers. These service providers
              are subject to a nondisclosure agreement and to other legal
              restrictions that govern their use of information we provide them
              and they are not authorized to use or disclose personal
              information for any purpose other than to provide services on our
              behalf or as otherwise required by applicable law. Legal: We and
              our service providers must give your personal information in
              response to a search warrant or any other legally valid inquiry or
              order or to an investigative body in the case of a breach of an
              agreement or contravention of law, or as it is required by
              applicable law.
            </p>
          </div>
          <div>
            <h2 class="legal-title">WEBSITE INFORMATION</h2>
            <p class="legal-subtitle">
              When you visit our Website, we collect the Internet Protocol
              address of all visitors to our Website and related information
              such as the Internet browser you are using, the computer operating
              system you are using, time spent visiting the Web site, usage
              patterns within the Web site, and the domain name of the web site
              from which you linked to our site. We collect this information to
              help us understand and improve your experience on the Website.
            </p>
          </div>
          <div>
            <h2 class="legal-title">COOKIES AND WEB BEACONS</h2>
            <p class="legal-subtitle">
              Our Website uses a technology called "cookies". A cookie is a tiny
              element of data that our Website can send to your browser, which
              may then be stored on your hard drive so we can recognize you when
              you return. We use cookies on the pages on our Website where you
              are prompted to log in or that are customizable. If you have
              registered with our Website, these cookies help us identify you
              and may be necessary to provide you with products or services you
              request. Cookies may also provide us or our service providers with
              information that we will use to personalize our Web site in
              accordance with your preferences. You may set your Web browser to
              notify you when you receive a cookie. However, if you decide not
              to accept cookies from our Website, you may not be able to take
              advantage of all of the features of our Website. Our Website may
              also use a technology called "tracer tags" or "Web Beacons". This
              technology allows us to understand which pages you visit on our
              Website. These tracer tags are used to help us optimize and tailor
              our Website for you and other future visitors to our Website. If
              you prefer not to be recognized when you visit our Website, you
              can always connect using an incognito browser window. You can also
              remove traces of your visit by clearing your browser history.
            </p>
          </div>
          <div>
            <h2 class="legal-title">SECURITY OF PERSONAL INFORMATION</h2>
            <p class="legal-subtitle">
              We realize that our visitors trust us to protect their personal
              information. We take that task seriously. We have implemented
              measures in an effort to safeguard the personal information in our
              custody and control, including only providing access to personal
              information to employees and authorized service providers who
              require such information for the purposes described in this
              Privacy Policy. We maintain reasonable administrative, technical
              and physical safeguards in an effort to protect against
              unauthorized access, use, modification and disclosure of personal
              information in our custody and control. The security of your
              personal information is important to us, but please remember that
              no method of transmission over the Internet or method of
              electronic storage is 100% secure. While we strive to use
              commercially reasonable efforts to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
          </div>
          <div>
            <h2 class="legal-title">RETENTION OF PERSONAL INFORMATION</h2>
            <p class="legal-subtitle">
              Your personal information will be retained until the purpose for
              which it was collected is fulfilled (subject to the legal time
              limit or retention schedule) and for a maximum period of three (3)
              years after the end of your relationship with Company, if any. If
              we collect your IP address, it will only be stored for the
              duration of your use of our Website and then deleted immediately
              or anonymized by shortening. We retain the information we collect
              via Google Analytics for a period of three (3) years (you can
              prevent Google Analytics from collecting your personal information
              by using the Google "Opt-out" browser add-on). Personal
              information we collect via other tools we use is retained for up
              to three (3) years but may be retained for shorter periods.
            </p>
          </div>
          <div>
            <h2 class="legal-title">USE OF SOCIAL MEDIA AND SOCIAL NETWORKS</h2>
            <p class="legal-subtitle">
              We encourage you to review your privacy options and settings with
              social media platforms and networks you use to understand what
              choices you have about sharing information from those platforms
              and networks with us. If necessary, you can update your
              preferences to reflect your usage.
            </p>
          </div>
          <div>
            <h2 class="legal-title">ABOUT CHILDREN</h2>
            <h3 class="legal-title">Children Under 13</h3>
            <p class="legal-subtitle">
              You can browse our Web site. You cannot use any service that asks
              for personal information. Our site is not designed for children.
              We do not wish to collect personal information from children under
              13. This policy is designed to protect children.
            </p>
          </div>
          <div>
            <h2 class="legal-title">CHANGES TO OUR PRIVACY POLICY</h2>
            <p class="legal-subtitle">
              This Privacy Policy may be updated periodically to reflect changes
              to our personal information practices. The revised Privacy Policy
              will be posted on the Website. We will treat your personal
              information in accordance with the Privacy Policy in place at the
              time of collection of such information, or as you otherwise
              consent.
            </p>
          </div>
          <div>
            <h2 class="legal-title">CONTACT US</h2>
            <p class="legal-subtitle">
              You may contact us at any time using the contact information below
              in the following cases: if you have any questions or comments
              about this Privacy Policy; if you wish to access, update, and/or
              correct inaccuracies in our records of your personal information;
              if you wish to delete your personal data; if you have a complaint
              about how we handle your personal information. Email:
              <a href="info@urbangarden.pro">info@urbangarden.pro</a>
              Last updated 2026-07-13
            </p>
          </div>
        </div>
      </section>
    </main>
    <load src="./partials/footer.html" />
  </body>
</html>
```

## File: src/css/legal.css
```css
/* Styles for Mobile devices */
.legal-body {
  background-color: var(--background-color-header);
  color: var(--color-secondary);
}

.back-wrap {
  padding-top: 16px;
  padding-bottom: 16px;
  fill: var(--color-secondary);
}

.back-text {
  display: none;
}

.legal-section {
  padding-top: 28px;
  padding-bottom: 32px;
}

.legal-wraper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.legal-title-elem {
  text-align: start;
  margin-bottom: 24px;
}

.legal-title {
  font-weight: 500;
  font-size: 28px;
  line-height: 1.29;
  margin-bottom: 24px;
}

.individual {
  margin-bottom: 48px;
}

ul.text-list {
  list-style-type: disc;
  padding-left: 24px;
}

/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  .back-text {
    display: block;
  }

  .back-wrap {
    display: flex;
    gap: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .legal-section {
    padding-top: 48px;
    padding-bottom: 144px;
  }

  .legal-wraper {
    gap: 48px;
  }

  .legal-title-elem {
    font-weight: 600;
    font-size: 64px;
    line-height: 1.09;
  }
}
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
  <body class="legal-body">
    <header class="header">
      <div class="container wrapper">
        <a class="logo" href="./index.html" aria-label="Site logo">
          <svg width="48" height="36">
            <use href="./img/sprite.svg#icon-logo"></use>
          </svg>
          Pirate Match
        </a>
        <a
          class="btn-link back-wrap"
          href="./index.html"
          aria-label="Site logo"
        >
          <svg width="16" height="16">
            <use href="./img/sprite.svg#icon-swiper"></use>
          </svg>
          <span class="back-text">Back to home</span>
        </a>
      </div>
    </header>
    <main>
      <section class="legal-section container">
        <div class="legal-wraper">
          <div>
            <h1 class="section-title legal-title-elem">Terms of Service</h1>
            <p class="legal-subtitle">
              For the purposes of this agreement, "the Company" shall refer to
              Pirate Match and its affiliates. "The Games" shall refer to any of
              our products, which may be composed of up to two elements:
            </p>
            <ul class="text-list">
              <li>
                (a) the game server or Server hosted and operated by the Company
                or its third parties;
              </li>
              <li>
                (b) the game client or Client that runs on your personal
                computer.
              </li>
            </ul>
          </div>
          <div>
            <h2 class="legal-title">1. Grant of a Limited License</h2>
            <p class="legal-subtitle">
              Subject to your agreement to and adherence to this Terms of
              Service, you are granted a license to use the Games. You agree
              that you will not:
            </p>
            <ul class="text-list">
              <li>
                (a) use the Games for any commercial purpose, or any purpose
                other than for entertainment;
              </li>
              <li>
                (b) use any form of cheat, hack, exploit, unauthorized
                third-party software, or modification of the software in
                conjunction with the Games;
              </li>
              <li>
                (c) provide any unauthorized means to play the Games, including
                but not limited to alternative servers or matchmaking services;
              </li>
              <li>
                (d) disrupt the Games in any way, including but not limited to
                the Servers, the Clients, or the experiences of other players;
              </li>
              <li>
                (e) violate any law or regulation through your use of the Games.
              </li>
            </ul>
          </div>
          <div>
            <h2 class="legal-title">2. Eligibility</h2>
            <p class="legal-subtitle">
              You agree that you have the right to bind yourself to this
              agreement in your country of residence, or that you may bind a
              minor for whom you are a parent or guardian on their behalf.
            </p>
          </div>
          <div>
            <h2 class="legal-title">3. Ownership</h2>
            <p class="legal-subtitle">
              All title, ownership rights, and intellectual property with
              respect to the Games including but not limited to user accounts,
              code, compiled binaries, text, images, 3D models, artwork, data,
              sounds, and music, are the sole property of the Company or its
              collaborators.
            </p>
          </div>
          <div>
            <h2 class="legal-title">4. User Accounts</h2>
            <p class="legal-subtitle">
              The Company reserves the right to suspend, delete, or modify user
              accounts at its sole discretion for any reason without notice.
            </p>
          </div>
          <div>
            <h2 class="legal-title">5. Indemnity</h2>
            <p class="legal-subtitle">
              The Company shall not be held liable in any way for any loss,
              damage, injury, cost, or expense as a result of the Games or any
              use of the Games, including but not limited to loss of characters,
              virtual goods, accounts, rankings, loss of data, or computer
              malfunction. You further agree that the Company is not responsible
              for interruptions of service to the Games, including but not
              limited to failure to connect to the Server, inability to access
              any part of the Games due to an error or bug, or degraded user
              experience due to poor performance or latency. You hereby agree to
              indemnify and hold the Company harmless from any loss, claim,
              liability, damage, or expense incurred by the Company from your
              use of the Games.
            </p>
          </div>
          <div>
            <h2 class="legal-title">6. Termination</h2>
            <p class="legal-subtitle">
              The Company may terminate this agreement at any time in its sole
              discretion for any reason without notice.
            </p>
          </div>
          <div>
            <h2 class="legal-title">
              7. Changes to this Agreement or the Games
            </h2>
            <p class="legal-subtitle">
              The Company reserves the right to change the contents of this
              agreement or the contents of the Games at any time in its sole
              discretion.
            </p>
          </div>
        </div>
      </section>
    </main>
    <load src="./partials/footer.html" />
  </body>
</html>
```

## File: src/css/base.css
```css
:root {
  --background-color-header: #55245b;
  --background-color-main: #022450;
  --background-color-secondary: #f1dcb6;
  --background-color-additional: #b5ebfd;
  --background-color-rare: #073993;
  --background-color-link: linear-gradient(180deg, #ec9e25 0%, #d36b17 127.08%);
  --box-shadow-hover: 0 0 22px 0 #d36b17;
  --color-main: #0f1618;
  --color-secondary: #efeafe;
  --color-icon: #ec9e25;
  --border-divider: 1px solid #073993;
  --transition-efect: 250ms ease-in-out;
  --tracking: 0.05em;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 124px;
}

body {
  overflow-x: hidden;
  font-family: 'Quicksand', sans-serif;
  background-color: var(--background-color-main);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  color: var(--color-main);
}

body[data-scroll='locked'] {
  overflow: hidden;
}

main {
  flex-grow: 1;
  padding-top: 124px;
}

h1,
h2,
h3,
h4,
a {
  font-family: 'Fredoka', sans-serif;
}

.section {
  padding-top: 40px;
  padding-bottom: 40px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-tag {
  display: block;
  width: fit-content;
  padding: 4px 16px;
  border-radius: 16px;
  text-align: center;
  font-family: 'Fredoka', sans-serif;
  font-size: 20px;
  line-height: 1.3;
  color: var(--background-color-main);
  background-color: var(--background-color-additional);
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  color: var(--color-secondary);
}

.logo {
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 500;
  font-size: clamp(20px, 6vw, 28px);
  line-height: 1.29;
  color: var(--color-secondary);
}

.btn-link {
  display: block;
  max-width: 196px;
  padding: 13px 16px;
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: var(--color-secondary);
  background: var(--background-color-link);
}

.section-bg {
  position: relative;
  overflow: visible;
  max-width: 375px;
  margin: 0 auto;
}

.section-bg-img {
  position: absolute;
  background-size: 100% auto;
  background-repeat: no-repeat;
  pointer-events: none;
}

.content-position {
  position: relative;
  z-index: 10;
}

@media only screen and (min-width: 1440px) {
  html {
    scroll-padding-top: 95px;
  }

  main {
    padding-top: 94px;
  }

  .section {
    padding-top: 120px;
    padding-bottom: 100px;
  }

  .btn-link {
    transition: box-shadow var(--transition-efect);
  }

  .btn-link:hover {
    box-shadow: var(--box-shadow-hover);
  }

  .section-bg {
    max-width: 1440px;
  }
}
```

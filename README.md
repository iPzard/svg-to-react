# SVG to React

[![Build](https://img.shields.io/badge/build-passing-%2357a9a9?style=for-the-badge)](https://github.com/iPzard/svg-to-react#readme)
[![License](https://img.shields.io/github/license/iPzard/svg-to-react?color=57a9a9&style=for-the-badge)](https://github.com/iPzard/svg-to-react/blob/master/LICENSE)

> Convert multiple SVG files into React (.js) files. Place your SVGs in the root-level `svg/` directory, and run one of the scripts listed below to process your batch.
<br>

## 📜 Scripts

The single file script will create a single `./output/single/icons.js` file with each SVG available as an export.
The multiple file script will create individual files/components for each SVG in an `./output/single/<filename>` file. The multiple file script will also convert filenames which use dashes to PascalCase.<br>

**Single file:**
```bash
yarn run start:single
```

**multiple files:**
```bash
yarn run start:multiple
```
<br>

## 🦟 Bugs
Bugs reported on the project's [issues page](https://github.com/iPzard/svg-to-react/issues) will be exterminated as quickly as possible, be sure to include steps to reproduce so they can be spotted easily.
<br><br>

## License
MIT © [SVG to React](https://github.com/iPzard/svg-to-react/blob/master/LICENSE)
# SVT to React

> Transform SVG files into React component files — in bulk.

## Description
Allows you to convert all of your SVG files into React (.js) files. Place your SVGs in a root `svg/` folder, and run one of the scripts below. The single file option will create a single `./output/single/icons.js` file with each SVG available as an export.<br><br>

The multiple file option will create individual files/components for each SVG in an `./output/single/<filename>` file. The multiple file option will also convert filenames which use dashes to PascalCase.<br><br>

## Single file with all React exports
```bash
npm run svg-to-react:single-file
```
**Or..**
```bash
yarn run svg-to-react:single-file
```

## Multiple files - a file for each React export
```bash
npm run svg-to-react:multiple-files
```
**Or..**
```bash
yarn run svg-to-react:multiple-files
```

## License
MIT © [SVG to React](https://github.com/iPzard/svg-to-react)
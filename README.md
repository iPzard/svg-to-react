# SVG to React

> Convert multiple SVG files into React (.js) files. Place your SVGs in the root-level `svg/` directory, and run one of the scripts listed below.


## 📜 Scripts

The single file option will create a single `./output/single/icons.js` file with each SVG available as an export.<br><br>

**Single file:**
```bash
yarn run start:single
```

The multiple file option will create individual files/components for each SVG in an `./output/single/<filename>` file. The multiple file option will also convert filenames which use dashes to PascalCase.<br><br>

**multiple files:**
```bash
yarn run start:multiple
```

## License
MIT © [SVG to React](https://github.com/iPzard/svg-to-react)
const { createSingleFile } = require('./utilities/createSingleFile.js');
const { createMultipleFiles } = require('./utilities/createMultipleFiles.js');
const fs = require('fs');
const input = './svg';

// Convert text with dashes into PascalCase
const pascalCased = string => {
 return string.charAt(0).toUpperCase() +
  string.replace(/-([a-z])/g, letters => letters[1].toUpperCase()).slice(1);
};

// Determine filename, new filename, and component name
const names = fs.readdirSync(input).reduce((accumulator, file) => {
  return [ 
    ...accumulator, 
    { 
      originalFileName: file, 
      newFileName: pascalCased(file).replace('.svg', '.js'),
      componentName: pascalCased(file).replace('.svg', '')
    } 
  ];
}, []);

// Determine option for single or multiple files
const option = process.argv[2];

// Create file(s)
switch(option) {
  case 'single':
    createSingleFile(names, input);
    break;

  case 'multiple':
    createMultipleFiles(names, input);
    break;
};
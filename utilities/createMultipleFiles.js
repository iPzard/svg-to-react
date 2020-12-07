const fs = require('fs');

const createMultipleFiles = (names, input) => {
  names.forEach(name => {
    const svg = fs.readFileSync(`${input}/${name.originalFileName}`, { encoding: 'utf8' });

    // Template for component
    const component = `import React from 'react';`+'\n\n'+
    `export const ${name.componentName}Icon = () => {`+'\n'+
    `  return (`+'\n'+
    `    ${svg}`+'\n'+
    `  );`+'\n'+
    `};`;

    if(name.originalFileName.includes('.svg')) {
      // If output directory doesn't exist, create one
      if (!fs.existsSync('./output')) fs.mkdirSync('./output');
      if (!fs.existsSync('./output/multiple')) fs.mkdirSync('./output/multiple');
      
      // Write component to output directory
      fs.writeFileSync(`./output/multiple/${name.newFileName}Icon`, component);
    }
    
  });
};

module.exports = { createMultipleFiles };
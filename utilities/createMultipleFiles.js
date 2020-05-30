const fs = require('fs');

const createMultipleFiles = (names, input) => {
  names.forEach(name => {
    const svg = fs.readFileSync(`${input}/${name.originalFileName}`, { encoding: 'utf8' });

    // Template for component
    const component = `import React from 'react';
    `+
    `const ${name.componentName} = () => {
      return (
        ${svg}
      );
    };
    `+
    `export default ${name.componentName};`;

    // If output directory doesn't exist, create one
    if (!fs.existsSync('./output')) fs.mkdirSync('./output');
    if (!fs.existsSync('./output/multiple')) fs.mkdirSync('./output/multiple');
    
    // Write component to output directory
    fs.writeFileSync(`./output/multiple/${name.newFileName}`, component);
    
  });
};

module.exports = { createMultipleFiles };
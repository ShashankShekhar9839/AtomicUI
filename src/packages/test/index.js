// const convertCssToMonatomic = require('css-to-monatomic');

// const css = `
//   .text-center {
//     text-align: center;
//   }
//   .text-bold {
//     font-weight: bold;
//   }
// `;

// const monatomicCss = convertCssToMonatomic(css);
// console.log(monatomicCss);

// const generateTheme = require('../theme/theme-generator');

// Define your theme object
// const myTheme = {
//   buttonColors: ['white', 'green', 'red', 'yellow'],
//   buttonBackgroundColor: 'blue',
//   // Add more theme properties as needed
// };


// Generate theme stylesheet
// generateTheme(myTheme);
const fs = require('fs');
const {cssFilePath} = require('../theme/index');

const cssFileContents = fs.readFileSync(cssFilePath, 'utf8');

console.log('css contente', cssFileContents);


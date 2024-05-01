const fs = require('fs');
const  convertCSSToMonatomic  = require('css-to-monatomic');

function generateTheme(theme) {
  let css = '';

  // Generate CSS for button colors
  if (theme.buttonColors && theme.buttonColors.length > 0) {
    theme.buttonColors.forEach((color, index) => {
      css += `.btn-color-${index + 1} { color: ${color}; }\n`;
    });
  }

  // Generate CSS for button background color
  if (theme.buttonBackgroundColor) {
    css += `.btn-bg { background-color: ${theme.buttonBackgroundColor}; }\n`;
  }

  // Convert generated CSS to monatomic classes
  const monatomicCss = convertCSSToMonatomic(css);

  // Write monatomic CSS to a file (e.g., theme.css)
  fs.writeFileSync('theme.css', monatomicCss);

  console.log('Theme stylesheet generated successfully.');
}

module.exports = generateTheme;

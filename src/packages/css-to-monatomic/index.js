const postcss = require('postcss');
const selectorParser = require('postcss-selector-parser');

function convertCSSToMonoatomic(css) {
    // process css with postcss
    return postcss()
    .use((cssRoot) => {
        cssRoot.walkRules((rule) => {
            // transform each selector
            rule.selector = selectorParser((selectors) => {
                selectors.walkClasses((selector) => {
                    const className = selector.value.trim();
                    const monoatomicClass = getMonoAtomicClass(className);
                    selector.value = monoatomicClass;
                });
            }).processSync(rule.selector);
        })
    })
    .process(css)
    .css;
}

function getMonoAtomicClass(cssClass) {
    const classMap = {
    'text-center': 'ta-c',
    'text-left': 'ta-l',
    'text-right': 'ta-r',
    'font-bold': 'fw-b',    
    }

    return classMap[cssClass] || cssClass;
}
module.exports = convertCSSToMonoatomic;
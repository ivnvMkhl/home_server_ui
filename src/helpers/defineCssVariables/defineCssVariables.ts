const defineCssVariables = (variablesDict: [string, string][]) => {
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    const styleString = `
    :root {
        ${variablesDict
            .map(([key, value]) => `${key}: ${value};`)
            .toString()
            .replace(',', ' ')}
    }`;
    style.textContent = styleString;
    document.head.append(style);
};

export { defineCssVariables };

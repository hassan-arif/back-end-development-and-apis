// Within the index.js file, create a function, getUpperCase, which takes a string as an argument, and returns an uppercase version of the string.

function getUpperCase(str) {
    return str.toUpperCase()
}

// Within the index.js file, create a function, getLowerCase, which takes a string as an argument, and returns a lowercase version of the string.

function getLowerCase(str) {
    return str.toLowerCase()
}

// getSentenceCase

function getSentenceCase(str) {
    return getUpperCase(str[0]) + getLowerCase(str.slice(1))
}

// Within index.js, create a function, getProperCase, which takes a string as an argument.
// Within getProperCase, return a string of the argument with the first character of each word capitalized and the rest lowercase.
function getProperCase(str) {
    return str.split(' ').map(s => getSentenceCase(s)).join(' ')
}

// Use module.exports to export the getUpperCase, getLowerCase, getSentenceCase, and getProperCase functions.

module.exports = {
    getUpperCase: getUpperCase,
    getLowerCase: getLowerCase,
    getSentenceCase: getSentenceCase,
    getProperCase: getProperCase
}
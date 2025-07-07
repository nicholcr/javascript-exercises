const reverseString = function(str) {
    return str
    .split("")
    .map(
        (letter, index, fullWord) => letter = fullWord[str.length - (index + 1)]
    )
    .join('');
};

// Do not edit below this line
module.exports = reverseString;

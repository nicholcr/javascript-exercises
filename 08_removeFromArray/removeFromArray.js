const removeFromArray = function(arr, ...elements) {
    let result = arr;
    for (const element of elements) {
        result = result.filter(item => (item !== element))
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

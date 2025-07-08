const sumAll = function (a, b) {
    if (a < 0 || b < 0 ||
        !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }

    let arr = [];
    let smallerNumber = Math.min(a, b);
    let largerNumber = Math.max(a, b);

    for (let i = smallerNumber; i <= largerNumber; i++) {
        arr[i] = i
    }
    return arr.reduce((sum, current) => sum + current, 0)
};

// Do not edit below this line
module.exports = sumAll;

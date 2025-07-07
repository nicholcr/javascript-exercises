const repeatString = function (string, timesRepeated) {
    let returnString = "";
    if (timesRepeated >= 0) {
        for (i = 0; i < timesRepeated; i++) {
            returnString += string;
        }
        return returnString;
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;

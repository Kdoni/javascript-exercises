const fibonacci = function (number) {
    let progression = 2;
    let emptyArray = [1, 1];
    if (number < 0) {
        return "OOPS";
    } else if (number === 0) {
        return 0;
    } else if (number === 1 || number === 2) {
        return 1;
    }
    for (let i = 2; i < number; i++) {
        emptyArray.push(progression);
        progression += emptyArray[i - 1]
    }
    return emptyArray[emptyArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;

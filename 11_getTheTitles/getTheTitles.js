const getTheTitles = function (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (book in array[i]) {
        }
        result.push(array[i].title);

    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;

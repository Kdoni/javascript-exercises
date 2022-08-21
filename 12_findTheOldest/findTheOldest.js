const findTheOldest = function (array) {
    // let sorted = array.sort((a, b) => {
    //     let itemOne = a.yearOfDeath - a.yearOfBirth;
    //     let itemTwo = b.yearOfDeath - b.yearOfBirth;
    //     return itemOne > itemTwo ? -1 : 1;
    // });
    // return sorted;

    for (let i = 0; i < array.length; i++) {
        if ("yearOfDeath" in array[i] === false) {
            array[i].yearOfDeath = new Date().getFullYear();
        }
    }
    sorted = array.sort((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;

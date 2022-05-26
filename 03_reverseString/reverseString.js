const reverseString = function(input) {
    let splitted = input.split("");
    let list = [];
    for (i=splitted.length-1;i>=0;i--){
        list.push(splitted[i]);
    }
    return list.join("");


};

// Do not edit below this line
module.exports = reverseString;





const palindromes = function (word) {
    var normal = word.replace(/[^a-zA-Z0-9 ]/g, '', "").toLowerCase().split(" ").join("");
    var reversed = normal.split("").reverse().join("");
    return normal === reversed;
};

// Do not edit below this line
module.exports = palindromes;

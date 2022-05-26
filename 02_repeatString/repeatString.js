const repeatString = function(string,num) {
    if (num===0){
        return("");
    }else if (num<0){
        return("ERROR")
    }

    let numero = string;
    for (n=0;n<num-1;n++){
        string=string+numero;
    }
    return(string);

};

let result = repeatString("hey",10);

// Do not edit below this line
module.exports = repeatString;

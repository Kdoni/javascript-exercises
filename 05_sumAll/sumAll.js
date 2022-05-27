const sumAll = function(num1,num2) {
    let sum=0;
    let num1Cor;
    let num2Cor;
    if (num1<0 || num2<0){
        return "ERROR";
    }else if (typeof num1 == "string" || typeof num2== "string"){
        return "ERROR";
    }else if (num1<num2){
        num1Cor=num1;
        num2Cor=num2;
    }else if (num1>num2){
        num1Cor=num2;
        num2Cor=num1;
    }else{
        return "ERROR";
    }
    for (let i=num1Cor;i<=num2Cor;i++){
        sum +=i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(myArray,...otherArg) {
    let filter = myArray.filter(removableObject);
    function removableObject(eraser){
        if(otherArg.constructor!==Array){
            return otherArg!==eraser;
        }else{
            return otherArg.includes(eraser) ==false;
        }
    }   
    return filter;
};

// Do not edit below this line
module.exports = removeFromArray;

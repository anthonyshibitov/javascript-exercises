const removeFromArray = function() {
    //Convert arguments object into an array, so we can do array operations on it
    const args = [...arguments];

    const finalArray = args[0];

    for(let argCounter = 1; argCounter < args.length; argCounter++){
        for(let arrayCounter = 0; arrayCounter < finalArray.length; arrayCounter++){
            if(args[argCounter] === finalArray[arrayCounter]){
                finalArray.splice(arrayCounter, 1);
            }
        }
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;

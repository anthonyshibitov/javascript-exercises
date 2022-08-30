const sumAll = function(arg1, arg2) {

    if(!Number.isInteger(arg1) || !Number.isInteger(arg2)) return 'ERROR';
    if(arg1 < 0 || arg2 < 0) return 'ERROR';

    let oneLower = (arg1 < arg2) ? 1 : 0;
    
    if(oneLower) return helperSum(arg1, arg2);
    return helperSum(arg2, arg1);

};

//Arg1 always the lower of the two
function helperSum(arg1, arg2){
    let sum = 0;
    for(; arg1 <= arg2; arg1++){
        sum += arg1;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;

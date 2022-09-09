const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    if (num == 1) return 1;

    if (num == 2) return 1;

    let aValue = 1;
    let bValue = 1;
    let currentFib = 0;
    let acc = 0;

    for(let i = 2; i < num; i++){
        currentFib = aValue + bValue;
        aValue = bValue;
        bValue = currentFib;
    }
    return currentFib;
};

// Do not edit below this line
module.exports = fibonacci;

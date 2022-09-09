const palindromes = function (inputString) {
    //Extract only alphabetical values
    let alphaExtract = [];

    inputString = inputString.toLowerCase();

    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] >= 'A' && inputString[i] <= 'z') alphaExtract.push(inputString[i]);
    }
    console.log(alphaExtract.toString() + " ||| " + alphaExtract.reverse().toString());
    return (alphaExtract.toString() == alphaExtract.reverse().toString());
};

// Do not edit below this line
module.exports = palindromes;

const repeatString = function(phrase, repeatCount) {
    let completedPhrase = '';
    if(repeatCount < 0){
        return 'ERROR';
    }
    for (let i = 0; i < repeatCount; i++){
        completedPhrase += phrase;
    }
    return completedPhrase;
};

// Do not edit below this line
module.exports = repeatString;

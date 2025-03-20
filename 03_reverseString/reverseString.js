const reverseString = function(sentence) {
    let reverseCentence='';
    for (let index = 0; index < sentence.length; index++) {
        reverseCentence += sentence[sentence.length-index-1];
        
    }
    return reverseCentence;
};

// Do not edit below this line
module.exports = reverseString;

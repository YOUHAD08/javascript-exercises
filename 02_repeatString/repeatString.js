const repeatString = function(word, number) {
    if (number<0) {
        return 'ERROR'; 
    }
    let repeatedword = '';
    for (let index = 0; index < number; index++) {
         repeatedword =repeatedword + word;    
    }
    return repeatedword;
};

// Do not edit below this line
module.exports = repeatString;

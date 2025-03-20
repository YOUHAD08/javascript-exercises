const removeFromArray = function(array, ...argsarray) {
    return array.filter(value=> !argsarray.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;

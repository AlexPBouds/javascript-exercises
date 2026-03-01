const removeFromArray = function(array, ...values) {
    newArray = array;

    // Needs to remove all instances of that value from array
    // Needs to be able to adapt to the amount of arguments given
    // Needs to ignore any value that's not present from arguments
    // Needs to work with strings too

    for (const value of values) {
        tempArray = newArray.filter(item => item !== value);
        newArray = tempArray;
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

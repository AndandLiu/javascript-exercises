const removeFromArray = function(array, ...removeItems) {

    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        if(removeItems.indexOf(array[i]) == -1) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

const getTheTitles = function(arr) {
    titleArray = [];

    arr.map((obj) => 
        titleArray.push(obj.title)
    );
    
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;

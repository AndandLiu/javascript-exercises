const fibonacci = function(num) {
    let prevNum = 0;
    let currentNum = 1;

    if(num == 0){
        return 0;
    }
    else if(num < 0){
        return "OOPS";
    }

    for(let i = 1; i < parseInt(num); i++){
        const tempNum = currentNum;
        currentNum = currentNum + prevNum;
        prevNum = tempNum
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;

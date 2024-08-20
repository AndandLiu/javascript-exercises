const sumAll = function(num1, num2) {

    let total = 0;
    let start,end;

    if(num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    else if(num1 !== Math.floor(num1) || num2 !== Math.floor(num2)) {
        return "ERROR"
    }
    else if(typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR"
    }

    if(num1 > num2) {
        start = num2;
        end = num1;
    }
    else {
        start = num1;
        end = num2;
    }

    for (var i = start; i < end + 1; i++) {
        total += i;
    }

    return total
};

// Do not edit below this line
module.exports = sumAll;

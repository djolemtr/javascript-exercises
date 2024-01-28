const sumAll = function(first, second) {

    if (typeof first !== "number" || typeof second !== "number") {
        return "ERROR";
    }

    if (first > second) {
        [first, second] = [second, first];
    }

    if(first < 0 || second < 0) {
        return "ERROR";
    }

    let sum = 0;

    for(let i = first; i <= second; i++){
        sum += i;
    }

    return sum;

};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;

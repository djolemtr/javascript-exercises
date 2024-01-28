const reverseString = function(string) {

    let array = string.split("");
    let reversedString = "";

    for(let i = array.length; i >= 1; i--){

        reversedString += array[i - 1];

    }

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;

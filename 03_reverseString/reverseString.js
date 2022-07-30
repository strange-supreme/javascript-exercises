const reverseString = function(string) {
    let word  = "";
    for(let i=string.length; i >= 0; i--) {
        word+=string.charAt(i);
    }

    return word;
};

// Do not edit below this line
module.exports = reverseString;

const reverseString = (string) => {
    const arrIn = string.split('');
    const arrOut = [];
    for (let i = 0; i < arrIn.length; i++){
        arrOut.unshift(arrIn[i]);
    }
    return arrOut.join('');
};

// Do not edit below this line
module.exports = reverseString;

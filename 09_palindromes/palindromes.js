const palindromes = function (str) {
    const strArr = str.toLowerCase().split('');
    const strArrNoPun = strArr.filter((item) => (item.match(/\w/i)));
    return (strArrNoPun.join('') === strArrNoPun.reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;

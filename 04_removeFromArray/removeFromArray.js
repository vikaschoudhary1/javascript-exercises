const removeFromArray = (arr, ...arg) => {
    for (let i=0; i < arg.length; i++){
        const varPosition = arr.indexOf(arg[i]);
        if ( varPosition === -1){ continue;}        //resets the loop if cannot find arg[i] in arr
        arr.splice(varPosition, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

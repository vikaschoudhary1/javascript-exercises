const removeFromArray = (arr, ...args) => {
    for (let i=0; i < args.length; i++){
        const varPosition = arr.indexOf(args[i]);
        if ( varPosition === -1){ continue;}        //resets the loop if cannot find arg[i] in arr
        arr.splice(varPosition, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

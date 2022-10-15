const fibonacci = function(num) {
    num = Number(num);
        if(num > 0) {
            const arr = [1, 1];
            for (let i = 2; i < num; i++){
                arr[i] = arr[i-1] + arr[i-2];
            }
            return arr[num-1];
        } else if (num === 0){
            return 0
        } else { return 'OOPS'; }
};

// Do not edit below this line
module.exports = fibonacci;

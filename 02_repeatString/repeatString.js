const repeatString = (str, n) => {
   if(n >= 0){ 
        let arrStr = [];
        for (let i = 0; i < n; i++){
            arrStr.push(str);
        }
        return arrStr.join('');
   } else { return 'ERROR'}
};

// Do not edit below this line
module.exports = repeatString;

const repeatString = (words, times) => {
   if(times >= 0){ 
        let arrStr = [];
        for (let i = 0; i < times; i++){
            arrStr.push(words);
        }
        return arrStr.join('');
   } else { return 'ERROR'}
};

// Do not edit below this line
module.exports = repeatString;

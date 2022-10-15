const findTheOldest = function(arr) {
    const sortedArr = arr.sort((person1, person2) => {
        const currentYear = (new Date).getFullYear();
        person1Age = (person1.yearOfDeath || currentYear) - person1.yearOfBirth;
        person2Age = (person2.yearOfDeath || currentYear) - person2.yearOfBirth;
        return person1Age > person2Age ? +1 : -1
    });
    return sortedArr[sortedArr.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;

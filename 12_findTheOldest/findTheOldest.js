
//Receive array of objects
const findTheOldest = function(people) {
    const oldestArray = people.sort(function(a, b){
        const year = new Date().getFullYear();
        if(!a.yearOfDeath) {
            a.yearOfDeath = year;
        }
        if(!b.yearOfDeath) {
            b.yearOfDeath = year;
        }
        return (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1; 
    });
    return oldestArray[0];
};

/*
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.table(findTheOldest(people));
*/

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(people) {
    const peopleWithAge = people.map((person) => {
        if(!person.yearOfBirth) person.yearOfBirth = (new Date()).getFullYear();
        if(!person.yearOfDeath) person.yearOfDeath = (new Date()).getFullYear();
        person.Age = person.yearOfDeath - person.yearOfBirth;
        return person;
    }).sort((a,b) => b.Age - a.Age);

    return peopleWithAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const personAge = person.yearOfDeath - person.yearOfBirth;
    return personAge > oldestAge ? person : oldest;
  }, people[0]);
};
// Do not edit below this line
module.exports = findTheOldest;

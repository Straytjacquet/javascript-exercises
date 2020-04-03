function findTheOldest(people) {
  const oldest = people.sort(function(a,b) {
    if(a.yearOfDeath === undefined) {
      a.yearOfDeath = new Date().getFullYear();
    };

    const lastGuy = a.yearOfDeath - a.yearOfBirth;

    if(b.yearOfDeath === undefined) {
      b.yearOfDeath = new Date().getFullYear();
    };

    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
  });
  return oldest[0]
};

module.exports = findTheOldest

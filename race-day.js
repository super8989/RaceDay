let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 18;

if (age > 18 && registeredEarly) {
  raceNumber = raceNumber + 1000;
}



if (age > 18 && registeredEarly) {
  console.log('Race at 9:30 am ' + raceNumber);
} else if (age > 18 && !registeredEarly) {
  console.log('Race at 11:00 am ' + raceNumber);
} else if (age < 18 ) {
  console.log('Race at 12:30 pm ' + raceNumber);
} else {
  console.log('Come see the registration desk');
}


// to create a non-duplicating raceNumber
//  1. generate a random number
//  2. check if the number has been written to a record file of all your used numbers
//  3. if it is in your file of used numbers, generate another one and then check and so on
// 4. if it is not in your file of used numbers, write it to your file of used numbers, and return the newly generated number

const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const keys = Object.keys(person);
console.log(keys);

const entries  = keys.map((key) => {return [key,person[key]]});
console.log(entries);

// const entries = Object.entries(person);
// console.log(entries);

// Print values of person using Object.keys
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = 'Simon';
//  in qeusto caso person2 si riferisce a person1 modificando cosi il nome in simon ,
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
//ho provato a dare ai parametri dei valori di default ,penso che ho fatto bene ma non sono sicuro.
const { id, firstName : name, lastName : surname, age:old} = person
// const { id, name, surname, old } = person;
console.log(id, name, surname, old);
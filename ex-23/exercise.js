function isAdult({age}) { //non so se ho fatto bene ma ho provato prima a cambiare parametro in checkAge ,solo che dava lo stesso risultato
                          //poi ho provato a mettere age tra parentesi graffe ed ho levato il metodo .age rimanendo solo age ed il risultato è lo stesso.
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));
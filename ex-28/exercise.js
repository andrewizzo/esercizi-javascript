// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

function sum(...num){
  return num.reduce((n1,n2) => n1 + n2,0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
let shoppingList = [
  { name: "apple", quantity: 6 },
  { name: "banana", quantity: 5 },
  { name: "oatmeal", quantity: 1 },
  { name: "avocado", quantity: 4 },
];

// let groceryList  = shoppingList.map((value,index) =>(value.name.toUpperCase()))
// console.log("🚀 ~ groceryList:", groceryList)
// let newlist = shoppingList.map((value) => value.quantity +=2)
// console.log("🚀 ~ newlist:", shoppingList);

let numbers = [3, 2, 5, 6, 8];

// let multipliedNumbers = numbers.map((num) => num * 10);

// multipliedNumbers.forEach((num) => console.log(num));

// const students = numbers.map((value,index)=>({
//         name:`student - ${index}`,
//         grade: value

// }))

// console.log("🚀 ~ students ~ students:", students)
const fruits = shoppingList.map((value) => value.name).join(",");
console.log("🚀 ~ fruits:", fruits);

const fruitsArray = fruits.split(',');
console.log("🚀 ~ fruitsArray:", fruitsArray);

const total = numbers.reduce((acc, value) => acc * value, 1);
console.log("🚀 ~ total:", total);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);

console.log(
  "flat matrix",
  matrix.flat().reduce((acc, value) => (acc + value, 0))
);

// let shoppingList = [
//   { name: "apple", quantity: 6 },
//   { name: "banana", quantity: 5 },
//   { name: "oatmeal", quantity: 1 },
//   { name: "avocado", quantity: 4 },
// ];

// let groceryList  = shoppingList.map((value,index) =>(value.name.toUpperCase()))
// console.log("🚀 ~ groceryList:", groceryList)
// let newlist = shoppingList.map((value) => value.quantity +=2)
// console.log("🚀 ~ newlist:", shoppingList);

let numbers = [3, 2, 5, 6, 8];

// let multipliedNumbers = numbers.map((num) => num * 10);

// multipliedNumbers.forEach((num) => console.log(num));

const students = numbers.map((value,index)=>({
        name:`student - ${index}`,
        grade: value

}))
console.log("🚀 ~ students ~ students:", students)

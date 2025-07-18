let shoppingList = [
 {name: "apple", quantity: 6}, 
 {name: "banana", quantity: 5}, 
 {name: "oatmeal", quantity: 1},
 {name: "avocado", quantity:4}
];

let groceryList = shoppingList.map(item => item.name.toUpperCase());

shoppingList.forEach(item => console.log(`${item.name} - ${item.quantity}`));

shoppingList.forEach(item => {
    item.quantity += 2;
})


let numbers = [3, 2, 5, 6, 8];

let multipliedNumbers = numbers.map(num => num * 10);

multipliedNumbers.forEach(num => console.log(num));

let students = multipliedNumbers.map((num, index) => ({
    name: `student-${index}`,
    grade: num
}));

students.forEach(student => console.log(`${student.name} - ${student.grade}`));
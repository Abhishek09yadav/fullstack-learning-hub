let groceryList = ["apples", "bananas", "oatmeal", "avocados"];

let sorted = groceryList.sort();

let sortedByLen = [...groceryList].sort((a, b) => a.length - b.length);

let shoppingList = [
 {name: "apple", quantity: 6}, 
 {name: "banana", quantity: 5}, 
 {name: "oatmeal", quantity: 1},
 {name: "avocado", quantity:4}
];

// let ascending = [...shoppingList].sort((a, b) => a.quantity - b.quantity);

// let descending = [...shoppingList].sort((a, b) => b.quantity - a.quantity);


let numbers = [23, 1, 45, 12, 78, 3];

let ascending = numbers.slice().sort((a, b) => a - b);

let descending = [...numbers].sort((a, b) => b - a);

let words = ["elephant", "dog", "cat", "hippopotamus", "ant"];

let wordsDescending = words.slice().sort().reverse();

let wordsDescendingLen = [...words].sort((a, b) => b.length - a.length);
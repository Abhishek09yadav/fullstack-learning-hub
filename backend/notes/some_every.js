let shoppingList = [
 {name: "apple", quantity: 6}, 
 {name: "banana", quantity: 5}, 
 {name: "oatmeal", quantity: 0},
 {name: "avocado", quantity:4}
];

let filteredList = shoppingList.filter(item => item.quantity > 0);

let isAnyZero = filteredList.some(item => item.quantity === 0);

let allGreaterThanZero = filteredList.every(item => item.quantity > 0);

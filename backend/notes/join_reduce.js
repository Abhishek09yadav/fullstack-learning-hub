let shoppingList = [
 {name: "apple", quantity: 6}, 
 {name: "banana", quantity: 5}, 
 {name: "oatmeal", quantity: 1},
 {name: "avocado", quantity: 4}
];

let groceryList = shoppingList.map(item => item.name).join(", ");

let itemCount = shoppingList.reduce((sum, item) => sum + item.quantity, 0);
let shoppingList = [
 {name: "apple", quantity: 6}, 
 {name: "banana", quantity: 5}, 
 {name: "oatmeal", quantity: 1},
 {name: "avocado", quantity:4}
];

let shoppingListCopy = JSON.parse(JSON.stringify(shoppingList));

shoppingListCopy.push({name: "chocolate", quantity: 1});

console.log(shoppingList === shoppingListCopy);

shoppingListCopy[0].name = "snickers";
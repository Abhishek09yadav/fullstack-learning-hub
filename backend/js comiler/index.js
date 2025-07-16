let shoppingList = [
  { name: "apple", quantity: 6 },
  { name: "banana", quantity: 5 },
  { name: "oatmeal", quantity: 1 },
  { name: "avocado", quantity: 4 },
  { name: "wxy", quantity: 3 },
];


const sorted = [...shoppingList].sort((a,b) => b.name.localeCompare(a.name))
console.log("🚀 ~ sorted:", sorted)
console.log("🚀 ~ shoppingList:", shoppingList)



const dishes = ["plate", "bowl", "cup", "fork", "knife"];
const oddEven = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const mapres = dishes.map((item, index) => {
  return item + " " + index;
});
const filterres = oddEven.filter((value, index) => {
  return value % 2 == 0;
});

const forEachRes = dishes.forEach((dish) => {
  console.log(dish);
});
const initialValue = 0;
const reduceRes = oddEven.reduce((acc, currValue) => {
  return acc + currValue
}, initialValue);
console.log("map res ", mapres);
console.log("filter res ", filterres);
console.log("reduce res ", reduceRes);

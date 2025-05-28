const dishes = ["plate", "bowl", "cup", "fork", "knife"];
const votes = ["pizza", "burger", "pizza", "salad", "burger", "pizza"];
const oddEven = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const words = ["JavaScript", "is", "fun"];
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
const reduceRes = oddEven.reduce((acc,curr)=>{
  return acc+curr;
},initialValue)

const countArr = votes.reduce((acc,curr)=>{
  acc[curr] = (acc[curr] || 0 ) + 1
  return acc 
},{})
// const wordRes = words.join(" ")
const wordsRes = words.reduce((acc,curr)=>{
  return acc +" "+ curr
})



console.log("map res ", mapres);
console.log("filter res ", filterres);
console.log("reduce res ", reduceRes);
console.log("count res ", countArr);
console.log("word res ", wordsRes);

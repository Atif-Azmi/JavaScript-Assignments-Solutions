/*
JS WEEKEND ASSIGNMENT
Objects + Arrays
*/
// Q1: Sum values in object arrays

const input1 = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60]
};
const output1 = {};
for (let key in input1) {
  output1[key] = input1[key].reduce((sum, val) => sum + val, 0);
}
console.log("Q1 Output:", output1);
// Q2: Count word occurrences

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = {};
for (let word of words) {
  wordCount[word] = (wordCount[word] || 0) + 1;
}
console.log("Q2 Output:", wordCount);

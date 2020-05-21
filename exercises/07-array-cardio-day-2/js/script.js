const lineBreak = '==============================================';

console.log(lineBreak);

console.info('Array of Objects of People');
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
console.log(people);

// Some and Every Checks
// Array.prototype.some()
console.info('is at least one person 19 or older? (some())');
// Array.prototype.every()
console.info('is everyone 19 or older? (every())');

console.log(lineBreak);

console.info('Array of Objects of Comments');
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];
console.log(comments);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
console.info('find the comment with the ID of 823423 (find())');

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.info('delete the comment with the ID of 823423 (findIndex())');

console.log(lineBreak);

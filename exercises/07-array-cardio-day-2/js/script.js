const lineBreak = '==============================================';

console.log(lineBreak);

console.info('Array of Objects of People');
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
console.table(people);

// Some and Every Checks
// Array.prototype.some()
console.info('is at least one person 19 or older? (some())');
const oneIsAdult = people.some(({ year }) => {
  const currentYear = new Date().getFullYear();
  return currentYear - year >= 19;
});
console.log({ oneIsAdult });
// Array.prototype.every()
console.info('is everyone 19 or older? (every())');
const allAreAdult = people.every(({ year }) => {
  const currentYear = new Date().getFullYear();
  return currentYear - year >= 19;
});
console.log({ allAreAdult });

console.log(lineBreak);

console.info('Array of Objects of Comments');
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];
console.table(comments);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
console.info('find the comment with the ID of 823423 (find())');
const comment = comments.find(({ id }) => id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.info('delete the comment with the ID of 823423 (findIndex())');
const index = comments.findIndex(({ id }) => id === 823423);
console.log({ index });

// ! This deletes the comment and modifies the original array
// comments.splice(index, 1);

// * This method creates a new array of comments
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(newComments);

console.log(lineBreak);

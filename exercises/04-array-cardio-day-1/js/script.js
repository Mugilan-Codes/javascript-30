const lineBreak = '==============================================';

console.info('Array of Objects of Inventors');
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];
console.log(inventors);

// Array.prototype.filter()
console.info(
  "1. Filter the list of inventors for those who were born in the 1500's"
);
const fifteenHundreds = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteenHundreds);

// Array.prototype.map()
console.info('2. Give us an array of the inventors first and last names');
const fullNames = inventors.map(({ first, last }) => `${first} ${last}`);
console.log(fullNames);

// Array.prototype.sort()
console.info('3. Sort the inventors by birthdate, oldest to youngest');
const oldToYoung = inventors.sort((a, b) => a.year - b.year);
console.table(oldToYoung);

// Array.prototype.reduce()
console.info('4. How many years did all the inventors live all together?');
const combinedAgeOfInventors = inventors.reduce((total, { year, passed }) => {
  return total + (passed - year);
}, 0);
console.log(combinedAgeOfInventors);

console.info('5. Sort the inventors by years lived');
const oldestToLive = inventors.sort((a, b) => {
  const lastPersonAge = a.passed - a.year;
  const nextPersonAge = b.passed - b.year;
  return nextPersonAge - lastPersonAge;
});
console.table(oldestToLive);
console.log(lineBreak);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const categories = document.querySelector('.mw-category');
// const links = Array.from(categories.querySelectorAll('a'));
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes('de'));

console.info('Array of People');
const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];
console.log(people);

// 7. sort Exercise
console.info('Sort the people alphabetically by last name');
const sortPeopleByLastName = people.sort((a, b) => {
  const aLast = a.split(', ')[0];
  const bLast = b.split(', ')[0];
  return aLast > bLast ? 1 : -1;
});
console.table(sortPeopleByLastName);
console.log(lineBreak);

console.info('Array of Transportation Names');
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];
console.log(data);

// 8. Reduce Exercise
console.info('Sum up the instances of each of these');
const dataInstanceCount = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {});
console.log(dataInstanceCount);
console.log(lineBreak);

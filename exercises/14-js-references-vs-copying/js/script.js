// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'mugil';
let name2 = name;
console.log(name, name2);
name = 'Mugilan';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

console.log(players);
// and we want to make a copy of it.

// You might think we can just do something like this:
const team = players;

// however what happens when we update that array?
team[0] = 'Lux';

// now here is the problem!
console.log(team, players);

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed
team2[0] = 'Mugilan';
console.log(team2, players);
team3[1] = 'Ronaldo';
console.log(team3, players);
team4[2] = 'Messi';
console.log(team4, players);
team5[3] = 'Rooney';
console.log(team5, players);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Mugilan',
  age: 21,
};

console.log(person);

// and think we make a copy:
const person1 = person;
person1.number = 56;
console.log(person1, person);

// how do we take a copy instead?
const person2 = Object.assign({}, person, { name: 'Samantha', age: 31 });
console.log(person2, person);

// We will hopefully soon see the object ...spread
const person3 = { ...person };
console.log(person3, person);

const noNumber = ({ number, ...rest }) => rest;
const person4 = noNumber(person);
console.log(person4);
console.log(person);

const { number, ...person5 } = person;
console.log(person5);
console.log(person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

//* JSON.parse(JSON.stringify())

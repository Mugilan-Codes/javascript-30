// clearing
console.clear();

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello i am a %s string!', '💩');

// Styled
console.log(
  '%cI am a styled text',
  'font-size: 20px; border: 2px solid red; padding : 10px'
);

// warning!
console.warn('OH NOOOOOOO!!');

// Error :|
console.error('SHIT!!!');

// Info
console.info('This is an info');

// Testing
console.assert(1 === 1, 'That is wrong');
console.assert(1 === 2, 'That is wrong');

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
  { name: 'Shadow', age: 1 },
];
console.table(dogs);

// Grouping together
dogs.forEach(({ name, age }) => {
  // console.group(`${name}`);
  console.groupCollapsed(`${name}`);
  console.log(`This is ${name}`);
  console.log(`${name} is ${age} years old`);
  console.log(`${name} is ${age * 7} years old in dog years`);
  console.groupEnd(`${name}`);
});

// counting
console.count('Mugilan');
console.count('Samantha');
console.count('Samantha');
console.count('Mugilan');
console.count('Mugilan');
console.count('Mugilan');
console.count('Samantha');
console.count('Mugilan');
console.count('Samantha');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/Mugilan-Codes')
  .then((blob) => blob.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

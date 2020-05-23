const keyPressed = [];
const secretCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'a',
  'b',
];

const equalArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

window.addEventListener('keyup', (e) => {
  keyPressed.push(e.key);

  keyPressed.splice(
    -secretCode.length - 1,
    keyPressed.length - secretCode.length
  );

  equalArray(keyPressed, secretCode) && cornify_add();
});

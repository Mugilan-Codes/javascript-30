const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const populateList = function (plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, idx) => {
      return `
        <li>
            <input type="checkbox" data-index=${idx} id="item${idx}" ${
        plate.done ? 'checked' : ''
      } />
            <label for="item${idx}">${plate.text}</label>
        </li>
    `;
    })
    .join('');
};

// 'this' can be used in this type of function
const addItem = function (e) {
  e.preventDefault(); // prevents reloading of page

  const text = this.querySelector('[name=item]').value;

  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));

  this.reset(); // resets form after submission
};

const toggleDone = function (e) {
  if (!e.target.matches('input')) return;

  const idx = e.target.dataset.index;
  items[idx].done = !items[idx].done;

  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
};

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

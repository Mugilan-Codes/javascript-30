//todo: Change to One of the Two API's
//* 1. https://rapidapi.com/natkapral/api/countries-cities
//* 2. https://rapidapi.com/wirefreethought/api/geodb-cities

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi'); // g (global), i (case insenstive)
    return place.city.match(regex) || place.state.match(regex);
  });
};

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map(({ city, state, population }) => {
      return `
        <li>
          <span class="name">${city}, ${state}</span>
          <span className="population">${population}</span>
        </li>
      `;
    })
    .join('');

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

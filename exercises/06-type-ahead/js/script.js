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
  if (wordToMatch === '' || wordToMatch.length === 0) return;
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi'); // g (global), i (case insenstive)
    return place.city.match(regex) || place.state.match(regex);
  });
};

function numberWithCommas(x) {
  return x.toString().split('.')[0].length > 3
    ? x
        .toString()
        .substring(0, x.toString().split('.')[0].length - 3)
        .replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
        ',' +
        x.toString().substring(x.toString().split('.')[0].length - 3)
    : x.toString();
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  console.log(matchArray);
  const html =
    matchArray === undefined || matchArray.length === 0
      ? `<li>City or State not found</li>
          <li>Filter for a city</li>
          <li>or a state</li>`
      : matchArray
          .map(({ city, state, population }) => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = city.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );
            const stateName = state.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );

            return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(population)}</span>
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

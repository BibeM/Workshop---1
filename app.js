console.log("It works!");

const starWarsCaracterEl = document.querySelector(".starWarsCaracter");
const starWarsSpaceshipEl = document.querySelector(".starWarsSpaceship");
const peopleTableEl = document.querySelector(".caracter-container");
const spaceshipTableEl = document.querySelector(".spaceship-container");

const STARWARSAPI_PEOPLE = "https://swapi.dev/api/people/?page=1";
function fetchStarWarsPeople() {
  fetch(STARWARSAPI_PEOPLE)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderCaracterTable(spaceshipTableEl, data);
    });
}
fetchStarWarsPeople();
console.log(fetchStarWarsPeople);

const STARWARSAPI_SRACESHIP = "https://swapi.dev/api/starships/?page=1";
function fetchStarWarsSpaceship() {
  fetch(STARWARSAPI_SRACESHIP)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
fetchStarWarsSpaceship();
console.log(fetchStarWarsSpaceship);

function renderCaracterTable(peopleContainerTable, people) {
  peopleContainerTable = "";
  for (let person of people.results) {
    peopleContainerTable.innerHTML += `
    <table>
          <thead>
            <th>Name</th>
            <th>Height ( cm )</th>
            <th>Mass ( kg )</th>
            <th>Gender</th>
            <th>Birth Year</th>
          </thead>
          <tbody>
            <tr>
                <td>${person.name}</td>
                <td>${person.height}</td>
                <td>${person.mass}</td>
                <td>${person.gender}</td>
                <td>${person.birth_year}</td>
            </tr>
          </tbody>
        </table>
    `;
  }
}

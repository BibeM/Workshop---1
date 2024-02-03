console.log("It works!");

const starWarsCaracterEl = document.querySelector(".starWarsCaracter");
const starWarsSpaceshipEl = document.querySelector(".starWarsSpaceship");
const peopleTableEl = document.querySelector(".caracter-container");
const spaceshipTableEl = document.querySelector(".spaceship-container");
const prevPeopleBtn = document.querySelector("#previousPeople-btn");
console.log(
  starWarsCaracterEl,
  starWarsSpaceshipEl,
  peopleTableEl,
  spaceshipTableEl
);

const STARWARSAPI_PEOPLE = "https://swapi.dev/api/people/?page=1";
function fetchStarWarsPeople() {
  fetch(STARWARSAPI_PEOPLE)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      starWarsCaracterEl.addEventListener("click", function () {
        renderCaracterTable(peopleTableEl, data);
      });
    });
}
fetchStarWarsPeople();

const STARWARSAPI_SRACESHIP = "https://swapi.dev/api/starships/?page=1";
function fetchStarWarsSpaceship() {
  fetch(STARWARSAPI_SRACESHIP)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      starWarsSpaceshipEl.addEventListener("click", function () {
        renderSpaceshipTable(spaceshipTableEl, data);
      });
    });
}
fetchStarWarsSpaceship();

function renderCaracterTable(peopleContainerTable, people) {
  peopleContainerTable.innerHTML = "";
  peopleContainerTable.innerHTML += `
    <table>
        <thead>
          <th>NAME</th>
          <th>HEIGHT ( cm )</th>
          <th>MASS ( kg )</th>
          <th>GENDER</th>
          <th>BIRTH YEAR</th>
        </thead>
        </table>`;
  for (let person of people.results) {
    peopleContainerTable.innerHTML += `
    <table>
     <tbody>
          <tr>
            <td>${person.name}</td>
            <td>${person.height}</td>
            <td>${person.mass}</td>
            <td>${person.gender}</td>
            <td>${person.birth_year}</td>
          </tr>
        </tbody>
        </table>`;
  }
  peopleContainerTable.innerHTML += `
        <footer>
      <button type="button" id="previousPeople-btn">PREVIOUS</button>
      <button type="button" id="nextPeople-btn">NEXT</button>
    </footer>`;
}
function renderSpaceshipTable(spaceshipContainerTable, starships) {
  spaceshipContainerTable.innerHTML = "";
  spaceshipContainerTable.innerHTML += `
    <table>
        <thead>
          <th>NAME</th>
          <th>MODEL</th>
          <th>MANUFACTURER</th>
          <th>COST(Credits)</th>
          <th>PEOPLE CAPACITY</th>
          <th>CLASS</th>
        </thead>
        </table>`;
  for (let starship of starships.results) {
    spaceshipContainerTable.innerHTML += `
    <table>
     <tbody>
          <tr>
            <td>${starship.name}</td>
            <td>${starship.model}</td>
            <td>${starship.manufacturer}</td>
            <td>${starship.cost_in_credits}</td>
            <td>${starship.passengers}</td>
            <td>${starship.starship_class}</td>
          </tr>
        </tbody>
        </table>`;
  }
  spaceshipContainerTable.innerHTML += `
        <footer>
      <button type="button" id="previousSpaceship-btn">PREVIOUS</button>
      <button type="button" id="nextSpaceship-btn">NEXT</button>
    </footer>`;
}

prevPeopleBtn.addEventListener("click", function () {
  console.log("Previous clicked");
});

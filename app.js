console.log("It works!");

const starWarsCaracterEl = document.querySelector(".starWarsCaracter");
const starWarsSpaceshipEl = document.querySelector(".starWarsSpaceship");
const peopleTableEl = document.querySelector(".caracter-container");
const spaceshipTableEl = document.querySelector(".spaceship-container");
console.log(
  starWarsCaracterEl,
  starWarsSpaceshipEl,
  peopleTableEl,
  spaceshipTableEl
);

const STARWARSAPI_PEOPLE = "https://swapi.dev/api/people/?page=1";
function fetchStarWarsPeople(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderCaracterTable(peopleTableEl, data);
    });
}

starWarsCaracterEl.addEventListener("click", function () {
  fetchStarWarsPeople(STARWARSAPI_PEOPLE);
});

//Add listener to image
//Call fetch inside listener
//Render table inside fetch

const STARWARSAPI_SRACESHIP = "https://swapi.dev/api/starships/?page=1";
function fetchStarWarsSpaceship(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderSpaceshipTable(spaceshipTableEl, data);
    });
}
starWarsSpaceshipEl.addEventListener("click", function () {
  fetchStarWarsSpaceship(STARWARSAPI_SRACESHIP);
});

function renderCaracterTable(peopleContainerTable, people) {
  peopleContainerTable.innerHTML = "";

  let tableBodyHTML = "";

  for (let person of people.results) {
    tableBodyHTML += `
   
          <tr>
            <td>${person.name}</td>
            <td>${person.height}</td>
            <td>${person.mass}</td>
            <td>${person.gender}</td>
            <td>${person.birth_year}</td>
          </tr>
        
        `;
  }

  peopleContainerTable.innerHTML = `
  <table>
      <thead>
      <tr>
        <th>NAME</th>
        <th>HEIGHT ( cm )</th>
        <th>MASS ( kg )</th>
        <th>GENDER</th>
        <th>BIRTH YEAR</th>
      </tr>
      </thead> 
       <tbody>${tableBodyHTML}</tbody>
      </table>`;

  peopleContainerTable.innerHTML += `
        <footer>
      <button type="button" id="previousPeople-btn">PREVIOUS</button>
      <button type="button" id="nextPeople-btn">NEXT</button>
    </footer>`;

  // Insert listeners here
  peopleContainerTable
    .querySelector("#previousPeople-btn")
    .addEventListener("click", function () {
      fetchStarWarsPeople(people.previous);
    });

  peopleContainerTable
    .querySelector("#nextPeople-btn")
    .addEventListener("click", function () {
      fetchStarWarsPeople(people.next);
    });
}
function renderSpaceshipTable(spaceshipContainerTable, starships) {
  spaceshipContainerTable.innerHTML = "";
  let tableBodyHTML = "";

  for (let starship of starships.results) {
    tableBodyHTML += `
    
          <tr>
            <td>${starship.name}</td>
            <td>${starship.model}</td>
            <td>${starship.manufacturer}</td>
            <td>${starship.cost_in_credits}</td>
            <td>${starship.passengers}</td>
            <td>${starship.starship_class}</td>
          </tr>
       `;
  }
  spaceshipContainerTable.innerHTML += `
    <table>
        <thead>
        <tr>
          <th>NAME</th>
          <th>MODEL</th>
          <th>MANUFACTURER</th>
          <th>COST(Credits)</th>
          <th>PEOPLE CAPACITY</th>
          <th>CLASS</th>
          </tr>
        </thead>
        <tbody>${tableBodyHTML}</tbody>
        </table>`;

  spaceshipContainerTable.innerHTML += `
        <footer>
      <button type="button" id="previousSpaceship-btn">PREVIOUS</button>
      <button type="button" id="nextSpaceship-btn">NEXT</button>
    </footer>`;
  spaceshipContainerTable
    .querySelector("#previousSpaceship-btn")
    .addEventListener("click", function () {
      fetchStarWarsSpaceship(starships.previous);
    });
  spaceshipContainerTable
    .querySelector("#nextSpaceship-btn")
    .addEventListener("click", function () {
      fetchStarWarsSpaceship(starships.next);
    });
}

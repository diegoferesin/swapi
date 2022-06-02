let select = document.getElementById('starWarsInfo');
select.addEventListener('change', chooseAnOption);
const baseURL = 'https://swapi.dev/api/'
const filmsURL = baseURL + 'films/'
const planetsURL = baseURL + 'planets/'
const peoplesURL = baseURL + 'people/'
const speciesURL = baseURL + 'species/'
const vehiclesURL = baseURL + 'vehicles/'
const starshipsURL = baseURL + 'starships/'


function chooseAnOption() {
    resetElements();
    let optionValue = document.getElementById('starWarsInfo').value;
    switch (optionValue) {
        case 'peopleOption':
            console.log('peopleOption');
            getPeoples(peoplesURL);
            break;
        case 'planetsOption':
            console.log('planetsOption');
            getPlanets(planetsURL);
            break;
        case 'filmsOption':
            console.log('filmsOption');
            getFilms(filmsURL);
            break;
        case 'speciesOption':
            console.log('speciesOption');
            getSpecies(speciesURL);
            break;
        case 'vehiclesOption':
            console.log('vehiclesOption');
            getVehicles(vehiclesURL);
            break;
        case 'starshipsOption':
            console.log('starshipsOption');
            getStarships(starshipsURL);
            break;
        default:
            break;
    }
}

async function getFilms(url) {
    console.log("getFilms");
    createMovieContainer();
    let response = await fetch(url);
    if (response.ok) {
        response = await response.json()
        results = response.results;
        let counter = 1;
        results.forEach(movie => {
            let container = document.getElementById('movieContainer');
            let divWrapper = document.createElement('div');
            divWrapper.setAttribute('class', 'div' + counter + ' movieWrapper');
            let movieTitle = document.createElement('h2');
            movieTitle.innerHTML = movie.title.toUpperCase();
            divWrapper.appendChild(movieTitle);

            let episodeNumber = document.createElement('h3');
            episodeNumber.innerHTML = 'Episode: ' + movie.episode_id;
            divWrapper.appendChild(episodeNumber);

            let director = document.createElement('p');
            director.innerHTML = 'Director: ' + movie.director;
            divWrapper.appendChild(director);

            let releaseDate = document.createElement('p');
            releaseDate.innerHTML = 'Release date: ' + movie.release_date;
            divWrapper.appendChild(releaseDate);

            let moreInfo = document.createElement('a');
            moreInfo.innerHTML = 'MORE INFO'
            moreInfo.setAttribute('href', movie.url);
            moreInfo.setAttribute('target', '_blank');
            divWrapper.appendChild(moreInfo);

            container.appendChild(divWrapper);
            counter += 1;
        });
        validateMoreInfo(response.next, container);
    }
}

async function getPlanets(url) {
    console.log("getPlanets");
    createContainer();
    let response = await fetch(url);
    if (response.ok) {
        response = await response.json()
        let results = response.results;
        results.forEach(planet => {
            let container = document.getElementById('container');
            let name = planet.name.toUpperCase();
            let diameter = planet.diameter;
            let climate = planet.climate;
            let gravity = planet.gravity;
            let terrain = planet.terrain;
            let surfaceWater = planet.surface_water;
            let population = planet.population;
            let moreInfo = planet.url;
            let divWrapper = document.createElement('div');
            let nameElem = document.createElement('h2');
            nameElem.innerHTML = name;
            divWrapper.appendChild(nameElem);

            let diameterElem = document.createElement('p');
            diameter.innerHTML = 'Diameter: ' + diameter;
            divWrapper.appendChild(diameterElem);

            let climateElem = document.createElement('p');
            climateElem.innerHTML = 'Climate: ' + climate;
            divWrapper.appendChild(climateElem);

            let gravityElem = document.createElement('p');
            gravityElem.innerHTML = 'Gravity: ' + gravity;
            divWrapper.appendChild(gravityElem);

            let terrainElem = document.createElement('p');
            terrainElem.innerHTML = 'Terrain: ' + terrain;
            divWrapper.appendChild(terrainElem);

            let surfaceWaterElem = document.createElement('p');
            surfaceWaterElem.innerHTML = 'Surface Water: ' + surfaceWater;
            divWrapper.appendChild(surfaceWaterElem);

            let populationElem = document.createElement('p');
            populationElem.innerHTML = 'Population: ' + population;
            divWrapper.appendChild(populationElem);

            let moreInfoElem = document.createElement('a');
            moreInfoElem.innerHTML = 'MORE INFO'
            moreInfoElem.setAttribute('href', moreInfo);
            moreInfoElem.setAttribute('target', '_blank');
            divWrapper.appendChild(moreInfoElem);

            container.appendChild(divWrapper);
        });
        validateMoreInfo(response.next, container);
    }
}

async function getPeoples(url) {
    console.log("getPeoples");
    createContainer();
    let response = await fetch(url);
    if (response.ok) {
        response = await response.json();
        let results = response.results;
        results.forEach(people => {
            let container = document.getElementById('container');
            let name = people.name.toUpperCase();
            let gender = people.gender;
            let height = people.height;
            let skinColor = people.skin_color;
            let eyeColor = people.eye_color;
            let birthYear = people.birth_year;
            let moreInfo = people.url;

            let divWrapper = document.createElement('div');
            let nameElem = document.createElement('h2');
            nameElem.innerHTML = name;
            divWrapper.appendChild(nameElem);

            let genderElem = document.createElement('p');
            genderElem.innerHTML = 'Gender: ' + gender;
            divWrapper.appendChild(genderElem);

            let heightElem = document.createElement('p');
            heightElem.innerHTML = 'Height: ' + height;
            divWrapper.appendChild(heightElem);

            let skinColorElem = document.createElement('p');
            skinColorElem.innerHTML = 'Skin Color: ' + skinColor;
            divWrapper.appendChild(skinColorElem);

            let eyeColorElem = document.createElement('p');
            eyeColorElem.innerHTML = 'Eye Color: ' + eyeColor;
            divWrapper.appendChild(eyeColorElem);

            let birthYearElem = document.createElement('p');
            birthYearElem.innerHTML = 'Birth Year: ' + birthYear;
            divWrapper.appendChild(birthYearElem);

            let moreInfoElem = document.createElement('a');
            moreInfoElem.innerHTML = 'MORE INFO'
            moreInfoElem.setAttribute('href', moreInfo);
            moreInfoElem.setAttribute('target', '_blank');
            divWrapper.appendChild(moreInfoElem);

            container.appendChild(divWrapper);
        });
        validateMoreInfo(response.next, container);
    }
}

async function getSpecies(url) {
    console.log("getSpecies");
    createContainer();
    let response = await fetch(url);
    if (response.ok) {
        response = await response.json();
        let results = response.results;
        results.forEach(specie => {
            let container = document.getElementById('container');
            let name = specie.name.toUpperCase();
            let classification = specie.classification;
            let designation = specie.designation;
            let skinColor = specie.skin_colors;
            let eyeColor = specie.eye_colors;
            let language = specie.language;
            let moreInfo = specie.url;

            let divWrapper = document.createElement('div');
            let nameElem = document.createElement('h2');
            nameElem.innerHTML = name;
            divWrapper.appendChild(nameElem);

            let classificationElem = document.createElement('p');
            classificationElem.innerHTML = 'Classification: ' + classification;
            divWrapper.appendChild(classificationElem);

            let designationElem = document.createElement('p');
            designationElem.innerHTML = 'Designation: ' + designation;
            divWrapper.appendChild(designationElem);

            let skinColorElem = document.createElement('p');
            skinColorElem.innerHTML = 'Skin Color: ' + skinColor;
            divWrapper.appendChild(skinColorElem);

            let eyeColorElem = document.createElement('p');
            eyeColorElem.innerHTML = 'Eye Color: ' + eyeColor;
            divWrapper.appendChild(eyeColorElem);

            let languageElem = document.createElement('p');
            languageElem.innerHTML = 'Language: ' + language;
            divWrapper.appendChild(languageElem);

            let moreInfoElem = document.createElement('a');
            moreInfoElem.innerHTML = 'MORE INFO'
            moreInfoElem.setAttribute('href', moreInfo);
            moreInfoElem.setAttribute('target', '_blank');
            divWrapper.appendChild(moreInfoElem);

            container.appendChild(divWrapper);
        });
        validateMoreInfo(response.next, container);
    }
}

async function getVehicles(url) {
    console.log("getVehicles");
    createContainer();
    let response = await fetch(url);
    if (response.ok) {
        response = await response.json();
        let results = response.results;
        results.forEach(vehicle => {
            let container = document.getElementById('container');
            let name = vehicle.name.toUpperCase();
            let model = vehicle.model;
            let manufacturer = vehicle.manufacturer;
            let costInCredits = vehicle.cost_in_credits;
            let vehicleClass = vehicle.vehicle_class;
            let cargoCapacity = vehicle.cargo_capacity;
            let moreInfo = vehicle.url;

            let divWrapper = document.createElement('div');
            let nameElem = document.createElement('h2');
            nameElem.innerHTML = name;
            divWrapper.appendChild(nameElem);

            let modelElem = document.createElement('p');
            modelElem.innerHTML = 'Model: ' + model;
            divWrapper.appendChild(modelElem);

            let manufacturerElem = document.createElement('p');
            manufacturerElem.innerHTML = 'Manufacturer: ' + manufacturer;
            divWrapper.appendChild(manufacturerElem);

            let costInCreditsElem = document.createElement('p');
            costInCreditsElem.innerHTML = 'Cost In Credits: ' + costInCredits;
            divWrapper.appendChild(costInCreditsElem);

            let vehicleClassElem = document.createElement('p');
            vehicleClassElem.innerHTML = 'Vehicle Class: ' + vehicleClass;
            divWrapper.appendChild(vehicleClassElem);

            let cargoCapacityElem = document.createElement('p');
            cargoCapacityElem.innerHTML = 'Cargo Capacity: ' + cargoCapacity;
            divWrapper.appendChild(cargoCapacityElem);

            let moreInfoElem = document.createElement('a');
            moreInfoElem.innerHTML = 'MORE INFO'
            moreInfoElem.setAttribute('href', moreInfo);
            moreInfoElem.setAttribute('target', '_blank');
            divWrapper.appendChild(moreInfoElem);

            container.appendChild(divWrapper);
        });
        validateMoreInfo(response.next, container);
    }
}

async function getStarships(url) {
    console.log("getStarships");
    createContainer();
    let response = await fetch(url);
    if (response.ok) {
        response = await response.json();
        let results = response.results;
        results.forEach(starships => {
            let container = document.getElementById('container');
            let name = starships.name.toUpperCase();
            let model = starships.model;
            let manufacturer = starships.manufacturer;
            let costInCredits = starships.cost_in_credits;
            let maxAtmospheringSpeed = starships.max_atmosphering_speed;
            let cargoCapacity = starships.cargo_capacity;
            let moreInfo = starships.url;

            let divWrapper = document.createElement('div');
            let nameElem = document.createElement('h2');
            nameElem.innerHTML = name;
            divWrapper.appendChild(nameElem);

            let modelElem = document.createElement('p');
            modelElem.innerHTML = 'Model: ' + model;
            divWrapper.appendChild(modelElem);

            let manufacturerElem = document.createElement('p');
            manufacturerElem.innerHTML = 'Manufacturer: ' + manufacturer;
            divWrapper.appendChild(manufacturerElem);

            let costInCreditsElem = document.createElement('p');
            costInCreditsElem.innerHTML = 'Cost In Credits: ' + costInCredits;
            divWrapper.appendChild(costInCreditsElem);

            let maxAtmospheringSpeedElem = document.createElement('p');
            maxAtmospheringSpeedElem.innerHTML = 'Max Atmosphering Speed: ' + maxAtmospheringSpeed;
            divWrapper.appendChild(maxAtmospheringSpeedElem);

            let cargoCapacityElem = document.createElement('p');
            cargoCapacityElem.innerHTML = 'Cargo Capacity: ' + cargoCapacity;
            divWrapper.appendChild(cargoCapacityElem);

            let moreInfoElem = document.createElement('a');
            moreInfoElem.innerHTML = 'MORE INFO'
            moreInfoElem.setAttribute('href', moreInfo);
            moreInfoElem.setAttribute('target', '_blank');
            divWrapper.appendChild(moreInfoElem);

            container.appendChild(divWrapper);
        });
        validateMoreInfo(response.next, container, 'getStarships');
    }
}

function resetElements() {
    let container = document.getElementById('remove');
    if (container != null) {
        container.remove();
    }
}

function validateMoreInfo(next, element, functionToCall) {
    if (next != null) {
        let nextInfoElem = document.createElement('a');
        nextInfoElem.setAttribute('id', 'nextCall');
        nextInfoElem.setAttribute('name', next);
        nextInfoElem.innerHTML = 'NEXT PAGE'
        element.appendChild(nextInfoElem);
        let nextCallElem = document.getElementById('nextCall');
        nextCallElem.addEventListener('click', callNextEndpoint);
    }

}

function callNextEndpoint() {
    console.log("Entró al listener");
    let nextCallElem = document.getElementById('nextCall');
    let nextEndpoint = nextCallElem.getAttribute('name');

    if (nextEndpoint.includes('films')) {
        resetElements();
        getFilms(nextEndpoint);
    }

    if (nextEndpoint.includes('people')) {
        resetElements();
        getPeoples(nextEndpoint);
    }

    if (nextEndpoint.includes('planets')) {
        resetElements();
        getPlanets(nextEndpoint);
    }

    if (nextEndpoint.includes('species')) {
        resetElements();
        getSpecies(nextEndpoint);
    }

    if (nextEndpoint.includes('starships')) {
        resetElements();
        getSpecies(nextEndpoint);
    }

    if (nextEndpoint.includes('starships')) {
        resetElements();
        getStarships(nextEndpoint);
    }

    if (nextEndpoint.includes('vehicles')) {
        resetElements();
        getVehicles(nextEndpoint);
    }
}

function createMovieContainer() {
    let flexContainer = document.createElement('div');
    flexContainer.setAttribute('id', 'remove');
    flexContainer.setAttribute('class', 'FlexContainer');
    let movieContainer = document.createElement('div');
    movieContainer.setAttribute('id', 'movieContainer');
    flexContainer.appendChild(movieContainer);
    document.body.appendChild(flexContainer);
}

function createContainer() {
    let flexContainer = document.createElement('div');
    flexContainer.setAttribute('id', 'remove');
    flexContainer.setAttribute('class', 'FlexContainer');
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    flexContainer.appendChild(container);
    document.body.appendChild(flexContainer);
}

function hrefFunction() {
    console.log("Funcionó");
    alert("Funcionó");
}
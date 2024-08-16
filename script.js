window.addEventListener("load", function() {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        let randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    });

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let pilotNameInput = form.querySelector("input[name=pilotName]");
        let copilotNameInput = form.querySelector("input[name=copilotName]");
        let fuelLevelInput = form.querySelector("input[name=fuelLevel]");
        let cargoMassInput = form.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");

        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields required!")
            return;
        }

        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
    });
 });
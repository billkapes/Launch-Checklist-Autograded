// Write your JavaScript code here!

window.addEventListener("load", function() {
    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
 
    // });

    let form = document.querySelector("form");
    //let button = document.getElementById("formSubmit");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let pilotNameInput = form.querySelector("input[name=pilotName]");
        let copilotNameInput = form.querySelector("input[name=copilotName]");
        let fuelLevelInput = form.querySelector("input[name=fuelLevel]");
        let cargoMassInput = form.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields required.")
            event.preventDefault();
        }

        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
    });
    
 });
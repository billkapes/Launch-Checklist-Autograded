require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = 
    `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star} </li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src=${imageUrl}>
    `
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let faultFlag = false;

    if (validateInput(pilot) === "Not a Number") {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    } else {
        alert("Make sure to enter valid information for each field! (pilot)");
        return;
    }

    if (validateInput(copilot) === "Not a Number") {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    } else {
        alert("Make sure to enter valid information for each field! (copilot)");
        return;
    }

    if (validateInput(fuelLevel) === "Is a Number") {
        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            faultFlag = true;
        } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        }
    } else {
        alert("Make sure to enter valid information for each field! (fuel)");
        return;
    }

    if(validateInput(cargoLevel) === "Is a Number") {
        if (cargoLevel > 10000) {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            faultFlag = true;
        } else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }
    } else {
        alert("Make sure to enter valid information for each field! (cargo)");
        return;
    }
    
    if (faultFlag) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
    } else {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
    }
 }
 
 async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
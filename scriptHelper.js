// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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
        //set bad pilot
    }

    if (validateInput(copilot) === "Not a Number") {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    } else {
        //set bad copilot
    }

    if (validateInput(fuelLevel) === "Is a Number") {
        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            faultFlag = true;
        } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        }
    } else {
        //set bad fuel
    }

    if(validateInput(cargoLevel) === "Is a Number") {
        if (cargoLevel > 10000) {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            faultFlag = true;
        } else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }
    }
    
    if (faultFlag) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style = "color:red";
    } else {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style = "color:green";

    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 //module.exports.addDestinationInfo = addDestinationInfo;
 //module.exports.validateInput = validateInput;
 //module.exports.formSubmission = formSubmission;
 //module.exports.pickPlanet = pickPlanet; 
 //module.exports.myFetch = myFetch;
// Arrays 
let cities = ['Faisalabad', 'Lahore', 'Sheikhupura', 'Islamabad', 'Karachi', 'Multan', 'Kashmir'];

    for(let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("originalTextBox").innerHTML += num + ') ' + cities[i] + '&emsp;';
        
    }

function showOutput (output) {
    document.getElementById('output').innerHTML = output;
}

function clearOutput () {
    document.getElementById("output").innerHTML = "";
}

const clearInput = () => {
    document.getElementById("inputText").value = "";
}

const inputValue = () => {
    return document.getElementById("inputText").value;
}
// Simple Alert
function simpleAlert() {
    alert("alert by umar gujjar!")
}

// Print My Name
function printMyName() {

    let myName = document.getElementById("inputText").value;

    
    if (myName === "") {

        alert("Please enter your name")
        return;

    }

    document.getElementById("output").innerHTML = myName;

}

// Print All Cities
function printAllCities() {
    document.getElementById("output").innerHTML = "";

    for(let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ') ' + cities[i] + '<br />';

    }
}
// Add city in a list
function addCity () {
    let city = document.getElementById("inputText").value;

    if (city === "") {
        alert("Please enter your city name");
        return;
    }
    cities.push(city);
    document.getElementById("output").innerHTML = '<span style="color:green; font-size: 20px;">"' + city + '"</span> has been successfully added into list.';
}

// Generate Table
function generateTable() {
    let number = document.getElementById("inputText").value;

    if(number === "") {
        alert("Please enter a number.");
        return;
    }

    let limit = +prompt("Give a number");
    document.getElementById('output').innerHTML = "";

    for(let index = 1; index <= limit; index++) {
        document.getElementById('output').innerHTML += number + " * " + index + " = " + number * index + "<br>";
    }
}

// Clear Output / Result
document.getElementById("clearOutputButton").onclick = function () {
    let outputBoxHTML = document.getElementById("output").innerHTML;

    if(!outputBoxHTML.length) {
        alert("It's already empty!")

    }
    else {
        clearOutput();
        alert("Output / Result box has been cleared.")
    }
}

let temperature = document.getElementById("temperature");
let unit = document.getElementById("unit");
let convertBtn = document.getElementById("convertBtn");

let error = document.getElementById("error");

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

convertBtn.addEventListener("click", function() {

    let value = temperature.value.trim();
    let selectedUnit = unit.value;

    error.innerHTML = "";

    if (value == "") {

        error.innerHTML = "Please enter a temperature.";

        return;
    }

    if (isNaN(value)) {

        error.innerHTML = "Please enter a valid number.";

        return;
    }


    value = Number(value);

    let c;


    if (selectedUnit == "celsius") {

        c = value;

    }

    else if (selectedUnit == "fahrenheit") {

        c = (value - 32) * 5 / 9;

    }

    else {

        c = value - 273.15;

    }


    if (c < -273.15) {

        error.innerHTML =
            "Temperature cannot be below absolute zero.";

        return;
    }


    let f = (c * 9 / 5) + 32;

    let k = c + 273.15;


    celsius.innerHTML = c.toFixed(2);

    fahrenheit.innerHTML = f.toFixed(2);

    kelvin.innerHTML = k.toFixed(2);

});
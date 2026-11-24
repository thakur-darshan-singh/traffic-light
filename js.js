
let lights = ["red", "yellow", "green"];

let current = -1;

let button = document.getElementById("change");

let status = document.getElementById("status");

button.addEventListener("click", function () {

    // Turn off all lights
    lights.forEach(function (color) {

        document.getElementById(color)
            .classList.remove("active");

    });

    // Select next light
    current = (current + 1) % lights.length;

    let activeLight = lights[current];

    // Activate selected light
    document.getElementById(activeLight)
        .classList.add("active");

    // Update status
    if (activeLight === "red") {
        status.innerText = "STOP";
        status.style.color = "#ff2020";
    }

    else if (activeLight === "yellow") {
        status.innerText = "WAIT";
        status.style.color = "#ffcc00";
    }

    else {
        status.innerText = "GO";
        status.style.color = "#00ff66";
    }

});

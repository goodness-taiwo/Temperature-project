let input = document.getElementById('input');
let button = document.getElementById('button');
let output = document.getElementById('output');

button.addEventListener('click', () => {
    let temperature = input.value;
    if (temperature >= 0 && temperature <= 10) {
        output.innerHTML = "You are in the Arctic Zone";
        output.style.background = "linear-gradient(135deg, #f093fb 0%,rgb(27, 47, 161) 100%)";
    } else if (temperature >= 11 && temperature <= 20) {
        output.innerHTML = "You are in the Temperate Zone";
        output.style.background = "linear-gradient(135deg, #f093fb 0%,rgb(128, 179, 25) 100%)";
    } else if (temperature >= 21 && temperature <= 30) {
        output.innerHTML = "You are in the Tropical Zone";
        output.style.background = "linear-gradient(135deg, #f093fb 0%,rgb(25, 161, 10) 100%)";
    } else {
        output.innerHTML = "You are in the Antarctic Zone";
        output.style.background = "linear-gradient(135deg, #f093fb 0%,rgb(0, 0, 0) 100%)";
    }

});
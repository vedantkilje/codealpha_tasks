javascript
function addValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    try {
        if (display.value.trim() === "") return;

        let expression = display.value;

        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        display.value = Function(
            '"use strict"; return (' + expression + ')'
        )();
    } catch (error) {
        display.value = "Error";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display');

    function input(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        try {
            if (display.value && !/[\+\-\*\/]$/.test(display.value)) {
                display.value = eval(display.value);
            } else {
                display.value = 'Error';
            }
        } catch (e) {
            display.value = 'Error';
        }
    }

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', () => {
            let value = button.innerText;
            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                input(value);
            }
        });
    });
});

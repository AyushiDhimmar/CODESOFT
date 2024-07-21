let display = document.getElementById('display');

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function eraseLast() {
            let currentValue = display.value;
            display.value = currentValue.substring(0, currentValue.length - 1);
        }
        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
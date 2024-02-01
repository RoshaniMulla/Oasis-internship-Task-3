function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unitSelect = document.getElementById('unit');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    let convertedTemperature;
    let resultUnit;

    if (selectedUnit === 'celsius') {
        convertedTemperature = (temperatureInput - 32) * (5 / 9);
        resultUnit = 'Celsius';
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemperature = (temperatureInput * 9 / 5) + 32;
        resultUnit = 'Fahrenheit';
    } else if (selectedUnit === 'kelvin') {
        // Uncomment the block below for Kelvin conversion
        // convertedTemperature = parseFloat(temperatureInput) + 273.15;
        // resultUnit = 'Kelvin';
    }

    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}

function convert() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var result = 0;

    switch (fromUnit) {
        case 'spiseskjeer':
            result = inputValue * 0.0147868;
            break;
        case 'cups':
            result = inputValue * 0.236588;
            break;
        case 'ounces':
            result = inputValue * 0.0295735;
            break;
        case 'gallon': 
            result = inputValue * 3.78541;
            break;
    }

    document.getElementById('result').innerText = result + ' L';
}

function switchConversion() {
    console.log('Knapp trykket');
    var fromUnit = document.getElementById('fromUnit').value;

    if (fromUnit === ' L') {
        document.getElementById('fromUnit').value = ' L'; 
    } else {
        document.getElementById('fromUnit').value = ' L'; 
    }
}
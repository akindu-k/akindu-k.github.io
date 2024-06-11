const display = document.getElementById("display");
display.addEventListener('input', () => {
    const maxLength = 10; // Maximum number of characters before the font size starts to decrease
    const baseFontSize = 80; // Base font size in pixels
  
    if (display.value.length > maxLength) {
      const newFontSize = baseFontSize * maxLength / display.value.length;
      display.style.fontSize = `${newFontSize}px`;
    } else {
      display.style.fontSize = `${baseFontSize}px`;
    }
  });

    function appendToDisplay(value) {
      if (display.value === '0' && value === '0') {
        // Do nothing if display is 0 and the value is 0
        

        return;
      }
  
      if (display.value === '0' && value !== '.') {
        // If display is 0 and the value is not a decimal point, replace the display value
        display.value = value;
        document.getElementById('clear-btn').textContent = 'AC';
      } else {
        // Otherwise, append the value
        document.getElementById('clear-btn').textContent = 'C';
        display.value += value;
        //document.getElementById('clear-btn').textContent = 'C';
      }
    }

function clearDisplay(){
    display.value = "0";
    document.getElementById('clear-btn').textContent = 'AC';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

function percentage(){
    display.value = (display.value)/100;
}
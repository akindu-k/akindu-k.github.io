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

function deleteCharacter() {
  // Get the current display value
  var displayValue = document.getElementById('display').value;

  // If the display value is not '0', delete the last character
  if (displayValue !== '0') {
    document.getElementById('display').value = displayValue.slice(0, -1);
  }

  // If the display value is now empty, change it back to '0'
  if (document.getElementById('display').value === '') {
    document.getElementById('display').value = '0';
    // Also change the clear button text back to 'AC'
    document.getElementById('clear-btn').textContent = 'AC';
  } else {
    // If the display value is not '0', change the clear button text to 'C'
    document.getElementById('clear-btn').textContent = 'C';
  }
}


window.addEventListener('keydown', function(e) {
  // Get the key that was pressed
  const key = e.key;

  // Check if the key is a number or an operator
  if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
    // If it's a number or an operator, append it to the display
    appendToDisplay(key);
  } else if (key === 'Enter') {
    // If it's the Enter key, calculate the result
    calculate();
  } else if (key === 'Backspace' || key === 'Escape') {
    // If it's the Backspace key, clear the display
    clearDisplay();
  }
  else if (key === '%'){
    percentage();
  }
  else if (key === 'Delete'){
    deleteCharacter();
  }
});
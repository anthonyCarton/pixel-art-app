// Define Global Variables
let gridColor = '#000000';
let formInput = document.querySelector('#sizePicker');
let pixelCanvas = document.querySelector('#pixelCanvas > tbody');

// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners
  formInput.addEventListener('submit', function(event){
    // prevent the page from refreshing
    event.preventDefault();

    // Assign user input to variables
    let gridHeight = formInput.querySelector('input[name=height]').value;
    let gridWidth = formInput.querySelector('input[name=width]').value;

    function makeGrid(n,m) {
      pixelCanvas.innerHTML = '';
      for (i = 1; i <= n; i++) {
        const ROW = document.createElement('tr');
        pixelCanvas.appendChild(ROW);
        for (j = 0; j < m; j++) {
          const CELL = document.createElement('td');
          let pixelRow = pixelCanvas.lastElementChild;
          pixelRow.appendChild(CELL);
        }
      }
    }
    makeGrid(gridHeight, gridWidth);
  });

  pixelCanvas.addEventListener("click", function(event) {
    gridColor = document.querySelector('#colorPicker').value;
    event.target.style.backgroundColor=gridColor;
  });
});

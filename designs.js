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
      console.log('table cleared');
      for (i = 1; i <= n; i++) {
        const ROW = document.createElement('tr');
        pixelCanvas.appendChild(ROW);
        console.log(`added row #${i}`);
        for (j = 0; j < m; j++) {
          const CELL = document.createElement('td');
          let pixelRow = pixelCanvas.lastElementChild;
          pixelRow.appendChild(CELL);
          console.log('added cell');
        }
      }
    }
    makeGrid(gridHeight, gridWidth);

    // print to console
    console.log(`h x w :: ${gridHeight} x ${gridWidth}`);
  });

  pixelCanvas.addEventListener("click", function(event) {
    gridColor = document.querySelector('#colorPicker').value;
    console.log(`selected color is: ${gridColor}`);
    event.target.style.backgroundColor=gridColor;
  });

  // all code before this
});

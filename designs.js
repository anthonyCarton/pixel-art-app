// Define Global Variables
let gridColor = '#000000';
let formInput = document.querySelector('#sizePicker');
let pixelCanvas = document.querySelector('#pixelCanvas').firstElementChild;
let pixels = document.querySelectorAll('td');

document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners
  formInput.addEventListener('submit', function(event){
    // prevent the page from refreshing
    event.preventDefault();

    // Assign user input to variables
    let gridHeight = formInput.querySelector('input[name=height]').value;
    let gridWidth = formInput.querySelector('input[name=width]').value;

    function makeGrid(n,m) {
      // Define makeGrid variables
      const ROW = '<tr></tr>';
      const CELL = '<td></td>';

      // TODO: remove all table children
      console.log('clear table');
      pixelCanvas.innerHTML = '';

      // set table to N x M, don't need to nest the loops

      for (i = 0; i < n; i++) {
        console.log('add row');
        // add a <tr> element under table
        //document.table.appendChild(ROW); // TODO better way to do this?
        pixelCanvas.insertAdjacentHTML('beforeend', ROW);
        for (j = 0; j < m; j++) {
          console.log('add cell');
          // document.ROW.appendChild(CELL);
          pixelCanvas.lastElementChild.insertAdjacentHTML('beforeend', CELL);
        }
      }
    }
    makeGrid(gridHeight, gridWidth);

    // print to console to make sure this stuff is working
    console.log(`h x w :: ${gridHeight} x ${gridWidth}`);
  });

  pixels.addEventListener("click", function(event) {
    gridColor = document.querySelector('#colorPicker').value;
    console.log(`selected color is: ${gridColor}`);
    event.currentTarget.style.backgroundColor=gridColor;
  });


  // all code before this
});

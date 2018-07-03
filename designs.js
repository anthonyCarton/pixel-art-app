// Start only after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Define variables
  const ROW = document.createElement('tr');
  const CELL = document.createElement('td');

  let sizePicker = document.getElementById('sizePicker');
  let inputHeight = document.getElementById('inputHeight');
  let inputWidth = document.getElementById('inputWidth');
  let gridColor = document.getElementById('colorPicker');
  let pixelCanvas = document.getElementById('pixelCanvas');

  // Add event listeners
  sizePicker.addEventListener('submit', function(event){
    // prevent the page from refreshing
    event.preventDefault(); //TODO is this right?
    
    // Assign user input to variables
    let gridHeight = inputHeight.value;
    let gridWidth = inputWidth.value;
    // call makeGrid function
    makeGrid(gridHeight, gridWidth);
    // print to console to make sure this stuff is working
    console.log("h x w :: " + gridHeight + " x " + gridWidth);
  });

  // Set the size of the cross stitch canvas
  function makeGrid(n,m) {
    // remove all table children
    document.getElementsByTagName('tbody'); //TODO replace empty()
    // set table to N x M, don't need to nest the loops
    for (i = 0; i < n; i++) {
      // add a <tr> element under table
      pixelCanvas.appendChild(ROW); // TODO better way to do this?
    }
    for (j = 0; j < m; j++) {
      // TODO no jq
      // document.getElementsByTagName('tr').appendChild(CELL);
    }
  }

  // set the cell to gridColor on <td> click using .on, because .click will not bind to dynamically created events
  pixelCanvas.addEventListener("click", function() {
    // $( this ).css( "background-color", gridColor.val()); <-- how do I do that w/o jq
    console.log("color changer is working: " + gridColor.val()); // use this to text
  });

  // all code before this
});

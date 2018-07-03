// Start only after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Define variables
  const ROW = document.createElement('tr');
  const CELL = document.createElement('td');

  let pickSubmit = document.querySelector('input[type=submit]');
  let gridColor = document.querySelector('#colorPicker');
  let pixelCanvas = document.querySelector('#pixelCanvas');

  // Add event listeners
  pickSubmit.addEventListener('click', function(event){
    // Assign user input to variables
    let gridHeight = document.querySelector('#inputHeight').value;
    let gridWidth = document.querySelector('#inputWidth').value;

    function makeGrid(n,m) {
      // remove all table children
      document.getElementsByTagName('tbody'); //TODO replace empty()
      // set table to N x M, don't need to nest the loops
      for (i = 0; i < n; i++) {
        // add a <tr> element under table
        pixelCanvas.appendChild(ROW); // TODO better way to do this?
      }
      for (j = 0; j < m; j++) {
        // document.getElementsByTagName('tr').appendChild(CELL);
      }
    }

    makeGrid(gridHeight, gridWidth);

    // print to console to make sure this stuff is working
    console.log("h x w :: " + gridHeight + " x " + gridWidth);

    // prevent the page from refreshing
    event.preventDefault();
  });

  // set the cell to gridColor on <td> click using .on, because .click will not bind to dynamically created events
  pixelCanvas.addEventListener("click", function() {
    // $( this ).css( "background-color", gridColor.val()); <-- how do I do that w/o jq
    console.log("color changer is working: " + gridColor.val()); // use this to text
  });

  // all code before this
});

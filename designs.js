// Start only after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Define variables
  // TODO no jQ
  const NEW_CELL = document.getElementsByTagName('td');
  let sizePicker = document.getElementById('sizePicker');
  let gridHeight = document.getElementById('inputHeight');
  let gridWidth = document.getElementById('inputWidth');
  let gridColor = document.getElementById('colorPicker');
  let pixelCanvas = document.getElementById('pixelCanvas');

  // Add event listeners
  sizePicker.submit(function(){
    // prevent the page from refreshing
    event.preventDefault();
    // assign gridHeight and gridWidth the val() of their respective form values.
    gridHeight = inputHeight.val();
    gridWidth = inputWidth.val();
    // call makeGrid function
    makeGrid(gridHeight, gridWidth);
    // print to console to make sure this stuff is working
    console.log("h x w :: " + gridHeight + " x " + gridWidth);
  });

  // Set the size of the cross stitch canvas
  function makeGrid(n,m) {
    // remove all table children
    document.getElementsByTagName('tbody').empty();
    // set table to N x M, don't need to nest the loops
    for (i = 0; i < n; i++) {
      // fill row with <td> cells
      // add a <tr> element under table
      pixelCanvas.append("<tr></tr>"); // TODO better way to do this?
    }
    for (j = 0; j < m; j++) {
      // TODO no jq
      table.getElementsByTagName('tr').append( NEW_CELL.clone() );
    }
  }

  // set the cell to gridColor on <td> click using .on, because .click will not bind to dynamically created events
  pixelCanvas.//on("click", "td", function() {
    // $( this ).css( "background-color", gridColor.val()); <-- how do I do that w/o jq
    console.log("color changer is working: " + gridColor.val()); // use this to text
  });

  // all code before this
});

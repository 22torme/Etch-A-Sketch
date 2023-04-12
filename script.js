//selecting container
const container = document.querySelector('.container');
// console.log(container);

//create div element
const div = document.createElement('div');

//select size slider
const size = document.querySelector('#size');
// console.log(size);
let sizeValue = size.value;

//-------------------------------------------------
function addColumnEventListeners(){
    columns.forEach((column) => {
        column.addEventListener('mousedown', () => {
          mouseDown = true;
        });
        column.addEventListener('mouseup', () => {
          mouseDown = false;
        });
        column.addEventListener('mouseover', () => {
          if (mouseDown) {
            column.style.backgroundColor = colorValue;
          }
        });
        column.addEventListener('click', () => {
          column.style.backgroundColor = colorValue;
        });
      });
}
//-------------------------------------------------

//-------------------------------------------------
function createGrid(sizeValue) {
// Loop through each row
for (var i = 0; i < sizeValue; i++) {
  // Create a new row element
  var row = document.createElement("div");
  row.classList.add("row");

  // Loop through each column in the current row
  for (var j = 0; j < sizeValue; j++) {
    // Create a new column element
    var col = document.createElement("div");
    col.classList.add("col");

    // Append the column element to the current row
    row.appendChild(col);
  }

  // Append the row element to the container element
  container.appendChild(row);
}
columns = document.querySelectorAll('.col');
addColumnEventListeners();
}
//-------------------------------------------------




let columns = document.querySelectorAll('.col');
createGrid(sizeValue);


//add event listener to size slider
size.addEventListener('change', () => {
    sizeValue = size.value;
    container.innerHTML = '';
    createGrid(sizeValue);
    columns = document.querySelectorAll('.col');
    console.log(columns);
    console.log(sizeValue);
});

//-------------------------------------------------
//get color from color picker
const color = document.querySelector('#color');
let colorValue = color.value;

//add event listener to color picker
color.addEventListener('change', () => {
    colorValue = color.value;
    console.log(colorValue);
});
//-------------------------------------------------


//-------------------------------------------------
let mouseDown = false;

columns.forEach((column) => {
    column.addEventListener('mousedown', () => {
        mouseDown = true;
        console.log(mouseDown)
        });
        column.addEventListener('mouseup', () => {
            mouseDown = false;
            });
            column.addEventListener('mouseover', () => {
                if (mouseDown) {
                    column.style.backgroundColor = colorValue;
                }
            });
        });

//-------------------------------------------------

//RESET BUTTON
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    location.reload();
});

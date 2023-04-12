//selecting container
const container = document.querySelector('.container');
// console.log(container);

//create div element
const div = document.createElement('div');

// Loop through each row
for (var i = 0; i < 16; i++) {
  // Create a new row element
  var row = document.createElement("div");
  row.classList.add("row");


  // Loop through each column in the current row
  for (var j = 0; j < 16; j++) {
    // Create a new column element
    var col = document.createElement("div");
    col.classList.add("col");

    // Append the column element to the current row
    row.appendChild(col);
  }

  // Append the row element to the container element
  container.appendChild(row);
}

//selecting all columns
const columns = document.querySelectorAll('.col');
console.log(columns);

//-------------------------------------------------
//get color from color picker
const color = document.querySelector('#color');
let colorValue = color.value;

//add event listener to color picker
color.addEventListener('change', () => {
    colorValue = color.value;
    columns.style.hover = colorValue;
});
//-------------------------------------------------




//-------------------------------------------------
//COLUMNS
let mouseDown = false;

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
                    column:hover = colorValue;
                }
            });
        });

columns.forEach((column) => {
    column.addEventListener('click', () => {
        column.style.backgroundColor = colorValue;
    });
});

//-------------------------------------------------

//RESET BUTTON
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  columns.forEach((column) => {
    column.style.backgroundColor = 'white';
  });
}
);

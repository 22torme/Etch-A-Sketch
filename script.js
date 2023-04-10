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

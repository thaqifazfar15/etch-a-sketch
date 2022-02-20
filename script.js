//function to create grid

function createGrid(num) {
  const gridBox = document.querySelector(".grid-box");
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  gridBox.style.gridTemplateColumns = `repeat(${num}, 1fr)`; //so a perfect square grid can be created
  gridBox.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  for (rows = 0; rows < num; rows++) {
    for (columns = 0; columns < num; columns++) {
      gridBox.append(gridItem.cloneNode());
    }
  }
}

//function to clear grid
createGrid(5);

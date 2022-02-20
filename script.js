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

function clearGrid() {
  const gridItems = Array.from(document.querySelectorAll(".grid-item"));
  gridItems.forEach((item) => {
    item.remove();
  });
}

function addClass(elem) {
  elem.classList.add("clicking");
}

function removeClass() {
  const buttons = Array.from(document.querySelectorAll(".btn"));
  buttons.forEach((btn) => {
    btn.classList.remove("clicking");
  });
}

function changeColor(elem) {
  removeClass();
  addClass(elem);
}

function resizeGrid() {
  let num = prompt("Enter your value: ");
  if (num < 2 || num > 64) {
    return "Wrong Input";
  }
  return createGrid(num);
}

const resizeButton = document.querySelector(".btn-resize");
resizeButton.addEventListener("click", function () {
  clearGrid();
  resizeGrid();
});

const resetButton = document.querySelector(".btn-reset");
resetButton.addEventListener("click", function () {
  clearGrid();
  createGrid(8);
});

//function to clear grid

//create a 8x8 grid at the moment when browser is opened or refresh
createGrid(8);

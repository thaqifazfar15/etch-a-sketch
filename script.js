function eventGrid() {
  const allGridItem = Array.from(document.querySelectorAll(".grid-item"));
  allGridItem.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = "rgba(0, 0, 0, 1)";
    });
  });
}

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
  eventGrid();
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
  //ask user to enter their number
  let num = prompt("Enter your value: ");
  if (num < 2 || num > 64) {
    return "Wrong Input";
  }
  return createGrid(num);
}

const resizeButton = document.querySelector(".btn-resize");
resizeButton.addEventListener("click", function () {
  clearGrid(); //grid need to be clear first
  resizeGrid(); //user will enter their number
});

const resetButton = document.querySelector(".btn-reset");
resetButton.addEventListener("click", function () {
  //reset the game
  clearGrid();
  createGrid(8);
});

//create a 8x8 grid at the moment when browser is opened or refresh
createGrid(8);

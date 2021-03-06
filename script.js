var colorWell;
var defaultColor = "rgb(0, 0, 0)";
var colorContainer = document.querySelector(".color-container");

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector(".color-picker");
  colorWell.value = defaultColor;
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateAll(event) {
  defaultColor = event.target.value;
  colorContainer.style.backgroundColor = defaultColor;
}

function eventGrid() {
  const allGridItem = Array.from(document.querySelectorAll(".grid-item"));
  allGridItem.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = defaultColor;
      item.style.border = "none";
    });
  });
}

function eraseGrid() {
  const allGridItem = Array.from(document.querySelectorAll(".grid-item"));
  allGridItem.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = "rgba(0, 0, 0, 0)";
      item.style.border = "solid 1px rgba(0, 0, 0, 0.1)";
    });
  });
}

function randomColor() {
  const index = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += index[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomizeGrid() {
  const allGridItem = Array.from(document.querySelectorAll(".grid-item"));
  allGridItem.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = randomColor();
      item.style.border = "none";
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
}

function clearGrid() {
  const gridItems = Array.from(document.querySelectorAll(".grid-item"));
  gridItems.forEach((item) => {
    item.remove();
  });
}

function resetGrid() {
  const gridItems = Array.from(document.querySelectorAll(".grid-item"));
  gridItems.forEach((item) => {
    item.style.backgroundColor = "rgba(0, 0, 0, 0)";
    item.style.border = "solid 1px rgba(0, 0, 0, 0.1)";
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
  let num = prompt("Enter your value (must be in range from 2 to 64) :");
  if (num < 2 || num > 64) {
    return createGrid(8);
  }
  return createGrid(num);
}

const drawButton = document.querySelector(".btn-draw");
drawButton.addEventListener("click", function () {
  eventGrid();
});

const randomButton = document.querySelector(".btn-random");
randomButton.addEventListener("click", function () {
  randomizeGrid();
});

const resizeButton = document.querySelector(".btn-resize");
resizeButton.addEventListener("click", function () {
  clearGrid(); //grid need to be clear first
  resizeGrid(); //user will enter their number
});

const eraseButton = document.querySelector(".btn-eraser");
eraseButton.addEventListener("click", function () {
  eraseGrid();
});

const resetButton = document.querySelector(".btn-reset");
resetButton.addEventListener("click", function () {
  //reset the canvas to white
  resetGrid();
});

//create a 8x8 grid at the moment when browser is opened or refresh
createGrid(8);

function draw(e) {
  if (e.type == "mouseover") {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.currentTarget.style.background = "#" + randomColor;
    var opacity = getComputedStyle(e.currentTarget).opacity;
    e.currentTarget.style.opacity = parseFloat(opacity) + 0.1 + "";
  }
}

function resetGrid() {
  const tmp = document.querySelector("#container");
  while (tmp.firstChild) {
    tmp.removeChild(tmp.firstChild);
  }
}

function drawGrid(gridSize) {
  const container = document.querySelector("#container");
  const total = Math.pow(gridSize, 2);
  const squareSize = 100 / gridSize;
  for (let i = 0; i < total; i++) {
    const square = document.createElement("div");
    square.style.width = squareSize + "%";
    square.style.height = squareSize + "%";
    square.setAttribute("id", "grid");
    square.addEventListener("mouseover", draw);
    container.appendChild(square);
  }
}

const btn = document.querySelector("#reset");
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
btn.style.background = "#" + randomColor;
btn.style.color = "white";
let gridSize = 16;
btn.addEventListener("click", () => {
  let gridSize = prompt("How many squares should the grid have?");
  while (gridSize > 100) {
    gridSize = prompt("Size is too big, please try less than 100 squares");
  }

  resetGrid();
  drawGrid(gridSize);
});
drawGrid(gridSize);

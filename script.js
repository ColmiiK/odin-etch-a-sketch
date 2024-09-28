function draw(e) {
  if (e.type == "mouseover") {
    e.currentTarget.style.background = "black";
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

function draw(e) {
  if (e.type == "mouseover") {
    e.currentTarget.style.background = "red";
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

  for (let i = 0; i < gridSize; i++) {
    let rowDiv = document.createElement("div");
    for (let j = 0; j < gridSize; j++) {
      let columnDiv = document.createElement("div");
      columnDiv.setAttribute("id", "grid");
      columnDiv.addEventListener("mouseover", draw);
      rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
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

const container = document.querySelector('.container');

let gridSize = 16;
let cellSize = Math.floor(960 / gridSize);

createGrid(gridSize, cellSize);

container.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('square')) {
    event.target.classList.add('square-hover');
  }
});

container.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('square')) {
    event.target.classList.remove('square-hover');
  }
});

function createGrid(gridSize, cellSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;

  let squares = new DocumentFragment();

  for (let i = 0; i < gridSize * gridSize; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    squares.appendChild(square);
  }
  container.appendChild(squares);
}

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  getSizeResetGrid();
});

function getSizeResetGrid() {
  let size = 0;
  while (size < 1 || size > 100) {
    size = prompt('Enter a number');
  }
  gridSize = size;
  cellSize = Math.floor(960 / gridSize);
  createGrid(size, cellSize);
}
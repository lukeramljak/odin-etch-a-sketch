const container = document.querySelector('.container');
let gridSize = 16;
let cellSize = Math.floor(500 / gridSize);

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

function getRandomColour() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getSizeResetGrid() {
  let size = 0;
  while (size < 1 || size > 100) {
    size = prompt('Enter a number');
  }
  gridSize = size;
  cellSize = Math.floor(500 / gridSize);
  createGrid(size, cellSize);
}

container.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = getRandomColour();
});

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  getSizeResetGrid();
});

createGrid(gridSize, cellSize);
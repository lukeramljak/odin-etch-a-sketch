const container = document.querySelector('.container');

createGrid(8);

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

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 24px)`;
  container.style.gridTemplateRows = `repeat(${size}, 24px)`;

  let squares = new DocumentFragment();

  for (let i = 0; i < size * size; i++) {
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
  createGrid(size);
}
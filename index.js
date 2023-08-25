const container = document.querySelector('.container');

createGrid(8);

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 24px)`;
  container.style.gridTemplateRows = `repeat(${size}, 24px)`;

  let squares = new DocumentFragment();

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    squares.appendChild(square).className = 'square';
  }
  container.appendChild(squares);
}

let grid = document.querySelector('.eas-grid');
let range = document.querySelector('input[type="range"]');
let clear = document.querySelector('.clear');
let color = '#6EA4BF'
let value = 5;

function generateGrid(size) {

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for(let i = 0; i < size ; i++) {
    for(let j = 0; j < size ; j ++) {

      let cell = document.createElement('div');

      cell.classList.add('cells');
      cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = color;
      });
      
      grid.appendChild(cell);
    } 
  }
}

function resetGrid() {
  grid.innerHTML = '';
}

function setValue(v) {
  value = v;
  generateGrid(value);
}

function clearGrid() {
  resetGrid();
}

range.onchange = (e) => {
  clearGrid();
  // setValue(value);
  generateGrid(e.target.value);
}

clear.onclick = () => {
  clearGrid();
  generateGrid(value);
}

generateGrid(value);



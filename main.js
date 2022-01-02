let grid = document.querySelector('.eas-grid');
// let size = 25;
let multipier = 1;
let color = '#6EA4BF'

function generateGrid(size) {
  grid.style.width = `${size * size}px`;
  grid.style.height = `${size * size}px`;
  grid.style.gridTemplateColumns = `repeat(${size/multipier}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for(let i = 0; i < size /multipier; i++) {
    for(let j = 0; j < size ; j += multipier) {
      let cell = document.createElement('div');
      // cell.style.width =`${size * multipier}px`;
      // cell.style.height =`${size * multipier}px`;
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

generateGrid(25);



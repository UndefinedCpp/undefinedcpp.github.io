let n = 4;
let grid = [];

const gridContainer = document.getElementById('grid-container');
const gridSizeSelect = document.getElementById('gridSize');

gridSizeSelect.addEventListener('change', (e) => {
    n = parseInt(e.target.value);
    initGrid(n);
    updateGrid();
});

// Initialize grid array with 0s
function initGrid(size) {
    grid = Array(size).fill().map(() => Array(size).fill(0));
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 50px)`;
}

// Update the visual grid display
function updateGrid() {
    gridContainer.innerHTML = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            if (grid[i][j] === 1) {
                square.style.backgroundColor = '#FF2020';
            } else if (grid[i][j] === -1) {
                square.style.backgroundColor = '#3434ff';
            } else {
                square.style.backgroundColor = 'gray';
            }

            square.onclick = () => toggleColor(i, j);
            gridContainer.appendChild(square);
        }
    }
}

// Toggle color of grid cell
function toggleColor(i, j) {
    if (grid[i][j] === 0) {
        grid[i][j] = 1;
    } else if (grid[i][j] === 1) {
        grid[i][j] = -1;
    } else {
        grid[i][j] = 0;
    }
    updateGrid();
}

document.getElementById('solveButton').onclick = function() {
    console.log(grid);
}

// Initial setup
initGrid(n);
updateGrid();
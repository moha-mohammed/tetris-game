document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const gridSize = 10 * 20; // 10 columns, 20 rows

    // Create grid cells
    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        gameBoard.appendChild(cell);
    }

    // Example: add a block (you'll need to expand this)
    const cells = gameBoard.children;
    cells[0].classList.add('block', 'i-block');
    cells[1].classList.add('block', 'i-block');
    cells[2].classList.add('block', 'i-block');
    cells[3].classList.add('block', 'i-block');

});

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
	cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
	const cell = event.target;
	const index = cell.id;
	if (board[index] === '') {
		board[index] = currentPlayer;
		cell.classList.add(`player-${currentPlayer}`);
		cell.innerText = currentPlayer;
		checkWin();
		togglePlayer();
	}
}

function checkWin() {
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (board[a] && board[a] === board[b] && board[b] === board[c]) {
			alert(`${currentPlayer} wins!`);
			resetGame();
		}
	}
}

function togglePlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
	board = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	cells.forEach(cell => {
		cell.innerText = '';
		cell.classList.remove('player-one');
		cell.classList.remove('player-two');
	});
}

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetGame);

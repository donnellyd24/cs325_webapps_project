UPDATE_INTERVAL = 30 // milliseconds

const $gameBoard = document.getElementById('gameBoard')
const $scoreInput = document.getElementById('score');

const mineList = []

let score = 0;
let timerId = null;

$scoreInput.value = score;

document.addEventListener('DOMContentLoaded', () => {
    initGamePieces();
    // playGame()
    gameBoard.addEventListener('click', (ev) => {
        if(ev.target.classList.contains('scoreCircle')) {
            updateScore(ev.target.dataset.points)
        }
        if(ev.target.classList.contains('mine')) console.log('this should end the game')
    })
})

function initGamePieces() {
    const $mines = document.querySelectorAll('.mine')
    for (let m of $mines) {
        const mine = new Mine(m)
        mineList.push(mine)
    }
}

function playGame() {
    if (timerId) return
    timerId = setInterval(moveGamePieces, UPDATE_INTERVAL)
}

function moveGamePieces() {
    for (let mine of mineList) {
        mine.el.style.left = 100 + 'px';
        mine.el.style.top = 100 + 'px';
    }
}

function updateScore(points) {
    points = Number(points)
    score += points
    $scoreInput.value = score
}
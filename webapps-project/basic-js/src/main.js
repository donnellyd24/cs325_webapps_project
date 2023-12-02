UPDATE_INTERVAL = 15 // milliseconds

const $gameBoard = document.getElementById('gameBoard')
const $scoreInput = document.getElementById('score');

const mineList = []
const scoreCircleList = []

let score = 0;
let timerId = null;

$scoreInput.value = score;

document.addEventListener('DOMContentLoaded', () => {
    initGamePieces();
    playGame();
    $gameBoard.addEventListener('click', handleGamePieceClicked)
})

function handleGamePieceClicked(ev) {
    if(ev.target.classList.contains('scoreCircle')) updateScore(ev.target.dataset.points)
        if(ev.target.classList.contains('mine')) {
            console.log('this should end the game')
            handleMineClick();
        }
}

function initGamePieces() {
    const $mines = document.querySelectorAll('.mine')
    const scoreCircles = document.querySelectorAll('.scoreCircle')
    for (let m of $mines) {
        const mine = new Mine(m)
        mineList.push(mine)
    }
    for(let c of scoreCircles) {
        const circle = new ScoreCircle(c)
        scoreCircleList.push(circle)
    }
}

function playGame() {
    if (timerId) return
    timerId = setInterval(moveGamePieces, UPDATE_INTERVAL)
}

function moveGamePieces() {
    for (let m of mineList) {
        m.updateLocation();
    }
    for (let c of scoreCircleList) {
        c.updateLocation();
    }
}

function updateScore(points) {
    points = Number(points)
    score += points
    $scoreInput.value = score
}

function handleMineClick() {
    clearInterval(timerId) // stop movement
    $gameBoard.removeEventListener('click', handleGamePieceClicked)
    $gameBoard.classList.add('filtered')
    $gameBoard.textContent="BOOM! GAME OVER!"
}
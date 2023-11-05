const $gameBoard = document.getElementById('gameBoard')
const $scoreInput = document.getElementById('score');

let score = 0;

$scoreInput.value = score;

gameBoard.addEventListener('click', (ev) => {
    if(ev.target.classList.contains('scoreCircle')) {
        updateScore(ev.target.dataset.points)
    }
    if(ev.target.classList.contains('mine')) console.log('this should end the game')
})

function updateScore(points) {
    points = Number(points)
    score += points
    $scoreInput.value = score
}
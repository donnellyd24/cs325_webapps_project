const gameBoard = document.getElementById('gameBoard')

gameBoard.addEventListener('click', (ev) => {
    console.log('Gameboard clicked')
    if(ev.target.classList.contains('scoreCircle')) console.log('this should add points')
    if(ev.target.classList.contains('mine')) console.log('this should end the game')
})
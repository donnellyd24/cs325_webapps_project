import './App.css';

function App() {
  return (
    <>
    <header>
        <h1>Dale Donnelly, CS325 Webapps Project</h1>
        <h2>Avoid the Sweeping Mines</h2>
        <span>This Project was inspired by <a href="https://minesweeperonline.com/" target="_blank">Minesweeper</a></span>
    </header>
    <section id="game">
        <div id="howToPlay">
            <p>How to Play</p>
            <ul>
                <li>Point circles and mines will move around the play area.</li>
                <li>Click the point circles to score.</li>
                <li>Smaller, faster point circles are worth more points.</li>
                <li>Avoid the mines, or it's game over!</li>
            </ul>
        </div>
        <span>Score: <input readonly id="score" size="4" /></span>
        <GameBoard>
              <ScoreCircle></ScoreCircle>
              <Mine></Mine>
        </GameBoard>
    </section>
    </>
  );
}

export default App;

function GameBoard({ children }) {
  // TODO
  return (
    <>
      <div id="gameBoard">
        {children}
      </div>
    </>
  );
}

function Mine() {
  // TODO
  return (
    <>
      <span>Mine</span>
    </>
  )
}

function ScoreCircle() {
  // TODO
  return (
    <>
    <span>Score Circle</span>
    </>
  )
}
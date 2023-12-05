import './App.css';

import { useState, useRef, forwardRef, useEffect } from 'react'
import { Mine } from './components/Mine';
import { ScoreCircle } from './components/ScoreCircle';

const MINE_RADIUS = 30 //px
const MINE_DIAMETER = 60 
const SCORE_RADIUS = 15 
const SCORE_DIAMETER = 30 

function App() {
  const [isActive, setIsActive] = useState(true)
  const [dimensions, setDimensions] = useState({width: 950, height: 535})
  const [score, setScore] = useState(0)
  const [mineLocation, setMineLocation] = useState(getRandomLocation(dimensions, MINE_DIAMETER))
  const [scoreLocation, setScoreLocation] = useState(getRandomLocation(dimensions, SCORE_DIAMETER))

  const GameBoardRef = useRef(null)
  useEffect(() => {
    if (GameBoardRef.current) {
      const el = GameBoardRef.current
      setDimensions({ width: el.clientWidth, height: el.clientHeight })
    }

    let interval
    if (isActive) {
      interval = setInterval(() => {
        setMineLocation(getRandomLocation(dimensions, MINE_RADIUS))
        setScoreLocation(getRandomLocation(dimensions, SCORE_RADIUS))
      }, 1000)
      return () => {clearInterval(interval)}
    } else if (!isActive) {
      clearInterval(interval)
    }
  }, [isActive])

  const handleMineClick = () => {
    setIsActive(false)
  }

  const handleScoreCircleClick = (score) => {
    setScore(s => s + score)
  }

  return (
    <>
    <Header></Header>
    <section id="game">
      <HowToPlay></HowToPlay>
      <section>
        <ScoreBar score={score}></ScoreBar>
        <GameBoard ref={GameBoardRef}>
          <ScoreCircle location={scoreLocation} onScoreCircleClick={handleScoreCircleClick} disabled={!isActive}></ScoreCircle>
          <Mine location={mineLocation} onMineClick={handleMineClick} disabled={!isActive}></Mine>
        </GameBoard>
      </section>
    </section>
    </>
  );
}

export default App;

function Header() {
  return (
    <>
    <header>
      <h1>Dale Donnelly, CS325 Webapps Project</h1>
      <h2>Avoid the Sweeping Mines</h2>
      <span>This Project was inspired by <a href="https://minesweeperonline.com/" target="_blank">Minesweeper</a></span>
    </header>
    </>
  )
}

function HowToPlay () {
  return (
    <>
    <div id="howToPlay">
            <p>How to Play</p>
            <ul>
                <li>Point circles and mines will move around the play area.</li>
                <li>Click the point circles to score.</li>
                <li>Smaller, faster point circles are worth more points.</li>
                <li>Avoid the mines, or it's game over!</li>
            </ul>
        </div>
    </>
  )
}

function ScoreBar({score}) {
  return (
    <>
      <span>Score: {score} </span>
    </>
  )
}

const GameBoard = forwardRef(({children}, ref) => {
  return (
    <div id="gameBoard" ref={ref}>
      {children}
    </div>
  )
})

function getRandomLocation(dimensions, diameter) {
  return {
    x: diameter + Math.random() * (dimensions.width - 2 * diameter),
    y: diameter + Math.random() * (dimensions.height - 2 * diameter)
  }
}
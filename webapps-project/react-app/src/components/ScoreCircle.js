export function ScoreCircle({location, onScoreCircleClick}) {
    // TODO
    const points = 5
    const {x, y} = location
    return (
      <>
        <div className='scoreCircle' 
        onClick={() => onScoreCircleClick(points)}
        style={{
            left: x,
            top: y
        }}>{points}</div>
      </>
    )
  }
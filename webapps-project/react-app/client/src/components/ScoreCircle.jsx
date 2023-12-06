export function ScoreCircle({location, onScoreCircleClick, disabled}) {
    // TODO
    const points = 5
    const {x, y} = location
    return (
      <>
        <div className='scoreCircle'
        onClick={() => onScoreCircleClick(points)}
        style={{
            left: x,
            top: y,
            pointerEvents: disabled ? 'none' : 'auto'
        }}>{points}</div>
      </>
    )
  }
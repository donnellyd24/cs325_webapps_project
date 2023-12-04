export function ScoreCircle({location}) {
    // TODO
    const {x, y} = location
    return (
      <>
        <div className='scoreCircle' style={{
            left: x,
            top: y
        }}></div>
      </>
    )
  }
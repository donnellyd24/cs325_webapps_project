import { randomCoordinate } from "../App"

export function Mine({location, onMineClick, disabled}) {
    // TODO
    const { x , y } = location
    return (
      <>
        <div className='mine' 
        onClick={() => onMineClick()}
        style={{
            left: x,
            top: y,
            pointerEvents: disabled ? 'none' : 'auto'
        }}></div>
      </>
    )
  }
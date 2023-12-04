import { randomCoordinate } from "../App"

export function Mine({location}) {
    // TODO
    const { x , y } = location
    return (
      <>
        <div className='mine' style={{
            left: x,
            top: y
        }}></div>
      </>
    )
  }
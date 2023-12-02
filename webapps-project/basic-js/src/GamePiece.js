DEFAULT_STEP = 1;
DEFAULT_RADIUS = 15;

class GamePiece {
    el
    border
    location
    direction
    step
    radius
    constructor(el) {
        this.el = el
        this.border = new Border(this.el.closest('#gameBoard'))
        this.direction = this.#getRandomAngle()
        this.step = DEFAULT_STEP;
        this.radius = DEFAULT_RADIUS;
        this.location = new Location(this.#randomInside(this.border.width, this.radius),
                                     this.#randomInside(this.border.height, this.radius)
                                    ) 
    }

    place() {
        const {x, y} = this.location
        this.el.style.left = (x - this.radius) + 'px'
        this.el.style.top = (y - this.radius) + 'px'
    }

    updateLocation() {
        this.#changeDirectionIfOutOfBounds()
        const { newX, newY } = this.#getNewLocation()
        this.location.x = newX
        this.location.y = newY
        this.place();
    }

    #randomInside(width, radius) {
        return radius + Math.random() * (width - 2 * radius)
    }
    
    #getRandomAngle() {
        return (Math.random() * 2 *  Math.PI)
    }

    #changeDirectionIfOutOfBounds() {
        const boundary = this.border.borderContact(this.location, this.radius)
        if (boundary === 'right' || boundary === 'left') {
            this.direction = Math.PI - this.direction
        } else if (boundary === 'top' || boundary === 'bottom') {
            this.direction = -this.direction
        }
    }

    #getNewLocation() {
        const newX = this.location.x + this.step * Math.cos(this.direction)
        const newY = this.location.y + this.step * Math.sin(this.direction)
        return { newX, newY }
    }
}
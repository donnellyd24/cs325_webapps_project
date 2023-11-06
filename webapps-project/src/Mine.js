MINE_RADIUS = 30 // pixels

class Mine {
    el
    border
    location
    constructor(el) {
        this.el = el;
        console.log(`Mine El: ${this.el}`)
        this.border = new Border(this.el.closest('#gameBoard'))
        console.log(`Mine Border: ${this.border.width}, ${this.border.height}`)
        this.location = new Location(this.randomInside(this.border.width, MINE_RADIUS),
                                     this.randomInside(this.border.height, MINE_RADIUS)
                                    )
        console.log(`Mine Location: ${this.location.x}, ${this.location.y}`)
        this.place()
    }

    randomInside(width, radius) {
        return radius + Math.random() * (width - 2 * radius)
    }

    place() {
        const {x, y} = this.location
        this.el.style.left = (x - MINE_RADIUS) + 'px'
        this.el.style.top = (y - MINE_RADIUS) + 'px'
    }
}
class Border {
    constructor(el) {
        this.el = el
    }

    get width() {
        return this.el.offsetWidth
    }
    
    get height() {
        return this.el.offsetHeight
    }

    borderContact(location, radius) {
        const { x, y } = location
        // x < 0 is too far left
        if (x - radius < 0) return 'left'
        // x > border.width too far right
        if (x + radius > this.width) return 'right'
        // y  < 0 too high
        if (y - radius < 0) return 'top'
        // y> border.height too far down
        if (y + radius > this.height) return 'bottom'
        else return 'none'
    }
}
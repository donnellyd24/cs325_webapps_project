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
}
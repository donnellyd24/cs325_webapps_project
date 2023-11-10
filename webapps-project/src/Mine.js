MINE_RADIUS = 30
MINE_STEP = 3

class Mine extends GamePiece {
    constructor(el) {
        super(el);
        this.step = MINE_STEP;
        this.radius = MINE_RADIUS
        this.place()
    }
}
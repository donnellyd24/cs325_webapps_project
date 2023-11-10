LOW_SCORE_STEP = 1
LOW_SCORE_RADIUS = 20

MID_SCORE_STEP = 2
MID_SCORE_RADIUS = 15

HIGH_SCORE_STEP = 3
HIGH_SCORE_RADIUS = 10

class ScoreCircle extends GamePiece {
    constructor(el) {
        super(el)
        if (this.el.classList.contains('scoreCircleLow')) {
            this.step = LOW_SCORE_STEP
            this.radius = LOW_SCORE_RADIUS
        }
        if (this.el.classList.contains('scoreCircleMid')) {
            this.step = MID_SCORE_STEP
            this.radius = MID_SCORE_RADIUS
        }
        if (this.el.classList.contains('scoreCircleHigh')) { 
            this.step = HIGH_SCORE_STEP
            this.radius = HIGH_SCORE_RADIUS
        }
        this.place()
    }
}
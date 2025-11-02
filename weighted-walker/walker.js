class Walker {

    constructor(color) {
        this.x = width / 2;
        this.y = height / 2;
        this.color = color;
    }

    show() {
        stroke(this.color);
        point(this.x, this.y);
    }

    step() {
        let xstep = random(-1, 1);
        let ystep = random(-1, 1);
        this.x += xstep;
        this.y += ystep;
    }
}
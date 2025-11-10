class TrailWalker {

    constructor(baseColor, trailLength) {
        this.x = random(width);
        this.y = random(height);
        this.baseColor = baseColor;
        this.trailLength = trailLength;
        this.trail = []
    }

    step() {
    // random walk
    this.x += random(-1, 1);
    this.y += random(-1, 1);

    // keep on canvas
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);

    // save current position at the front (newest first)
    this.trail.unshift({ x: this.x, y: this.y });

    // trim to max length
    if (this.trail.length > this.trailLength) this.trail.pop();
  }

  show() {
    // draw newest -> oldest with fading alpha
    for (let i = 0; i < this.trail.length; i++) {
        // i = 0 is newest, gets max alpha; last gets near 0 alpha
        const alpha = map(i, 0, this.trailLength - 1, 255, 0);

        const c = color(
            red(this.baseColor),
            green(this.baseColor),
            blue(this.baseColor),
            alpha
        );

        stroke(c);
        point(this.trail[i].x, this.trail[i].y);
    }
  }
}
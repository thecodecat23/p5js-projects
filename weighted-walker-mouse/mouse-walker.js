class MouseWalker
    extends Walker {
        constructor(color) {
            super(color);
        }

        step() {
            let r = random(1)
            let mx = mouseX;
            let my = mouseY;

            if (r < 0.5) {
                let stepX = this.x < mx ? +1 : this.x == mx ? 0 : -1;  
                let stepY = this.y < my ? +1 : this.y == my ? 0 : -1;
                this.x += stepX;
                this.y += stepY;
            } else {
                let xstep = random(-1, 1);
                let ystep = random(-1, 1);
                this.x += xstep;
                this.y += ystep;
            }
        }
    }
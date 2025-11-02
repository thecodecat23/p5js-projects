class WeightedWalker
    extends Walker {
    // 0 = UP
    // 1 = DOWN
    // 2 = LEFT
    // 3 = RIGHT
    constructor(color, weights) {
        super(color);
        this.weights = weights;
    }

    step() {
        let totalWeight = 0;
        for (let w = 0; w < 4; w++) {
            totalWeight += this.weights[w];
        }

        let randomChoice = random(totalWeight);
        let chosenDirection;
        for (let i = 0; i < 4; i++) {
            if (randomChoice < this.weights[i]) {
                chosenDirection = i;
                break;
            }
            randomChoice -= this.weights[i];
        }

        switch (chosenDirection) {
            // UP
            case 0:
                this.y -= 1;
                break;
            // DOWN
            case 1:
                this.y += 1;
                break;
            // LEFT
            case 2:
                this.x -= 1;
                break;
            // RIGHT
            case 3:
                this.x += 1;
                break;
        }
    }
}
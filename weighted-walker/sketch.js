let weightedWalker;

const weights = [1, 1.5, 1, 1];

function setup() {
  createCanvas(640, 640);
  weightedWalker = new WeightedWalker(color(0, 51, 255), weights);
  background(255);
}

function draw() {
  weightedWalker.step();
  weightedWalker.show();
}
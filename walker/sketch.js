let walker;
let weightedWalker;

const weights = [1, 1.5, 1, 1];

function setup() {
  createCanvas(640, 640);
  walker = new Walker(color(255, 0, 51));
  weightedWalker = new WeightedWalker(color(0, 51, 255), weights);
  background(255);
}

function draw() {
  walker.step();
  weightedWalker.step();

  walker.show();
  weightedWalker.show();
}
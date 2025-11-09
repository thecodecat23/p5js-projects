function setup() {
  createCanvas(400, 400);
  rColor = color(floor(random(255)), floor(random(255)), floor(random(255)));
  weightedWalker = new MouseWalker(rColor);
  background(255);
}

function draw() {
  weightedWalker.step();
  weightedWalker.show();
}
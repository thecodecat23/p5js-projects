let walker;

function setup() {
  createCanvas(640, 640);
  walker = new Walker(color(255, 0, 51));
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}
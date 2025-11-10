let walkers = [];
const trailLength = 10;
const maxWalkers = 200;

function setup() {
  frameRate(24);
  createCanvas(100, 100);
  background(255);
  addWalker();
}

function draw() {
  background(255);

  let r = random(1)
  if (r < 0.1) {
    addWalker();
  }

  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].show();
  }
}

function getRandomColor() {
  return color(getFloorRandom(255), getFloorRandom(255), getFloorRandom(255));
}

function getFloorRandom(upperBound) {
  return floor(random(upperBound));
}

function addWalker() {
  let rColor = getRandomColor();
  let walker = new TrailWalker(rColor, trailLength);
  
  walkers.push(walker);

  if (walkers.length > maxWalkers) {
    walkers.shift();
  }
}
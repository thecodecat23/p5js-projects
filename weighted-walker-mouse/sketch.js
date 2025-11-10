let walkers = [];

function setup() {
  createCanvas(400, 400);
  background(255);
  addWalker();
}

function draw() {
  let r = random(1)

  if (r < 0.1) {
    addWalker();
  }

  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].show();
  }
}

function addWalker() {
  let rColor = color(floor(random(255)), floor(random(255)), floor(random(255)));
  let walker = new MouseWalker(rColor);
  
  walkers.push(walker);

  if (walkers.length > 50) {
    walkers.shift();
  }
}
let randomCounts = [];
let total = 20;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }

  // Set text properties
  textAlign(CENTER, BOTTOM);
  textSize(6);
}

function draw() {
  background(255);

  let index = floor(random(randomCounts.length));
  randomCounts[index]++;

  let w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    let barHeight = randomCounts[x];

    // Set fill color for the bars
    fill(26, 242, 83);
    stroke(0);

    // Draw the bar
    rect(x * w, height - barHeight, w - 1, barHeight);

    // Set text color
    fill(0); // Black color for text
    noStroke();

    // Display the count number above each bar
    text(randomCounts[x], x * w + w / 2, height - barHeight - 2);

    // Display the index number below each bar
    text(x, x * w + w / 2, height);
  }
}
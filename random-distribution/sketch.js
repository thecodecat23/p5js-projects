let randomCounts = [];
let total = 20;
let txtSize = 10;
let gap = 4; // Gap between elements

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }

  // Set text properties
  textAlign(CENTER, BOTTOM);
  textSize(txtSize);
}

function draw() {
  background(255);

  let index = floor(random(randomCounts.length));
  randomCounts[index]++;

  // Get current text size
  let textHeight = textSize();
  
  // Calculate maximum bar height considering text and gaps
  let maxBarHeight = height - (textHeight * 2 + gap * 3);

  // Check if any bar has reached the maximum allowable height
  if (randomCounts[index] >= maxBarHeight) {
    noLoop(); // Stop the draw loop
  }

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
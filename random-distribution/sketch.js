let randomCounts = [];
let total = 20;
let gap = 4;

// Set minimum and maximum scaling factors
let minScalingFactor = 0.1;
let maxScalingFactor = 5;

// Set minimum and maximum text sizes
let minTextSize = 8;
let maxTextSize = 20;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }

  // Set text properties
  textAlign(CENTER, BOTTOM);
}

function draw() {
  background(255);

  // Increment a random bar
  let index = floor(random(randomCounts.length));
  randomCounts[index]++;

  // Find the maximum count in randomCounts[]
  let maxCount = max(randomCounts);

  // Estimate initial text size
  let estimatedTextSize = maxTextSize;

  // Initial calculation of available height
  let availableHeight = height - (estimatedTextSize * 2 + gap * 3);

  // Calculate scaling factor for the y-axis
  let scalingFactor = availableHeight / maxCount;

  // Constrain the scaling factor between minScalingFactor and maxScalingFactor
  scalingFactor = constrain(scalingFactor, minScalingFactor, maxScalingFactor);

  // Adjust text size inversely proportional to scaling factor
  let dynamicTextSize = constrain(1 / scalingFactor * 20, minTextSize, maxTextSize);

  // Update text size
  textSize(dynamicTextSize);

  // Recalculate text height
  let textHeight = textAscent() + textDescent();

  // Recalculate available height with the new text size
  availableHeight = height - (textHeight * 2 + gap * 3);

  // Recalculate scaling factor with the updated available height
  scalingFactor = availableHeight / maxCount;

  // Constrain the scaling factor again
  scalingFactor = constrain(scalingFactor, minScalingFactor, maxScalingFactor);

  // Set up the drawing context
  push();
  translate(0, height - textHeight - gap); // Move origin to bottom-left corner
  scale(1, -scalingFactor); // Flip y-axis and scale vertically

  let w = width / randomCounts.length;

  // Set fill color for the bars
  fill(26, 242, 83);
  noStroke();

  // Draw the bars
  for (let x = 0; x < randomCounts.length; x++) {
    let count = randomCounts[x];

    // Draw the bar starting from (x * w, 0)
    rect(x * w, 0, w - 1, count);
  }

  pop(); // Restore the original drawing context

  // Draw texts after restoring the context
  for (let x = 0; x < randomCounts.length; x++) {
    let count = randomCounts[x];
    let barX = x * w;
    let barHeight = count * scalingFactor;

    // Set text color
    fill(0); // Black color for text
    noStroke();

    // Calculate the position for the count text
    let barTopY = height - textHeight - gap - barHeight;

    // Display the count number above each bar
    text(count, barX + w / 2, barTopY - gap);

    // Display the index number below each bar
    text(x, barX + w / 2, height - gap);
  }
}
let voltage = 9; // Simulated voltage
let dialAngle = 0;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-holder');
}

function draw() {
  background(250);
  drawMeter();
  drawProbes();
}

function drawMeter() {
  fill(230);
  stroke(0);
  rect(100, 100, 200, 300, 20);

  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(`${voltage.toFixed(2)} V`, 200, 130);

  // Dial
  push();
  translate(200, 220);
  rotate(dialAngle);
  strokeWeight(4);
  line(0, 0, 0, -40); // needle
  pop();

  strokeWeight(1);
  noFill();
  ellipse(200, 220, 100, 100); // dial circle
}

function drawProbes() {
  stroke(255, 0, 0);
  strokeWeight(6);
  line(150, 350, mouseX, mouseY); // red probe
  stroke(0);
  line(250, 350, mouseX - 20, mouseY - 20); // black probe
}
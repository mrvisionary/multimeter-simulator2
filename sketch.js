let dialAngle = 0;
let currentMode = "OFF";

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-holder');
}

function draw() {
  background('#e0f7fa'); // light teal
  updateMode();
  drawMeter();
  drawProbes();
  drawLabel();
}

function drawLabel() {
  textSize(18);
  fill(50);
  textAlign(CENTER);
  text("AutoTrainer DMM", width / 2, 90);
}

function drawMeter() {
  fill(230);
  stroke(0);
  rect(100, 100, 200, 300, 20); // meter body

  // Display reading based on currentMode
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);

  let displayValue = "";
  switch (currentMode) {
    case "OFF":
      displayValue = "--.--";
      break;
    case "DCV":
      displayValue = "12.64 V";
      break;
    case "ACV":
      displayValue = "119.0 V~";
      break;
    case "Ohms":
      displayValue = "3.2 Ω";
      break;
    case "Beep":
      displayValue = "🔊";
      break;
    case "Amps":
      displayValue = "0.45 A";
      break;
  }
  text(displayValue, 200, 130);

  // Dial face
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

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    dialAngle -= PI / 12;
  } else if (keyCode === RIGHT_ARROW) {
    dialAngle += PI / 12;
  }
}

function updateMode() {
  let angle = dialAngle % TWO_PI;
  if (angle < 0) angle += TWO_PI;

  if (angle < PI / 6) {
    currentMode = "OFF";
  } else if (angle < PI / 3) {
    currentMode = "DCV";
  } else if (angle < PI / 2) {
    currentMode = "ACV";
  } else if (angle < 2 * PI / 3) {
    currentMode = "Ohms";
  } else if (angle < 5 * PI / 6) {
    currentMode = "Beep";
  } else {
    currentMode = "Amps";
  }
}

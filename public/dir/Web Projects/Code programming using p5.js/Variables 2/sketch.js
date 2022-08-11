let x = 0;
// Declare

function setup() {
  
  createCanvas(400,400);
  
}

function draw() {
  
  background(0);
  
  noStroke();
  fill(255);
  ellipseMode(CENTER);
  
  x = x + 1; // or x++;
  // Initialize
  
  ellipse(x,200,100,100);
  // Use
  
}

function mousePressed() {
  
  x = 0;
  
}
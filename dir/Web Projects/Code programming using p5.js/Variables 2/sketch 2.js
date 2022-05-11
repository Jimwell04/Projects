let x = 0;
// Declare

function setup() {
  
  createCanvas(400,400);
  
  background(0);
  
}

function draw() {
  
  stroke(0);
  fill(255);
  ellipseMode(CENTER);
  
  x = x + 1; // or x++;
  // Initialize
  
  ellipse(200,200,x,x);
  // Use
  
}

function mousePressed() {
  
  x = 0;
  
}
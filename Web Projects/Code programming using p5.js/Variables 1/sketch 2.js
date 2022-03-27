// Run One's
function setup() {
  
  createCanvas(400,400);
  
}

// Run Forever
function draw() {
  
  background(0);
  
  noStroke();
  fill(mouseX);
  //   rgb
  
  ellipseMode(CENTER);
  
  ellipse(mouseX,mouseY,100,100);
  //        x      y     w   h
  
  
}
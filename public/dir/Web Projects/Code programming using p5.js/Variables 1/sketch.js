// Run One's
function setup() {
  
  createCanvas(400,400);
  
  background(0);
  
}

// Run Forever
function draw() {
  
  
  noStroke();
  fill(mouseX);
  //   rgb
  
  ellipseMode(CENTER);
  
  ellipse(mouseX,mouseY,50,50);
  //        x      y    w   h
  
  
}
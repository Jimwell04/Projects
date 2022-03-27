let r, g, b;
let val = 200;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  //              w            h
  
  background(255);
  
}

function mousePressed() {
  
  r = random(val);
  //         max
  g = random(val);
  //         max
  b = random(val);
  //         max
  
}

function draw() {
  
  fill(r, g, b);
  noStroke();
  circle(mouseX, mouseY, 50);
  //      x       y      wh
  
}
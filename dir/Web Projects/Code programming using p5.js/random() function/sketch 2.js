let x, y;
let r, g, b;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  //              w            h
  
  background(0);
  
}

function draw() {
  
  x = random(width);
  //          max
  y = random(height);
  //          max
  
  r = random(255);
  //         max
  g = random(255);
  //         max
  b = random(255);
  //         max
  
  fill(r,g,b,100);
  //          a
  noStroke();
  circle(x,y,50);
  //         wh
  
}
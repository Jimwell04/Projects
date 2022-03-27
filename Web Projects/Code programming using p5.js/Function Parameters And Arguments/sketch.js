function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  background(0);
  
  lollipop(100, 50, 50);
  lollipop(250, 340, 80);
  lollipop(300,200, 50);
  lollipop(100, 250, 40);
  lollipop(150, 150, 90);
  lollipop(300, 500, 50);
  
}

function lollipop(x, y, wh) {
  
  noStroke();
  
  fill(255);
  rect(x-10, y, 10, 80);
  
  fill(0, 0, 255);
  ellipse(x, y, wh);
  
}
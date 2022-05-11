let colX;
let colY;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  //                w           h             
}

function draw() {
  
  colX = map(mouseX,0,width,0,255);
  colY = map(mouseY,0,width,0,255);
  
  background(colX);
  
  fill(colY);
  noStroke();
  circle(mouseX,mouseY,100);
  //      x    y    wh
  
}
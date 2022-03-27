let num = 0;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  background(0);
 
  fill("#FF7400");
  ellipse(num,height/2,150);
  
  num = num + 4;
}

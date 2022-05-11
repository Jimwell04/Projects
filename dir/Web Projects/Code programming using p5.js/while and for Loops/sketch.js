let r, g, b;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  frameRate( 2 );
  //        fps
  
  background(0);
  noStroke();
  
  let x = 0;
  
  while (x <= width) {
  
  r = random(255);
  //         max
  g = random(255);
  //         max
  b = random(255);
  //         max
  
  fill(r,g,b);
  ellipse(x, height/2, 30);
  //           y       wh
  
  x = x + 50;
  
   }
   
   for (let y = 0; y <= height; y = y + 50) {
     
  r = random(255);
  //         max
  g = random(255);
  //         max
  b = random(255);
  //         max
  
  fill(r,g,b);
  ellipse(width/2, y, 30);
  //        x         wh
  
  y = y + 25;
  
   }
  
}
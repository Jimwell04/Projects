let x = 0;
let y = 0;
let speedX = 5;
let speedY = 5;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  background(0);
  
  ellipse(x, y,200);
  //            wh
  
  if (x > width) {
     
     speedX = random(-5,-10);
     //              min max
    
  } else if (x < 0) {
    
    speedX = random(5, 10);
    //             min max
    
  }
  
  if (y > height) {
  
    speedY = random(-5,-10);
    //              min max
  
  } else if (y < 0) {
  
    speedY = random(5, 10);
    //             min max
  
  }
  
   x += speedX;
   y += speedY;
}
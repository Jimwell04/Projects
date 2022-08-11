let x1 = 0;
let x2 = 0;
let x3 = 1000;
let x4 = 2;
let x5 = 1000;

function setup() {
  
  createCanvas(1000,1000);
  
}

function draw() {
  
  background(0);
  
  x1++;
  // x1 = x1 + 1;
  // or x1 += 1;
  fill(x1,0,0);
  ellipse(x1,200,100);
  //             wh
  
  x2 += 2;
  // x2 = x2 + 2;
  fill(x2,0,0);
  ellipse(x2,400,100);
  //             wh
  
  x3 -= 2;
  // x3 = x3 - 2;
  fill(x3,0,0);
  ellipse(x3,600,100);
  //             wh
  
  x4 *= 2;
  // x4 = x4 * 2;
  fill(x4,0,0);
  ellipse(x4,800,100);
  //             wh
  
  x5 /= 2;
  // x5 = x5 / 2;
  fill(x5,0,0);
  ellipse(x5,1000,100);
  //             wh
  
}

function mousePressed() {
  
   x1 = 0;
   x2 = 0;
   x3 = 1000;
   x4 = 0;
   x5 = 1000;
  
}
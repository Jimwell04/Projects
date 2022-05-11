// let size = random(50,100);
// error

let size;

function setup() {
  
  createCanvas(500,500);
  
  background(155);
  
}

function draw() {
  
  
  size = random( 50  ,  350 );
  //             min    max
  
  fill(0,0,255,10);
  //   r g  b   a
  stroke(0,0,255,10);
  //     r g  b   a
  strokeWeight(5);
  rectMode(CENTER);
  rect(250,250,size);
  //    x   y   wh
  
}
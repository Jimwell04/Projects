function setup() {
  
  createCanvas(400,400);
  
}

function draw() {
  
  background(100, 200, 300);
  //          r    g    b
  
  fill(100);
  //   rgb
  stroke(255,255,255);
  //      r   g   b
  rect(200,200,100,100);
  //    x   y   w   h
  
  
  fill(255,0,0);
  //    r  g b
  stroke(0,0,255);
  //     r g  b 
  strokeWeight(5);
  //           w
  ellipse(100,100,50,50);
  //       x   y  w   h
  
  noFill();
  stroke(255,0,0);
  //      r  g b
  ellipse(100,200,50,50);
  //       x   y   w  h
  
  fill(0,255,0);
  //   r  g  b
  noStroke();
  ellipse(200,100,50,50);
  //       x   y  w   h
  
  fill( 0 ,100);
  //   rgb  a
  noStroke();
  ellipse(200,300,125,125);
  
}
let bubble2;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
  bubble2 = new bubble(200,200,100);
  //                    x   y   r
  
}

function draw() {
  
  background(0,155,255);
  
  bubble2.show();
  bubble2.strokeWeight(5);
  bubble2.color(0,0,255,155);
  //            r g  b   a
  bubble2.animate(  3  );
  //              speed
  
}
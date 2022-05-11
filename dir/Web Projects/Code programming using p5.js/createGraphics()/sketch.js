let newCanvas;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  //               w             h
  
  newCanvas = createGraphics(   windowWidth,windowHeight);
  //    w            h
  
  newCanvas.clear();
  
}

function draw() {
  
  background(255);
  
  fill(0);
  noStroke();
  ellipse(mouseX,mouseY,10,50);
  //        x      y     w  h
  
  
  if (mouseIsPressed) {
    
    newCanvas.fill(0);
    newCanvas.noStroke();
    newCanvas.ellipse(
      mouseX,mouseY - 20,10,10);
   //   x          y     w   h
    
  }
  
  image(newCanvas, 0, 0);
  //      img      x  y
  
  ellipseMode(CENTER);
  
}
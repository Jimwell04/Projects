function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  background(255);
  
  if (mouseIsPressed) {
    
    background(255,0,0);
    
    fill(255);
    noStroke();
    ellipse(mouseX,mouseY,10);
    
    stroke(255);
    line(0, 0 ,mouseX,mouseY);
    //  x1  y1   x2      y2  
    line(width,0,mouseX,mouseY);
    //    x1   y1  x2     y2
    line(0,height,mouseX,mouseY);
    //  x1   y1    x2     y2
    line(width,height,mouseX,mouseY);
    //    x1     y1     x2     y2
    
    line(width/2, 0, mouseX, mouseY);
    //     x1     y1   x2      y2  
    line(
      width, height/2, mouseX, mouseY);
    //  x1     y1        x2     y2
    line(0, height/2, mouseX, mouseY);
    //  x1    y1        x2     y2
    line(
      width/2, height, mouseX, mouseY);
    //  x1       y1        x2     y2
    
  }
  
}
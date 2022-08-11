let bg = 0;


function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  if (mouseX > width/4 && mouseY > height/4) {
    
    bg = 100;
    
  } else {
    
    bg = 0;
    
  }
  
  background(bg);
  
  if (mouseX > width/2) {
    
    noStroke();
    fill(0,0,255);
    rect(mouseX,mouseY,400);
    //    x      y     wh
    
  } else if (mouseX > width/3) {
    
    noStroke();
    fill(255,0,0);
    rect(mouseX,mouseY,300);
    //    x      y     wh
    
  } else if (mouseX > width/4) {
    
    noStroke();
    fill(0,255,0);
    rect(mouseX,mouseY,200);
    //     x      y    wh
    
  } else {
    
    noStroke();
    fill(255);
    rect(mouseX,mouseY,100);
    //     x      y    wh
    
  }
  
}
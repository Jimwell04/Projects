let on = false;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  if (on) {
    
    background(0,0,200);
    
  } else {
    
    background(0);
    
  }
  
}

function mousePressed() {
  
  if (on) {
  
    on = false;
  
  } else {
  
    on = true;
  
  }
  
  // or 
  // on = !on;
  
}
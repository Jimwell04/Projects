let fillColor;
let strokeColor;
let strokeFillColor;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
  print(10 < 5);
  //     False
  print(50 > 31);
  //     True
  
  fillColor = 255;
  strokeColor = 255;
  strokeFillColor = 0;
  
}

function draw() {
  
  background(0);
  
  fill(0,0,fillColor);
  //   r g    b
  noStroke();
  ellipse(mouseX,mouseY,100);
  //        x      y     wh
  
  fill(0,0,strokeFillColor);
  //   r g        b
  stroke(0,0,strokeColor);
  //     r g      b
  ellipse(width/2,height/2,100);
  //        x       y       wh
  
  
  if (  mouseX > width/2  ) {
    // Boolean Expression
    
    fillColor = 0;
    strokeColor = 0;
    strokeFillColor = 255;
    
  } else {
    
    fillColor = 255;
    strokeColor = 255;
    strokeFillColor = 0;
    
  }
  
  // Relational Operator
  // =
  // !=
  // <
  // > 
  // =<
  // =>
  
}


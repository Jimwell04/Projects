let bubbles = [];

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 100; i++) {
    
    let x = random(width);
    let y = random(height);
    let rds = random(10,50);
    
    bubbles[i] = new bubble(x, y, rds);
    
  }
  
}

function draw() {
  
  background(0, 155, 255);
  
  for (let bubble of bubbles) {
    
    bubble.show();
    bubble.animate(  5  );
    //             speed
    
  }
  
}

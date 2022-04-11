let bubbles = [];

function setup() {
  
  createCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  
    let rds = random(10, 50);
    //               min max
    let b = new bubble(mouseX, mouseY, rds);
    
    bubbles.push(b);
    
    print(bubbles.length);
  
}

function draw() {
  
  background(0, 155, 255);
  
  for (let bubble of bubbles) {
    
    bubble.show();
    bubble.animate(  5  );
    //             speed
    
  }
  
}

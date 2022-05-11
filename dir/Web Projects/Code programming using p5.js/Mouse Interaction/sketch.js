let bubbles = [];

function setup() {
  
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  
  let click;
  let index;
  
    for (let bubble of bubbles) {
      
      if (bubble.click()) {
        
        click = true;
        index = bubbles.indexOf(bubble);
        
      } else {
        
        click = false;
        
      }
      
    }
    
    if (click) {
      
      bubbles[index].color(255,0,0);
      
    } else {
      
      let rds = random(50, 100);
      //               min max
      let b = new bubble(mouseX, mouseY, rds);
      
      bubbles.push(b);
      
      print(bubbles.length);
      
    }
    
}

function draw() {
  
  background(0, 155, 255);
  
  for (let bubble of bubbles) {
    
    bubble.show();
    bubble.animate(  1  );
    //             speed
    
  }
  
}

let bubbles = [];
let click;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  
  let index;
  
  if (bubbles.length === 0) {
    
    click = false;
    
  }
  
    for (let bubble of bubbles) {
      
      if (bubble.click()) {
        
        click = true;
        index = bubbles.indexOf(bubble);
        
      } else {
        
        click = false;
        
      }
      
    }
    
    if (click) {
      
      bubbles.splice(index,1);
      
    } 
    
}

function mouseDragged() {
  
  if (!click) {
    
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
  
  if (bubbles.length >= 10) {
    
    bubbles.splice(0,1);
    
  }
  
}

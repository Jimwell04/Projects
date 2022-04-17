let bubbles = [];
let img;
let num = 100;

function preload() {
  
  img = loadImage("bubble.png");
  
}

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
  for (let i = 0; i < num; i++) {
   
   let x = random(width);
   let y = random(height);
   let rds = random(10, 50);
   
   bubbles[i] = new bubble(img,x,y,rds);
    
  }
  
}

function draw() {
  
  background(0, 155, 255);

  for (let bubble of bubbles) {
    
    bubble.show();
    bubble.animate(5);
    
  }
  
}

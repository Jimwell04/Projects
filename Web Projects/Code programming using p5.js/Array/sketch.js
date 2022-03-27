let words = ["I like to","become","successful","programmer","and","entrepreneur"];

let index = 0;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  background(255);
  
  fill(0);
  textSize(25);
  text(words[index], 10, height/2);
  //       str        x     y
  
}

function mousePressed() {
  
  index = index + 1;
  
  if (index == words.length) {
    
    index = 0;
    
  }
  
}
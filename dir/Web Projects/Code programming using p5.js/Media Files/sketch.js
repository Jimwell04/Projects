let img;

function preload() {
  
  img = loadImage("image.jpg");
  //                  path
  
}

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  background(255);
  image(img, 0, 0, width, height);
  //         x  y
  
}

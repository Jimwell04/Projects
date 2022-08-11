let canvas;
let bgm;
let lamok, lamokX, lamokY;
let salamin;

function preload() {
  
    // Load Background Music //
    bgm = loadSound("../music/lamok.mp3", function() {
  
      bgm.loop();
      bgm.rate(1.5);
  
    });
  
    // Load Lamok Image //
    lamok = loadImage("../img/lamok.png");
  
    // Load Salamin Image //
    salamin = loadImage("../img/salamin.png");
  
}

function setup() {
  
  // Canvas //
  canvas = createCanvas(windowWidth, windowHeight);
  
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  
}

function draw() {
  
  background(255);
 
  // Lamok //
  lamokX = random(width);
  lamokY = random(height);
  
  lamokX += random(-5,5);
  lamokY += random(-5,5);
  
  image(lamok, lamokX, lamokY, 50, 50);
  image(lamok, lamokX, lamokY, 50, 50);
  image(lamok, lamokX, lamokY, 50, 50);
  image(lamok, lamokX, lamokY, 50, 50);
  image(lamok, lamokX, lamokY, 50, 50);
  
  // Salamin //
  
  image(salamin, mouseX, mouseY, 100, 100);
  
  
}

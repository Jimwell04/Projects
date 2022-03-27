let canvas;
let bgm;

function preload() {
  
 bgm = loadSound("../music/lamok instrumental.mp3", function () {
   
   bgm.loop();
   bgm.rate(1.0);
   
 });
 
 
  
}

function setup() {
  
      // Canvas //
      canvas = createCanvas(windowWidth, windowHeight);
  
      canvas.position(0, 0);
      canvas.style("z-index", "-1");
  
}

function draw() {
  
  background(255);
  
}
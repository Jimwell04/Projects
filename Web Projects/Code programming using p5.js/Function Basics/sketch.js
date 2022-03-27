let ball;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
  ball = {
  
    x: width / 2,
    y: height / 2,
    wh: 10,
    xspeed: 4,
    yspeed: -5,
  
  }
  
}

function draw() {
  
  background(0);
  
  display();
  move();
  bounce();
  
}

function display() {
  
  noStroke();
  fill(255);
  ellipse(ball.x, ball.y, ball.wh);
  
}

function move() {
  
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  
}

function bounce() {
  
  if (ball.x > width || ball.x < 0) {
    
    ball.xspeed = ball.xspeed * -1;
    
  }
  
  if (ball.y > height || ball.y < 0) {
    
    ball.yspeed = ball.yspeed * -1;
    
  }
  
}
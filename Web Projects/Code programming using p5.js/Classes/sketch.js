let bubble1;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
  bubble1 = new bubble();
  bubble1.sw = 2;
  bubble1.a = 155;
  
}

function draw() {
  
  background(0,155,255);

    bubble1.show();
    bubble1.animate(   2  );
    //              speed
   
}

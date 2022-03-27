let words = ["Computer","Science","Mathematics","Technology","Physics","Programming","Software","Hardware","Hacking","Application","Website","Games"];
let num;
let ran;


function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
  frameRate(2);
  //       fps
  
  background(0);
  
  ran = random(words.length);
  num = round(ran);
  //           n
  
  
  for (let x = 0; x < width; x += width/4) {
    
    for (let y = 0; y < height; y += width/4) {
       
       fill(255);
       text(words[num],x,y);
      
    }
    
  }
  
}
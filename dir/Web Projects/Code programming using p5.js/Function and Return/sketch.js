function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
  let angle = degrees(   PI/2   );
  //                   radians
  print(   angle   );
  //     contents
  
  
  let miles = km(PI);
  print(miles);
  
  
  let miles2 = km(angle);
  print(miles2);
  
}

function km(miles) {
  
  let km = miles * 1.6;
  
  return km;
}

function draw() {
  
  background(0);
  
}
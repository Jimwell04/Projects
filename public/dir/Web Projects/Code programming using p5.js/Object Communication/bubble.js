class bubble {
  
  constructor(x, y, rds = 50) {
    
    
    this.x = x
    this.y = y
    this.w = rds;
    this.h = rds;
    this.rds = rds;
    
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = 255;
    
    this.sw = 1;
    
  }
  
  show() {
    
    noFill();
    stroke(this.r, this.g, this.b, this.a);
    strokeWeight(this.sw);
    ellipse(this.x, this.y, this.w, this.h);
    
  }
  
  animate(speed = 2) {
    
    this.y = this.y - speed;
    this.x = this.x - random(-5,5);
    
    if (this.x < 0) {
      
    this.x = this.x * -5;
      
    } else if (this.x > width) {
      
      this.x = this.x - 10;
      
    }
    
    if (this.y < 0) {
      
      this.y = height;
      
    }
    
  }
  
  
  color(r,g,b,a = 255) {
    
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    
  }
  
  strokeWeight(sw) {
    
    this.sw = sw
    
  }
  
  position(x,y) {
    
    this.x = x;
    this.y = y;
    
  }
  
  size(w,h) {
    
    this.w = w;
    this.h = h;
    
  }
  
  click() {
    
    let distance = dist(mouseX, mouseY, this.x, this.y);
    
    if (distance < this.rds ) {
      
      
      return true;
    } else {
      
      return false;
    }
    
  }
  
  intersects(object) {
    
    let distance = dist(this.x, this.y, object.x, object.y);
    
    if (distance < this.rds + object.rds) {
      
      return true;
    } else {
      
      return false;
    }
    
  }
  
}


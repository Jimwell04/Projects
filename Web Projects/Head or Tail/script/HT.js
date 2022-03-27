let arr = ["H","T"];

class HT {
  
  constructor() {
    
    this.value;
    
  }
  
  H() {
    
   this.value = arr[0];
    
    return this.value;
  }
  
  T() {
    
    this.value = arr[1];
    
    return this.value;
  }
  
  val() {
    
    let ran = Math.floor(Math.random() * arr.length);
    
    this.value = arr[ran];
    
    return this.value;
  }
  
}
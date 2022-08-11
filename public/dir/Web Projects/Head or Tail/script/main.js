$(document).ready(() => {
  
  let x = new HT();
  let btna = $("#btna");
  let btnc = $("#btnc")
  let container = $("#container");
    
    const HorT = () => {
      
      let value = x.val();
      
      return value;
    }
    
    const toss = () => {
      
      let value = HorT();
      
      container.append(`
      
      <img src="img/${value}.jpg" width="150" height="150" class="m-2">
      
      `);
      
    }
    
    const clear = () => {
      
      container.empty();
      
    }
  
  
  const effect = (val) => {
    
    if (val == "a") {
      
    let audio = new Audio("../audio/mixkit.mp3");
    audio.play();
    
    }
    
    if (val == "c") {
      
      let audio = new Audio("../audio/mixkit2.mp3");
      audio.play();
      
    }
    
  }
  
  btna.on("click", () => {
    
      effect("a");
      toss();
      
  });
  
  btnc.on("click", () => {
    
    effect("c");
    clear();
    
  });
  
});
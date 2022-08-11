let card = $(".card");

$(document).ready(() => {
  
  card.hover(() => {
    
    console.log("Hover");
    
    $(this).removeClass();
    $(this).addClass("black card");
    
  });
  
});

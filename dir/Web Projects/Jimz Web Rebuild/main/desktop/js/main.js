const loader = $(".loader");
const menu = $("#menu");
const quotes = $("#quotes");
const jimz = $("#jimz");
const desc = $("#desc");
const project = $("#project");
const projectDesc = $("#projectDesc");
const suggest = $("#suggest");
const suggestDecs = $("#suggestDecs");
const warning = $("#warning");
const quotesNum = 10;
const suggestNum = 3;

$(window).on("load",function () {
  
  loader.fadeOut("show");
  
  menu.load("../../../data/text/menu.txt", function() {
  
    const item = $(".item");
    item.on("click", function() {
  
          $(this).removeClass();
          $(this).addClass("item active");
    });
    
    const hideMenu = $("#hideMenu");
    hideMenu.hide();
    
    const showMenu = $("#showMenu");
    showMenu.on("click", function () {
     
     const imgMenu = $("#imgMenu");
     
     imgMenu.animate({
       height: "165px",
       width: "165px",
     
     });
     
      hideMenu.slideToggle();
      
    });
    
        });
  
  for (let i = 0; i < quotesNum; i++) {
    
    quotes.append(
      
      `<div class="swiper-slide">
      
      <img src="../../data/quotes/q${i}.png">
      
      </div>`
      
      );
    
  }
  
  jimz.load("../../../data/text/jimz.txt");
  
  desc.load("../../../data/text/description.txt");
  
  project.load("../../../data/text/project/project.txt", function () {
 
   projectDesc.load("../../../data/text/project/description/description.txt");
 
   const projectName = $(".projectName");
   projectName.hover(function() {
     
     projectDesc.hide();
     projectDesc.fadeIn();
     
     const id = $(this).text();
     
     projectDesc.load(`../../../data/text/project/description/${id}.txt`);
     
   });
    
  });
  
  suggest.load("../../../data/text/suggest/suggest.txt", function () {
    
    suggestDecs.load("../../../data/text/suggest/description/description.txt");
    
    const suggestItem = $("#suggestItem");
    suggestItem.hover(function () {
      
      suggestDecs.hide();
      suggestDecs.fadeIn();
      
      const id = $(this).text();
      print(id);
      
      suggestDecs.load(`../../../data/text/suggest/description/${id}.txt`);
      
    });
    
  });
  
  warning.load("../../../data/text/warning.txt", function () {
    
    const warningIcon = $("#warningIcon");
    
    warningIcon.on("click", function () {
      
      warning.fadeOut("show");
      
    });
    
  });
  
  
  
});


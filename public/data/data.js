// Id
const cards = $("#cards");

$(document).ready(() => {
  
  // Projects Data
  $.getJSON("../data/project.json",(data) => {
    
    for (x in data) {
      
      cards.append(`
      
    <a href="${data[x].Url.Website}" class="card">
        <div class="image">
          <img src="${data[x].Url.Image}">
        </div>
        <div class="content">
          <div class="header">
            ${x}
          </div>
          <div class="description">
            ${data[x].Description}
          </div>
        </div>
    </a>
      
      
      `);
      
      
    }
    
  }); 
  
});

$(document).ready(() => {
  
  let name = $("#name").val();
  let icon = $("#icon");
  let extension = "";
  
  for (let i = 0; i < name.lenght; i++) {
    
    if (name[i] == ".") {
      
      for (let j = i; j < name.lenght; j++) {
        
        extension.push(name[j]);
        
      }
      
    } 
    
  }
  
});

let hindi = document.querySelector("#hindi");

hindi.addEventListener("click", () => {

run();

});

hindi.addEventListener("mouseover", () => {
  
run();
  
});

function run() {
  
  hindi.style.outline = "none";
  hindi.style.position = "absolute";
  hindi.style.transition = "0.00000001s";
  hindi.style.top = random(100, 250) +
    "px";
  hindi.style.right = random(100, 250) +
    "px";
  hindi.style.left = random(100, 250) +
    "px";
  
}

function random(min, max) {
  
  let val = Math.floor(Math.random() * (max - min) ) + min;
  
  return val;
}


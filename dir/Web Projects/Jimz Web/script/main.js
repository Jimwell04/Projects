

// Update //
date = "Updated, August 27 2021";
select("#updated").innerHTML = date;





const c = 1;
const cpp = 25;
const cs = 1;
const objc = 0;
const swift = 0;
const dotNet = 0;
const java = 50;
const py = 25;
const js = 75;
const html = 50;
const css = 50;
const bootstrap = 25;
const aos = 10;
const p5js = 10;
const algo = 10;
const asm = 0;
const binary = 1;

const softDev = 10;
const appDev = 25;
const frontWebDev = 50;
const backWebDev = 10;

const soft = 25;
const hard = 25;
const logic = 50;
const probSolve = 50;
const com = 25;





style("#c").width = str(c) + "%";

style("#cpp").width = str(cpp) + "%";

style("#cs").width = str(cs) + "%";

style("#objc").width = str(objc) + "%";

style("#swift").width = str(swift) + "%";

style("#dotNet").width = str(dotNet) + "%";

style("#java").width = str(java) + "%";

style("#py").width = str(py) + "%";

style("#js").width = str(js) + "%";

style("#html").width = str(html) + "%";

style("#css").width = str(css) + "%";

style("#bootstrap").width = str(bootstrap) + "%";

style("#aos").width = str(aos) + "%";

style("#p5js").width = str(p5js) + "%";

style("#algo").width = str(algo) + "%";

style("#asm").width = str(asm) + "%";

style("#binary").width = str(binary) + "%";




style("#softDev").width = str(softDev) + "%";

style("#appDev").width = str(appDev) + "%";

style("#frontWebDev").width = str(frontWebDev) + "%";

style("#backWebDev").width = str(backWebDev) + "%";




style("#soft").width = str(soft) + "%";

style("#hard").width = str(hard) + "%";

style("#logic").width = str(logic) + "%";

style("#probSolve").width = str(probSolve) + "%";

style("#com").width = str(com) + "%";

let arrs = [
  
"#c",
"#cpp",
"#cs",
"#objc",
"#swift",
"#dotNet",
"#java",
"#py",
"#js",
"#html",
"#css",
"#bootstrap",
"#aos",
"#p5js",
"#algo",
"#asm",
"#binary",

"#softDev",
"#appDev",
"#frontWebDev",
"#backWebDev",

"#soft",
"#hard",
"#logic",
"#probSolve",
"#com"
 
  ]
  
  for (arr of arrs) {
    
    let val = select(arr).getAttribute("style");
    
    if (val == "width: 100%;") {
    				
    				addAttribute(arr, "class",   "progress-bar progress-bar-striped progress-bar-animated bg-danger" );
    				
    } else if (val == "width: 75%;") {
    				
    				addAttribute(arr, "class",   "progress-bar progress-bar-striped progress-bar-animated bg-warning" );
    				
    } else if (val == "width: 50%;") {
    				
    				addAttribute(arr, "class",   "progress-bar progress-bar-striped progress-bar-animated bg-info" );
    				
    } else if (val == "width: 25%;") {
    				
    				addAttribute(arr, "class",   "progress-bar progress-bar-striped progress-bar-animated bg-success" );
    				
    } else {
    				
    				addAttribute(arr, "class",   "progress-bar progress-bar-striped progress-bar-animated" );
    				
    } 
    
  }
  

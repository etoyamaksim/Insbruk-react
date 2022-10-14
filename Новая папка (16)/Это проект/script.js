let stepx=2
let stepy=2
let svg=document.querySelector("svg")
let image=document.querySelector("image")
let width=parseInt(svg.getAttribute("width"))
let height=parseInt(svg.getAttribute("height"))
let height_ball=parseInt(image.getAttribute("height"))
let width_ball=parseInt(image.getAttribute("width"))
function muv(){
let x=parseInt(image.getAttribute("x"))
let y=parseInt(image.getAttribute("y"))
x+=stepx
y+=stepy
if(y+height_ball>height || y<0){
stepy=-stepy
}
if(x+width_ball>width || x<0){
    stepx=-stepx
}

image.setAttribute('x',x)
image.setAttribute('y',y)
}  
setInterval(muv,10)
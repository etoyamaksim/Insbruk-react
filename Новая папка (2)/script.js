let Car=function(brand,model,color){
    this.brand=brand
    this.color=color
    this.model=model
}
Tesla=new Car("Tesla","10","black")
// console.log(Tesla)
let istimeshout=false
let Interval=null
function disable_timer(){
clearInterval(Interval)
clock.innerHTML="00:00:00"
document.body.style.background="white"
document.body.style.color="black"
}
function start(){
    istimeshout=!istimeshout
    timer()
    istimeshout? enable_timer():disable_timer()
}
function enable_timer(){
   Interval=setInterval(timer,1000)
}
function timer(){
time=new Date()
console.dir(time)
let h=time.getHours().toString()
let m=time.getMinutes().toString()
let s=time.getSeconds().toString()
let clock=document.getElementById("clock")
if(s.length<2){
    s="0"+s
}
if(m.length<2){
    m="0"+m 
}
if(h.length<2){
    h="0"+h
}
clock.innerHTML=h+":"+m+":"+s
document.body.style.background="#"+m+h+s
document.body.style.color="#"+s+"ffff"
}
// let 
// let
// document.querySelector("").onclick=function(){

// }
// if(){

// }
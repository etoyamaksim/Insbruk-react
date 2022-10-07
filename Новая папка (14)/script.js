let car1=document.querySelector(".car1")
let car2=document.querySelector(".car2")
let has_win=false
let score=100
let car_color=""
document.querySelector(".score").innerHTML=score
let bet=0
let plus=document.querySelector(".plus")
let minus=document.querySelector(".minus")
plus.onclick=()=>{
  if(bet>=score){
    plus.disabled=true
  }
  else{
    minus.disabled=false
    bet+=10
    document.querySelector(".bet").innerHTML=bet
  }
}
minus.onclick=()=>{
  if(bet<10){
    minus.disabled=true
  }
  else{
    plus.disabled=false
    bet-=10
    document.querySelector(".bet").innerHTML=bet
  }
}
// let margin=0
// let interval=setInterval(() => {
//   let speed=Math.random()*0.1
//   margin=margin+speed
//   car1.style.marginLeft=margin+"%"
//   if(margin>100){
//     clearInterval(interval)
//   }
// }, 5);
// let margin2=0
// let interval2=setInterval(() => {
//   let speed=Math.random()*0.1
//   margin2=margin2+speed
//   car2.style.marginLeft=margin2+"%"
//   if(margin2>100){
//     clearInterval(interval2)
//   }
// }, 5);
let speed_car=(car,color)=>{
 let margin2=0
 
let interval2=setInterval(() => {
  let speed=Math.random()*0.1
  margin2=margin2+speed
  car.style.marginLeft=margin2+"%"
  if(margin2>100){
    has_win=true
    if(car_color==color){
      score+=bet*2
      document.querySelector(".score").innerHTML=score
    }
  }
  if(has_win==true){
    clearInterval(interval2)
    alert("Победа"+car)
  }
}, 5); 
}
let check_winner=(color)=>{
  has_win=false
  speed_car(car1,"white")
  speed_car(car2,"black")
  car_color=color
  score-=bet
  document.querySelector(".score").innerHTML=score
}
// speed_car(car1)
// speed_car(car2)
let finish=false
let attemps=3
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
    }
    
let sicritNamber=getRandomInt(1,10)
document.querySelector(".content").onclick=function(){
   let target=event.target
   if(target.classList.contains("number")){
    let userNamber=target.innerHTML
    check(userNamber)    
   }
}
function check(userNamber){
    if(!finish){
        if(userNamber>sicritNamber){
            document.querySelector(".hint").innerHTML="Загадонное число меньше"
            attemps=attemps-1
            }
            else if(userNamber<sicritNamber){
            document.querySelector(".hint").innerHTML="Загадонное число больше"
            attemps=attemps-1
            }
            else{
            document.querySelector(".hint").innerHTML="Загадонное число не больше и не меньше"
            finish=true
            // document.querySelectorAll(".number").disable=true
            }
            document.querySelector("span").innerHTML=attemps
            if(attemps==0){
                document.querySelector(".hint").innerHTML="У вас закончились попытки. Нажмите на кнопку"
        finish=true
            }
    }
    document.querySelector("new").onclick=function(){
    
    }
}

let min=1
let max=9
document.querySelector("select").onchange=function(){
    let value=document.querySelector("select").value
    if(value=="easy"){
        min=1
        max=9
    }
    else if(value=="medium"){
        min=10
        max=99
    }
    else {
        min=100
        max=999
    }
}
document.querySelector(".add").onclick=function(){
    let num1=getrendom(min,max)
    let num2=getrendom(min,max)
    let corectanswer=num1+num2
let useranswer=prompt(num1+"+"+num2+"=?","")
checkanswer(useranswer,corectanswer)
}
function getrendom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkanswer(useranswer,corectanswer){
    if(useranswer==corectanswer){
        alert("Правильно")
    }
    else{alert("Неправильно,правильный ответ "+corectanswer)}
}
document.querySelector(".subtract").onclick=function(){
    let num1=getrendom(1,9)
    let num2=getrendom(1,9)
    let corectanswer=num1-num2
let useranswer=prompt(num1+"-"+num2+"=?","")
checkanswer(useranswer,corectanswer)
}
document.querySelector(".multiply").onclick=function(){
    let num1=getrendom(1,9)
    let num2=getrendom(1,9)
    let corectanswer=num1*num2
let useranswer=prompt(num1+"*"+num2+"=?","")
checkanswer(useranswer,corectanswer)
}
document.querySelector(".divide").onclick=function(){
    let num1=getrendom(1,9)
    let num2=getrendom(1,9)
    let corectanswer=Math.round(num1/num2)
let useranswer=prompt(num1+"/"+num2+"=?","")
checkanswer(useranswer,corectanswer)
}
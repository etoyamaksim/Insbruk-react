let secretNumber=getrendon(1,5)
let attepts=3
function getrendon(min,max){
    console.log(min)
    console.log(max)
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
getrendon(1,100)
document.querySelector(".check").onclick=function(){
    let usernumber=document.querySelector(".number").value
    document
    console.log(secretNumber==usernumber);
    console.log(secretNumber>usernumber);
    console.log(secretNumber<usernumber);
    if(secretNumber==usernumber){
        console.log("Вы выйграли")
        alert("Вы выйграли")
        document.querySelector(".check").disabled=true;
    }
    else if(secretNumber<usernumber){
        console.log("Загадонное число меньше")
        alert("Загадонное число меньше")
        document.querySelector(".start").disabled=true;
    }
    else{console.log("Загадонное число больше")}
    attepts=attepts-1
    document.querySelector(".attempts").innerHTML=attepts
    alert("загадонное число больше")
    document.querySelector(".start").disabled=true;
    if(attepts<1){
    console.log("Вы проиграли")
    alert("Вы проиграли")
    document.querySelector(".check").disabled = true;
}
document.querySelector(".start").onclick=function(){
    document.querySelector(".check").disabled =false;
    attepts=3
    document.querySelector(".attempts").innerHTML=attepts
}
}
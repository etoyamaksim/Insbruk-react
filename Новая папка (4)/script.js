let name="maxim"
// document.querySelector(".button").onclick=function()
// {alert("Привет,"+name)}
document.querySelector(".add").onclick=function(){
    let num1=document.querySelector(".number1").value; 
    let num2=document.querySelector(".number2").value;
    alert(parseInt(num1)+parseInt(num2))
    console.log(typeof(num1))
}
document.querySelector(".subtract").onclick=function(){
    let num1=document.querySelector(".number1").value;
    let num2=document.querySelector(".number2").value;
    alert(parseInt(num1)-parseInt(num2))
}
document.querySelector(".multiply").onclick=function(){
    let num1=document.querySelector(".number1").value;
    let num2=document.querySelector(".number2").value;
    alert(parseInt(num1)*parseInt(num2))
}
document.querySelector(".divide").onclick=function(){
    let num1=document.querySelector(".number1").value;
    let num2=document.querySelector(".number2").value;
    alert(parseInt(num1)/parseInt(num2))
}
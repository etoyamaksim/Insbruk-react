let button=document.querySelector("button")
let rows
let arr=[]
let counter=0
let input=document.querySelector("input")
function iteration(){
    arr.push(rows[counter])
    document.querySelector("p").innerHTML=arr.join("")
    counter++
    if(counter>rows.lenght){
        clearInterval(interoval)
    }
}
function print_rows(link){
    if(input.value=="" || input.value==" "){
document.querySelector("a").disable=true
    }
    input.remove()
    button.remove()
    let a=document.createElement("a")
    let name=""
    a.innerHTML="start_game"
    a.href=link
    name=input.value
    rows=`привет,${name}.тут будут правила игры`
    document.querySelector("p").innerHTML=rows                                                     
let interoval=setInterval(iteration,100)
    console.log(rows)
    document.querySelector("div").appendChild(a)
}

// document.querySelector("").onclick=function(){

// }
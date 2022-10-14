let combs = [

    [0, 1, 2],
    
    [3, 4, 5],
    
    [6, 7, 8],
    
    [0, 3, 6],
    
    [1, 4, 7],
    
    [2, 5, 8],
    
    [0, 4, 8],
    
    [2, 4, 6],
    
    ]
    
let list = [ '','','','','','','','','' ]
let char
let turn=0
document.querySelector(".container").onclick=()=>{
let Element=event.target
let node=Element.parentNode
console.log(node)
// if(turn%2==0){
//     char="x"
// }
// else{
//     char="0"
// }
turn%2==0? char="x":char="0"
if(Element.innerText==""){
    Element.innerText=char
    let i=([...node.children].indexOf(Element))
    list[i]=char
    for(let x=0;x<combs.length;x++){
    if(list[combs[x][0]]==char && list[combs[x][1]]==char && list[combs[x][2]]==char){
   document.querySelector(".isWinner").innerHTML=char+" winner"                                   
    }
    }
    console.log([...node.children])                                                   
    turn++
}
}

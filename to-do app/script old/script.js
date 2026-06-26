//---------array--------------------------
let todo= [];

//----element adder------------------------
let adder=document.getElementById("add");
let listspace=document.getElementById("list");

adder.onclick=()=>{
    console.log("clicks");
    let element=document.getElementById("ele").value;
    if(element!=""){
        todo.push(element);
        listspace.innerHTML+=`<li><p>${todo[todo.length-1]}</p> <button id="${todo.length}">remove</button></li>`;
    }
}
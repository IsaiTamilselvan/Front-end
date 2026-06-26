//---------array--------------------------
let todo= [];

//----element adder------------------------
let adder=document.getElementById("add");
let listspace=document.getElementById("list");

//--------add element button---------------
adder.onclick=()=>{
    console.log("clicks");
    let element=document.getElementById("ele").value;
    if(element!=""){
        todo.push(
            {task:element,
            status:false
            }
        );
    }
    document.getElementById("ele").value = "";
    showtodo();
}
//-------print ui--------------------
function showtodo(){
    listspace.innerHTML="";
    for(let i=0;i<todo.length;i++){

        if(todo[i].status){
            listspace.innerHTML+=`<li id="${i}"><input onclick="togglestatus(${i})" type="checkbox" checked><p>${todo[i].task}</p> <button onclick="removelist(${i})" class="removebtn" >remove</button></li>`;
            document.getElementById(i).style.backgroundColor="lightgreen";
        }else{
            listspace.innerHTML+=`<li id="${i}"><input onclick="togglestatus(${i})" type="checkbox"><p>${todo[i].task}</p> <button onclick="removelist(${i})" class="removebtn" >remove</button></li>`;
            document.getElementById(i).style.backgroundColor="sandybrown";
        }
    }
    document.getElementById("count").innerHTML=`Tasks:${todo.length}`;
}
//----------remover--------------------
function removelist(index){
    todo.splice(index,1);
    showtodo();
}
//------------clear all----------------
let clear=document.getElementById("clear");

clear.onclick=()=>{
    todo=[];
    showtodo();
}
//---------status toggle------------------
function togglestatus(ind){
    todo[ind].status=!todo[ind].status;        
    showtodo();
}
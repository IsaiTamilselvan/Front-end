//yes handling------------------------------------------
let yesBtn=document.querySelector("#yesbtn");

yesBtn.onclick=()=>{

    if(yesBtn.innerHTML==="no"){
        yesBtn.innerHTML="yeshh";
        noBtn.innerHTML="haha"
    }

}
//no button handling------------------------------------

let noBtn=document.querySelector("#nobtn");
noBtn.addEventListener("touchstart",movebutton);
noBtn.addEventListener("mouseenter",movebutton);

function movebutton(){

    let x=Math.random()*300;
    let y=Math.random()*150;
    noBtn.style.left=`${x}px`;
    noBtn.style.top=`${y}px`;

}

noBtn.onclick=()=>{
    noBtn.innerHTML="yes";
    yesBtn.innerHTML="hug";
    
    if(noBtn.innerHTML==="yes"){
        comments();
    }
}
//proposal ui => comment -----------------------------------
let card=document.querySelector("#card");

yesBtn.onclick=()=>{
    comments();
}

function comments(){

    card.innerHTML=`<h1>Yayyyy 💖</h1>

    <p>Share your thoughts about thamiz ✨</p>

    <input type="text" id="commentInput"
    placeholder="type here...">

    <button id="submitBtn">Send 💌</button>

    <br>

    <p>I can’t figure out who said,so just comment casually.</p>

    <div id="comments"></div>

    `;

}

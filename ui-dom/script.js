// ------------------------------------------------
// SETUP
// ------------------------------------------------

let card = document.querySelector("#card");

let proposalPage = card.innerHTML;


// ------------------------------------------------
// INITIAL LOAD
// ------------------------------------------------

setupProposalPage();


// ------------------------------------------------
// PROPOSAL PAGE LOGIC
// ------------------------------------------------

function setupProposalPage() {

    let yesBtn = document.querySelector("#yesbtn");

    let noBtn = document.querySelector("#nobtn");


// YES BUTTON

yesBtn.onclick = () => {

    if (yesBtn.innerHTML.includes("YES")) {

        showCommentsPage();

    } else {

        swapButtons();

    }

};


// NO BUTTON

noBtn.onclick = () => {

    if (noBtn.innerHTML.includes("YES")) {

        showCommentsPage();

    } else {

        swapButtons();

    }

};

    // BUTTON MOVEMENT

    noBtn.addEventListener("mouseenter", moveButton);

    noBtn.addEventListener("touchstart", moveButton);


    function moveButton() {

        if (noBtn.innerHTML.includes("NO")) {

            let x = Math.random() * 300;

            let y = Math.random() * 150;

            noBtn.style.left = `${x}px`;

            noBtn.style.top = `${y}px`;

        }

    }


    // SWAP BUTTON TEXT

    function swapButtons() {

        let temp = yesBtn.innerHTML;

        yesBtn.innerHTML = noBtn.innerHTML;

        noBtn.innerHTML = temp;

    }

}


// ------------------------------------------------
// COMMENTS PAGE
// ------------------------------------------------

function showCommentsPage() {

    card.innerHTML = `

    <button id="backBtn">⬅</button>

    <h1>Yayyyy 💖</h1>

    <p>Share your thoughts about Thamiz ✨</p>

    <input
    type="text"
    id="commentInput"
    placeholder="type here...">

    <button id="submitBtn">Send 💌</button>

    <p>
    I can’t figure out who said it,
    so comment casually 💖
    </p>

    <div id="comments"></div>

    `;


    // BACK BUTTON

    let backBtn = document.querySelector("#backBtn");

    backBtn.onclick = () => {

        card.innerHTML = proposalPage;

        setupProposalPage();

    };


    // COMMENT BUTTON

    let submitBtn = document.querySelector("#submitBtn");

    // SUBMIT BUTTON FOR COMMENTS

    submitBtn.onclick = () => {

        let input = document.querySelector("#commentInput");

        let text = input.value;

        if (text !== "") {

            card.innerHTML =`
            
            <h1>Currently no API</h1>
            <h4>😉send comment on instagram🤞</h4>
            <img src="img/propose.png" alt="" width="190px" height="190px">
            `

            input.value = "";

        }

    };

}

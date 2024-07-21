//Getting data from documents by id
let homeScoreEl=document.getElementById("home-score")
let guestScoreEl=document.getElementById("guest-score")




function plusOneHome(){
    let currentScore = parseInt(homeScoreEl.textContent);
    homeScoreEl.textContent = currentScore + 1;
}
function plusTwoHome(){
    let currentScore = parseInt(homeScoreEl.textContent);
    homeScoreEl.textContent = currentScore + 2;
}
function plusThreeHome(){
    let currentScore = parseInt(homeScoreEl.textContent);
    homeScoreEl.textContent = currentScore + 3;
}



function plusOneGuest(){
    let currentScore = parseInt(guestScoreEl.textContent);
    guestScoreEl.textContent = currentScore + 1;
}
function plusTwoGuest(){
    let currentScore = parseInt(guestScoreEl.textContent);
    guestScoreEl.textContent = currentScore + 2;
}
function plusThreeGuest(){
    let currentScore = parseInt(guestScoreEl.textContent);
    guestScoreEl.textContent = currentScore + 3;
}


function newGame(){
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
}
const spinBtn = document.getElementById("spin");
const creditBtn = document.getElementById("credit");

const creditTxt = document.getElementById("creditOutput");
const winningsTxt = document.getElementById("winningsOutput");
const messageTxt = document.getElementById("message");
collectBtn = document.getElementById("collect");
const firstImg = document.getElementById("img1");
const secondImg = document.getElementById("img2");
const thirdImg = document.getElementById("img3");

spinBtn.addEventListener("click", spin);
            creditBtn.addEventListener("click", credit);
collectBtn.addEventListener("click", collect);
let apple = "apple.png";
let banana = "banana.png";
let bar = "bar.png";
let cherry = "cherries.png"
let grape = "grapes.png";
let lemon = "lemon.png";
let melon = "melon.png";
let orange = "orange.png";
let images = [apple, banana, bar, cherry, grape, lemon, melon, orange];
let selectionfirstImg = Math.floor(Math.random() * 8);
let selectionsecondImg = Math.floor(Math.random() * 8);
let selectionthirdImg = Math.floor(Math.random() * 8);
firstImg.innerHTML = "<img src="+images[selectionfirstImg]+">";
secondImg.innerHTML = "<img src="+images[selectionsecondImg]+">";
thirdImg.innerHTML = "<img src="+images[selectionthirdImg]+">";
function spin() {
                              if(creditTxt.innerText < 1) {
    }
    else {
 creditTxt.innerText -= 1;
 let selectionfirstImg = Math.floor(Math.random() * 8);
 let selectionsecondImg = Math.floor(Math.random() * 8);
 let selectionthirdImg = Math.floor(Math.random() * 8);
 firstImg.innerHTML = "<img src="+images[selectionfirstImg]+">";
 secondImg.innerHTML = "<img src="+images[selectionsecondImg]+">";
 thirdImg.innerHTML = "<img src="+images[selectionthirdImg]+">";
 
    if (selectionsecondImg == selectionthirdImg) {
        messageTxt.innerText = "2 fruits! 5 points!";
        winningsTxt.innerText -= -5;
    }
    else if (selectionfirstImg == selectionsecondImg == selectionthirdImg) {
        messageTxt.innerText = "3 matching fruits! thats 10 pointsS!";
        winningsTxt.innerText -= -10;
    }
    else {
        messageTxt.innerText = 'bad luck, try spinning again!'
    }
}
}
function credit() {
 creditTxt.innerText -= -1;
 messageTxt.innerText = "Credit has been added, Spin to win more !";
}

function collect() {
    if(winningsTxt.innerText < 1){
        messageTxt.innerText = "no avalible winnings, keeping spinning to win some!"
    }
    else {
        let winnings = winningsTxt.innerText;
        winningsTxt.innerText = 0;
}
}
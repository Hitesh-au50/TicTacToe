let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

// winning pattern
let winninPattern = [[0, 1, 2], [0, 3, 6], [2, 5, 8], [6, 7, 8], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6],];
// player x
let xTurn = true;
let count = 0;
const disabledButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    // enable popup
    popupRef.classList.remove("hide");
};
// enable all buttons(new game)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    // disabled 
    popupRef.classList.add("hide");
}
// when player win

// new game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
})
// this fun will execute whem win
const winFunction = (letter) => {
    disabledButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; &#128525; &#129297;&#128165;&#127882; <br> CONRATUALATIONS <br> 'X' Wins";
    }
    else {
        msgRef.innerHTML = "&#x1F389;  &#128525; &#129297; &#128165; &#127882;<br>  CONRATUALATIONS <br> 'O' Wins";
    }

};
// function for draw
const drawFunction = () => {
    disabledButtons();
    msgRef.innerHTML = "&#128532; &#128552; &#128534; &#128560;<br> OOP's <br>  It's a DRAW";
};
// win logic
const winCheck = () => {
    // loop throough all win
    for (let i of winninPattern) {
        let [element1, element2,
            element3] = [btnRef[i[0]].innerText, btnRef[i[1]].innerText, btnRef[i[2]].innerText,];
        // check if every elemnet is filled
        // if 3 are same give win 
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                // if all values are same pass to winvaluefunction
                winFunction(element1);
            }
        }
    }

}

// display x/0 on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            // display
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            xTurn = true;
            // display
            element.innerText = "O";
            element.disabled = true;
        }
        // increment
        count += 1;
        if (count === 9) {
            // its draw
            drawFunction();

        }
        // check win on everyclick
        winCheck();
    })
});
window.onload = enableButtons;
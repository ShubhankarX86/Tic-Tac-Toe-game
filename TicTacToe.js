//variable for the overhead screen
let screen = document.getElementById('scr');

//array to store buttons
let button = new Array(9);

for (let i = 1; i < 10; i++) {
    button[i] = document.getElementById(i);
}

//array to store click count
let clickedOnce = new Array(9);

for (let j = 1; j < 10; j++) {
    clickedOnce[j] = false;
}

//array to store symbols
let symbol = new Array(9);

for (let m = 1; m < 10; m++) {
    symbol[m] = " ";
}

//variables for 2 possible symbols("O" and "X")
let symbolA = "X";
let symbolB = "O";

let clickCount = 0;
let isWinner = false;
let winner = " ";

if (clickCount == 0) {
    screen.innerText = "Player X starts first.";
}

//function to reset the game
function resetGame() {
    clickCount = 0;
    isWinner = false;
    winner = " ";

    for (let j = 1; j < 10; j++) {
        clickedOnce[j] = false;
    }

    for (let m = 1; m < 10; m++) {
        symbol[m] = " ";
    }

    for (let i = 1; i < 10; i++) {
        button[i].innerText = " ";
    }
    screen.innerText = "Player X starts first.";
}

function declareWinner(symb) {
    isWinner = true;
    winner = symb;
    screen.innerText = "The Winner is " + winner + "! Reset to give it another shot.";
    alert("The winner is player " + winner + "! Congratulations.");
}


//The following method is called everytime each tile is pressed after 4 tile clicks to evaluate and declare the winner.
function evaluator() {
    let sym = " ";
    
    for (let i = 0; i < 2; i++) {
        if (i == 0) {
            sym = symbolA;
        }
        else {
            sym = symbolB;
        }
        if (symbol[1] == sym && symbol[2] == sym && symbol[3] == sym) {
            declareWinner(sym);
            break;
        }
        else if (symbol[4] == sym && symbol[5] == sym && symbol[6] == sym) {
            declareWinner(sym);
            break;
        }
        else if (symbol[7] == sym && symbol[8] == sym && symbol[9] == sym) {
            declareWinner(sym);
            break;
        }
        else if (symbol[1] == sym && symbol[4] == sym && symbol[7] == sym) {
            declareWinner(sym);
            break;
        }
        else if (symbol[2] == sym && symbol[5] == sym && symbol[8] == sym) {
            declareWinner(sym);
            break;
        }
        else if (symbol[3] == sym && symbol[6] == sym && symbol[9] == sym) {
            declareWinner(sym);
            break;
        }
        else if (symbol[1] == sym && symbol[5] == sym && symbol[9] == sym) {
            declareWinner(sym);
            break;
        }
        else if (symbol[3] == sym && symbol[5] == sym && symbol[7] == sym) {
            declareWinner(sym);
            break;
        }
        if (clickCount == 9 && isWinner == false) {
            alert("The match is a tie!");
            screen.innerText = "The match is a tie! Reset to give it another shot.";
        }
    }
}

//function embedded inside for-loop for tile buttons, save for the reset button
for (let h = 1; h < 10; h++) {
    document.getElementById(h).onclick = function () {

        if (clickedOnce[h] == false && isWinner == false) {
            clickCount++;
            if (clickCount % 2 != 0) {
                button[h].innerText = symbolA;
                symbol[h] = symbolA;
                screen.innerText = "Player " + symbolB + "'s turn";
            }
            else {
                button[h].innerText = symbolB;
                symbol[h] = symbolB;
                screen.innerText = "Player " + symbolA + "'s turn";
            }
        }
        clickedOnce[h] = true;
        if (clickCount > 4) {
            evaluator();
        }
    }
}

/*
Minimum requirements
Display an empty tic-tac-toe board when the page is initially displayed.
A player can click on the nine cells to make a move.
Every click will alternate between marking an X and O.
Display whose turn it is (X or O).
The cell cannot be played again once occupied with an X or O.
Provide win logic and display a winning message.
Provide logic for a cat’s game (tie), also displaying a message.
Provide a Reset Game button that will clear the contents of the board.
*/

/* Pseudo Code
1) Define the required variables used to track the state of the game.

2) Store cached element references.

3) Upon loading, the game state should be initialized, and a function should 
   be called to render this game state.

4) The state of the game should be rendered to the user.

5) Define the required constants.

6) Handle a player clicking a square with a `handleClick` function.

7) Create Reset functionality.

*/

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board 
let turn 
let winner
let tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr")
console.log(squareEls)

const messageEL = document.querySelector("#message")
console.log(messageEL)

/*-------------------------------- Functions --------------------------------*/

const init = () => {
     board = ["u", "", "", "w", "", "", "x", "", ""];
     turn  = "X";
     winner = false;
     tie = false;
    
     render();
};
console.log (init)






const updateBoard = () => {
    board.forEach((square) => {
        squareEls[square] = board[square] 
    });
}


const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEL.textContent = "Player " + turn +"'s turn";
    }
    else if (winner === false && tie === true) {
        messageEL.textContent = "You tied!";
    } 
    else {
        // NO ; after the if before the else; else is chained to if.
        messageEL.textContent = "Congratulations player " + turn + " you won!";
    }
};




const render = () => {
    updateBoard()
    // invoke = add () after a function
    updateMessage()
}

init()
    // step 3.b "Call th einit function when the app loads" = call (used interchangably with "invoke") the function anywhere 

/*----------------------------- Event Listeners -----------------------------*/




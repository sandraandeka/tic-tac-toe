let player0 = '0';
let player1 = 'X';
let currentPlayer = player0;
//               0  1  2  3  4  5  6  7 8
let gameBoard = ["","","","","","","","",""]
let gameCells;
let gameOver = false;
let winningConditions = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
]
window.onload = function(){
    gameCells = document.getElementsByClassName('game-cell')
    for(let cells of gameCells){
        cells.addEventListener('click', placeCell)
    }
    let resetBtn = document.getElementById('resetBtn')
    resetBtn.addEventListener('click', resetGame)
}
function placeCell(){
    if(gameOver){
        return
    }
    const index = parseInt(this.getAttribute('data-cell-index'))
    if(gameBoard[index]!= ""){
        return
    }
    gameBoard[index] = currentPlayer
    this.innerText = currentPlayer
    //check the player
    currentPlayer = (currentPlayer === player0)? player1 : player0
    checkWinner()
}
function checkWinner (){
    
    for(let winningCondition of winningConditions){
        let a = gameBoard[winningCondition[0]];
        let b = gameBoard[winningCondition[1]];
        let c = gameBoard[winningCondition[2]];
        if(a === b && b === c && a != ""){
            for(let i = 0; i <= gameBoard.length; i++){
                if(winningCondition.includes(i)){
                    gameCells[i].classList.add('winner')
                }
            }
            gameOver = true
            return;
        }
    }
}
//resetGame

function resetGame(){
    gameOver = false;
    gameBoard = ["","","","","","","","",""]
    for(let cell of gameCells){
        cell.innerText = " "
        cell.classList.remove('winner')
    }

}